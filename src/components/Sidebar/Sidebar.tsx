import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  { label: "Guide to Authors", to: "/guide-authors" },
  { label: "Guide for Reviewers", to: "/guide-reviewers" },
  { label: "Guide for Editors", to: "/guide-editors" },
  { label: "Indexing and Abstracting", to: "/indexing-abstracting" },
  { label: "Article Processing Charges", to: "/article-processing" },
  { label: "Recommend to Library", to: "/recommend-library" },
  { label: "Manuscript Template", to: "/manuscript-template" },
  { label: "Special Issues", to: "/special-issues" },
  { label: "Conferences", to: "/conferences" },
  { label: "Article in Press", to: "/article-press" },
  { label: "Current Issue", to: "/current-issue" },
  { label: "All Volumes", to: "/all-volumes" },
  { label: "Volume 1, Issue 4 (December 2024)", to: "/volume-1-issue-4" },
  { label: "Volume 1, Issue 3 (September 2024)", to: "/volume-1-issue-3" },
  { label: "Volume 1, Issue 2 (June 2024)", to: "/volume-1-issue-2" },
  { label: "Volume 1, Issue 1 (March 2024)", to: "/volume-1-issue-1" },
];

const Sidebar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#4F5087]">
      <div className="flex-1">
        {menuItems.map((item, idx) =>
          item.dropdown ? (
            <div key={item.label}>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-white text-sm bg-[#5C5DA6] border-b border-white/20 focus:outline-none"
                onClick={() => setAboutOpen((open) => !open)}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`h-4 w-4 ml-2 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="bg-[#6B6CB1]">
                  {item.subItems?.map((sub, subIdx) => (
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
      </div>

      {/* JOURNAL BROWSER section */}
      <div className="bg-white rounded-t-lg p-4 m-4">
        <h3 className="text-[#4F5087] font-bold text-xs mb-4 tracking-wide">
          JOURNAL BROWSER
        </h3>
        <div className="mb-3 flex flex-col gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Volume 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vol1">Volume 1</SelectItem>
              <SelectItem value="vol2">Volume 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Search" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="search1">Search Option 1</SelectItem>
              <SelectItem value="search2">Search Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-[#1B1B6B] hover:bg-[#15154f] text-white text-xs rounded">
          Go
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
