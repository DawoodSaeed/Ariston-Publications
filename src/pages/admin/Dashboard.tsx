// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from "@/context/AuthContext";
import { Container, Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const { authToken } = useAuth();
  const [stats, setStats] = useState({});
  const [manuscripts, setManuscripts] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedManuscript, setSelectedManuscript] = useState(null);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, manuscriptsRes] = await Promise.all([
        axios.get('/api/admin/dashboard', {
          headers: { Authorization: `Bearer ${authToken}` }
        }),
        axios.get('/api/admin/manuscripts', {
          headers: { Authorization: `Bearer ${authToken}` }
        })
      ]);
      setStats(statsRes.data);
      setManuscripts(manuscriptsRes.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const fetchIssues = async (journalId) => {
    try {
      const res = await axios.get(`/api/journals/${journalId}/issues`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      setIssues(res.data);
    } catch (err) {
      console.error('Failed to fetch issues:', err);
    }
  };

  const handleAssignClick = (manuscript) => {
    setSelectedManuscript(manuscript);
    fetchIssues(manuscript.journal_id);
    setShowAssignModal(true);
  };

  const handleAssignSubmit = async () => {
    try {
      await axios.put(
        `/api/admin/manuscripts/${selectedManuscript.id}/assign`,
        { issue_id: selectedIssue },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      setShowAssignModal(false);
      fetchDashboardData();
    } catch (err) {
      console.error('Failed to assign manuscript:', err);
    }
  };

  const updateStatus = async (manuscriptId, status) => {
    try {
      await axios.put(
        `/api/admin/manuscripts/${manuscriptId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      fetchDashboardData();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  return (
    <Container fluid>
      <h2 className="my-4">Admin Dashboard</h2>
      
      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Journals</Card.Title>
              <Card.Text className="display-4">{stats.total_journals}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Manuscripts</Card.Title>
              <Card.Text className="display-4">{stats.total_manuscripts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Published</Card.Title>
              <Card.Text className="display-4">{stats.published_manuscripts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text className="display-4">{stats.total_users}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Header>
          <h5>Manuscript Management</h5>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Journal</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {manuscripts.map(ms => (
                <tr key={ms.id}>
                  <td>{ms.title}</td>
                  <td>{ms.journal_name || 'Unassigned'}</td>
                  <td>
                    <Form.Select 
                      value={ms.status} 
                      onChange={(e) => updateStatus(ms.id, e.target.value)}
                    >
                      <option value="submitted">Submitted</option>
                      <option value="under_review">Under Review</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                      <option value="published">Published</option>
                    </Form.Select>
                  </td>
                  <td>{new Date(ms.submission_date).toLocaleDateString()}</td>
                  <td>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={() => handleAssignClick(ms)}
                    >
                      Assign to Issue
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Assign to Issue Modal */}
      <Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Manuscript to Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Issue</Form.Label>
              <Form.Select 
                value={selectedIssue} 
                onChange={(e) => setSelectedIssue(e.target.value)}
              >
                <option value="">Select an issue</option>
                {issues.map(issue => (
                  <option key={issue.id} value={issue.id}>
                    {issue.year} - Vol. {issue.volume} ({issue.is_special ? issue.special_issue_title : `Issue ${issue.number}`})
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAssignModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAssignSubmit}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;