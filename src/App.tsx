import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [assignments, setAssignments] = useState<string[]>([]);

  const addAssignment = (newAssignment: string) => {
    setAssignments([...assignments, newAssignment]);
  };

  const deleteAssignment = (index: number) => {
    const newAssignments = [...assignments];
    newAssignments.splice(index, 1);
    setAssignments(newAssignments);
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments assignments={assignments} addAssignment={addAssignment} deleteAssignment={deleteAssignment} />
    </>
  );
}

export default App;





