import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import JournalEntry from "./JournalEntry";
import styles from "./Journal.module.css";
import { toast } from "react-toastify";

interface JournalProps {
  user: any;
}

interface JournalEntryData {
  id: string;
  content: string;
  createdAt: Date;
}

const Journal: React.FC<JournalProps> = ({ user }) => {
  const [entries, setEntries] = useState<JournalEntryData[]>([]);
  const [newEntryContent, setNewEntryContent] = useState("");

  useEffect(() => {
    if (!user) return;

    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("journalEntries")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const newEntries = snapshot.docs.map((doc) => ({
          id: doc.id,
          content: doc.data().content,
          createdAt: doc.data().createdAt.toDate(),
        }));
        setEntries(newEntries);
      });

    return () => unsubscribe();
  }, [user]);

  const addJournalEntry = () => {
    if (!user || !newEntryContent.trim()) return;

    db.collection("users")
      .doc(user.uid)
      .collection("journalEntries")
      .add({
        content: newEntryContent,
        createdAt: new Date(),
      });

    setNewEntryContent("");
  };

  const deleteJournalEntry = (entryId: string) => {
    if (!user) return;

    db.collection("users")
      .doc(user.uid)
      .collection("journalEntries")
      .doc(entryId)
      .delete()
      .catch((error) => {
        console.error("Error deleting journal entry: ", error);
		toast.error("Error deleting journal entry");
      });
  };

  const updateJournalEntry = (entryId: string, newContent: string) => {
    if (!user) return;

    db.collection("users")
      .doc(user.uid)
      .collection("journalEntries")
      .doc(entryId)
      .update({
        content: newContent,
      })
      .catch((error) => {
        console.error("Error updating journal entry: ", error);
		toast.error("Error updating journal entry");
      });
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.journal}>
        <h1 className={styles.journalTitle}>Journal</h1>
        <div className={styles.editorContainer}>
          <textarea
            className={styles.newEntryTextarea}
            placeholder="Write your journal entry here..."
            value={newEntryContent}
            onChange={(e) => setNewEntryContent(e.target.value)}
          />
          <button className={styles.addButton} onClick={addJournalEntry}>
            Add Journal Entry
          </button>
        </div>
        <div className={styles.entriesContainer}>
          {entries.map((entry) => (
            <JournalEntry
              key={entry.id}
              entryData={entry}
              onDelete={() => deleteJournalEntry(entry.id)}
              onUpdate={updateJournalEntry}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;