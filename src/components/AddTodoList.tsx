import React, { useState } from "react";
import styles from "./AddTodoList.module.css";

interface AddTodoListProps {
  onAdd: (name: string) => void;
}

const AddTodoList: React.FC<AddTodoListProps> = ({ onAdd }) => {
  const [name, setName] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      onAdd(name);
      setName("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New list name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className={styles.addButton}>
        Add List
      </button>
    </form>
  );
};

export default AddTodoList;
