// src/components/JournalContent.tsx
import React from "react";
import "./JournalContent.css"; // Import corresponding CSS

const JournalContent: React.FC = () => {
  return (
    <main className="journal-content">
      <h1>BioMed and BioSci Advances</h1>
      <section>
        <h2>Aims and Scope</h2>
        <p>
          BioMed and BioSci Advances is a multidisciplinary peer-reviewed
          journal dedicated to advancing the frontiers of biomedical and
          biological sciences. Our mission is to provide a dynamic platform for
          researchers, clinicians, and scholars to disseminate groundbreaking
          discoveries and innovations.
        </p>
        {/* Add more content as needed */}
      </section>
      {/* Include additional sections such as Recent Articles, Editorial Board, etc. */}
    </main>
  );
};

export default JournalContent;
