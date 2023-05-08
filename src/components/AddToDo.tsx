import React, { useState } from "react";
import styles from "./AddToDo.module.css";

interface AddToDoProps {
  onCreate: (title: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onCreate(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
};

export default AddToDo;
