import React, { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignments: string[];
  addAssignment: (newAssignment: string) => void;
  deleteAssignment: (index: number) => void;
}

export function Assignments({ assignments, addAssignment, deleteAssignment }: Props) {
  const [completedCount, setCompletedCount] = useState(0); // State to track completed assignments count

  const handleDelete = (index: number) => {
    deleteAssignment(index);
  };

  const handleCompletion = () => {
    setCompletedCount(completedCount + 1); // Increment completed count
  };

  const handleUndoCompletion = () => {
    setCompletedCount(completedCount - 1); // Decrement completed count
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            assignment={assignment}
            onDelete={() => handleDelete(index)}
            onCompletion={handleCompletion}
            onUndoCompletion={handleUndoCompletion}
          />
        ))}
      </div>
    </section>
  );
}



