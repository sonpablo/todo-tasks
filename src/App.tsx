import { TasksContext } from 'context/TasksContext';
import Home from 'pages/Home';
import React from 'react';

export default function App(): JSX.Element {

  return (
    <TasksContext>
      <Home />
    </TasksContext>
  );
}