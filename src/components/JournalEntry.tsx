import React, { useState } from "react";
import styles from "./JournalEntry.module.css";

interface JournalEntryProps {
  entryData: {
    id: string;
    content: string;
    createdAt: Date;
  };
  onDelete: () => void;
  onUpdate: (entryId: string, newContent: string) => void;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ entryData, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(entryData.content);

  const handleEdit = () => {
    onUpdate(entryData.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className={styles.journalEntry}>
      {isEditing ? (
        <textarea
          className={styles.editInput}
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <div className={styles.entryContent}>{entryData.content}</div>
      )}
      <div className={styles.entryFooter}>
        <span className={styles.entryDate}>
          {entryData.createdAt.toLocaleDateString()}{" "}
          {entryData.createdAt.toLocaleTimeString()}
        </span>
        <div className={styles.entryActions}>
          {isEditing ? (
            <button className={styles.editButton} onClick={handleEdit}>
              Save
            </button>
          ) : (
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
          <button className={styles.deleteButton} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;