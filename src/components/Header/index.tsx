import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface Props {
  addAssignment: (newAssignment: string) => void;
}

export function Header({ addAssignment }: Props) {
  const [newAssignment, setNewAssignment] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAssignment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
    if (!newAssignment.trim()) 
    
    return; // Don't add empty assignments

    console.log("Adding assignment:", newAssignment); 
    addAssignment(newAssignment);
    setNewAssignment(''); // Clear input field after adding assignment
  };

  const isInputEmpty = !newAssignment.trim();

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={newAssignment}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isInputEmpty}>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
}
