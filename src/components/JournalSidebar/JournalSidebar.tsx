import React from "react";
import { Journal } from "@/types/journal";

interface JournalSidebarProps {
  journal: Journal;
  selectedVolume: string | null;
  selectedIssue: string | null;
  onVolumeSelect: (volume: string) => void;
  onIssueSelect: (issue: string) => void;
}

const JournalSidebar: React.FC<JournalSidebarProps> = ({
  journal,
  selectedVolume,
  selectedIssue,
  onVolumeSelect,
  onIssueSelect,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Volumes & Issues
      </h2>
      <div className="space-y-4">
        {journal.volumes.map((volume) => (
          <div key={volume.volumeName} className="space-y-2">
            <button
              onClick={() => onVolumeSelect(volume.volumeName)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${
                selectedVolume === volume.volumeName
                  ? "bg-blue-50 text-blue-700"
                  : "hover:bg-gray-50"
              }`}
            >
              {volume.volumeName}
            </button>
            {selectedVolume === volume.volumeName && (
              <div className="pl-4 space-y-1">
                {Array.from(
                  new Set(
                    volume.researchArticles.map((article) => article.issue)
                  )
                ).map((issue) => (
                  <button
                    key={issue}
                    onClick={() => onIssueSelect(issue || "")}
                    className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors duration-150 ${
                      selectedIssue === issue
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    Issue {issue}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalSidebar;
