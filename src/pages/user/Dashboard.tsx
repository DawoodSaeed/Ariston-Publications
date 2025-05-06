import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

const dummyReviews = [
  {
    id: "REV001",
    title: "AI in Healthcare",
    authors: "Dr. Jane Smith, Dr. Adeel Khan",
    deadline: "2025-06-15",
    status: "Pending",
  },
  {
    id: "REV002",
    title: "Blockchain Security Framework",
    authors: "John Doe",
    deadline: "2025-06-10",
    status: "Completed",
  },
];

export default function ReviewerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reviewer Portal</h1>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
          <TabsTrigger value="completed">Completed Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card className="mt-4">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Authors</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyReviews
                    .filter((review) => review.status === "Pending")
                    .map((review) => (
                      <TableRow key={review.id}>
                        <TableCell>{review.id}</TableCell>
                        <TableCell>{review.title}</TableCell>
                        <TableCell>{review.authors}</TableCell>
                        <TableCell>{review.deadline}</TableCell>
                        <TableCell>{review.status}</TableCell>
                        <TableCell>
                          <Button variant="outline">Review</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="mt-4">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Authors</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyReviews
                    .filter((review) => review.status === "Completed")
                    .map((review) => (
                      <TableRow key={review.id}>
                        <TableCell>{review.id}</TableCell>
                        <TableCell>{review.title}</TableCell>
                        <TableCell>{review.authors}</TableCell>
                        <TableCell>{review.deadline}</TableCell>
                        <TableCell>{review.status}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
