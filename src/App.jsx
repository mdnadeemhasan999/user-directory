import { useState } from 'react';
import { DataProvider } from './DataContext';

import Home from './Components/Home';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider> {/* Wrap your components with DataProvider */}
        <Home />
    </DataProvider>
  );
}

export default App;