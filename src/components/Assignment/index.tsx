import React, { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface Props {
  assignment: string;
  onDelete: () => void;
  onCompletion: () => void;
  onUndoCompletion: () => void;
}

export function Assignment({ assignment, onDelete, onCompletion, onUndoCompletion }: Props) {
  const [completed, setCompleted] = useState(false); // State to track completion status

  const handleCheckboxChange = () => {
    if (!completed) {
      setCompleted(true);
      onCompletion(); // Notify parent component of completion
    } else {
      setCompleted(false);
      onUndoCompletion(); // Notify parent component of undo completion
    }
  };

  const handleDelete = () => {
    onDelete();
    if (completed) {
      onUndoCompletion(); // Notify parent component of undo completion if deleted
    }
  };

return (
  <div className={`${styles.assignment} ${completed ? styles.completed : ''}`}>
    <div className={styles.checkbox} onClick={handleCheckboxChange}>
      <input type="checkbox" checked={completed} readOnly /> {/* Checkbox input */}
      <span className={styles.checkmark}></span>
    </div>
    <p>{assignment}</p>
    <button className={styles.deleteButton} onClick={handleDelete}>
      <TbTrash size={20} />
    </button>
  </div>
);
}