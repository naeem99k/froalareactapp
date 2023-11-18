import React from 'react';
import Button from './components/Button'; // Path to your Button component file
import Counter from './hooks/Counter'; // Path to your Counter component file
import EditorComponent from './components/EditorComponent'; // Path to your EditorComponent file

const App = () => {
  return (
    <div>
      <Button text="Click me" onClick={() => console.log('Button clicked!')} />
      <Counter />
      <EditorComponent />
    </div>
  );
};

export default App;