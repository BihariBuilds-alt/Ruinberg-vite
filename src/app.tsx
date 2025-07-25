import { useState } from 'react';
import Navigation from './components/Navigation';

const App = () => {
  const [currentView, setCurrentView] = useState('feed');

  return (
    <>
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <div style={{ padding: 20 }}>
        <h1>Welcome to Ruinberg</h1>
        <p>This is the {currentView} page</p>
      </div>
    </>
  );
};

export default App;
