import { Journal } from "@/types/journal";

export const getJournal = async (journalName: string): Promise<Journal> => {
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
    return selectedJournal;
  } catch (error) {
    console.error("Error fetching journal:", error);
    throw error;
  }
};
