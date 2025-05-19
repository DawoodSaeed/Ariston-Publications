import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import "./Sidebar.css";

interface ResearchArticle {
  title: string;
  authors: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string;
  url: string;
  issue: string;
  article_type: string;
  volume?: string;
}

interface Volume {
  volumeName: string;
  researchArticles: ResearchArticle[];
}

interface Journal {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  volumes: Volume[];
}

const menuItems = [
  { label: "Journal - Home", to: "/" },
  {
    label: "About - Journal",
    to: "#",
    dropdown: true,
    subItems: [
      { label: "Aims & Scope", to: "/aims-scope" },
      { label: "Editorial Board", to: "/editorial-board" },
      { label: "Publication Ethics", to: "/publication-ethics" },
    ],
  },
  {
    label: "Guides",
    to: "#",
    dropdown: true,
    subItems: [
      { label: "Guide to Authors", to: "/guide-authors" },
      { label: "Guide for Reviewers", to: "/guide-reviewers" },
      { label: "Guide for Editors", to: "/guide-editors" },
    ],
  },
  { label: "Indexing and Abstracting", to: "/indexing-abstracting" },
  { label: "Article Processing Charges", to: "/article-processing" },
  { label: "Recommend to Library", to: "/recommend-library" },
  { label: "Manuscript Template", to: "/manuscript-template" },
  { label: "Special Issues", to: "/special-issues" },
  { label: "Conferences", to: "/conferences" },
  { label: "Article in Press", to: "/article-press" },
  { label: "Current Issue", to: "/current-issue" },
  { label: "All Volumes", to: "/all-volumes" },
];

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [journal, setJournal] = useState<Journal | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<string>("");
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const { journalName } = useParams();

  useEffect(() => {
    const fetchJournalData = async () => {
      try {
        const response = await fetch("/mock_data/journalPage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch journal data");
        }
        const data = await response.json();
        const { journalPages } = data;
        const selectedJournal = journalPages.find(
          (j: Journal) => j.title.trim() === journalName
        );
        if (!selectedJournal) {
          throw new Error(`Journal with title "${journalName}" not found`);
        }
        setJournal(selectedJournal);
      } catch (err) {
        console.error("Error fetching journal data:", err);
      }
    };

    if (journalName) {
      fetchJournalData();
    }
  }, [journalName]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleVolumeSelect = (value: string) => {
    setSelectedVolume(value);
    setSelectedIssue(""); // Reset issue when volume changes
  };

  const handleIssueSelect = (value: string) => {
    setSelectedIssue(value);
  };

  // Get unique issues for the selected volume
  const getIssuesForVolume = (volumeName: string) => {
    const volume = journal?.volumes.find((v) => v.volumeName === volumeName);
    if (!volume) return [];

    // Get unique issues and sort them
    const issues = Array.from(
      new Set(volume.researchArticles.map((article) => article.issue))
    ).sort((a, b) => parseInt(b) - parseInt(a)); // Sort in descending order
    return issues;
  };

  // Format volume and issue name for display
  const formatVolumeIssueName = (volume: string, issue: string) => {
    return `Volume ${volume}, Issue ${issue}`;
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#4F5087]">
      <div className="flex-1">
        {menuItems.map((item, idx) =>
          item.dropdown ? (
            <div key={item.label}>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-white text-sm bg-[#5C5DA6] border-b border-white/20 focus:outline-none"
                onClick={() => toggleDropdown(item.label)}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`h-4 w-4 ml-2 transition-transform ${
                    openDropdowns[item.label] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdowns[item.label] && (
                <div className="bg-[#6B6CB1]">
                  {item.subItems?.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      className="block px-8 py-2 text-white text-sm border-b border-white/10 hover:bg-[#7C7DC2]"
                      style={{ textDecoration: "none" }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              className={`block px-4 py-2 text-white text-sm bg-[#5C5DA6] border-b border-white/20`}
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </Link>
          )
        )}

        {/* Dynamic Volumes and Issues Section */}
        {journal?.volumes.map((volume) => (
          <div key={volume.volumeName}>
            {getIssuesForVolume(volume.volumeName).map((issue) => (
              <Link
                key={`${volume.volumeName}-${issue}`}
                to={`/journal/${journal.title}/${volume.volumeName}/${issue}`}
                className="block px-4 py-2 text-white text-sm bg-[#5C5DA6] border-b border-white/20 hover:bg-[#7C7DC2] transition-colors duration-200"
                style={{ textDecoration: "none" }}
              >
                {formatVolumeIssueName(volume.volumeName, issue)}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* JOURNAL BROWSER section */}
      <div className="bg-white rounded-t-lg p-4 m-4">
        <h3 className="text-[#4F5087] font-bold text-xs mb-4 tracking-wide">
          JOURNAL BROWSER
        </h3>
        <div className="mb-3 flex flex-col gap-2">
          <Select onValueChange={handleVolumeSelect} value={selectedVolume}>
            <SelectTrigger>
              <SelectValue placeholder="Select Volume" />
            </SelectTrigger>
            <SelectContent>
              {journal?.volumes.map((volume) => (
                <SelectItem key={volume.volumeName} value={volume.volumeName}>
                  Volume {volume.volumeName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleIssueSelect}
            value={selectedIssue}
            disabled={!selectedVolume}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Issue" />
            </SelectTrigger>
            <SelectContent>
              {selectedVolume &&
                getIssuesForVolume(selectedVolume).map((issue) => (
                  <SelectItem key={issue} value={issue}>
                    Issue {issue}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-full bg-[#1B1B6B] hover:bg-[#15154f] text-white text-xs rounded"
          onClick={() => {
            if (selectedVolume && selectedIssue && journal) {
              navigate(
                `/journal/${journal.title}/${selectedVolume}/${selectedIssue}`
              );
            }
          }}
          disabled={!selectedVolume || !selectedIssue}
        >
          Go
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
