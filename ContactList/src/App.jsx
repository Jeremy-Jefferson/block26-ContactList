import React, { useState } from 'react'; // Keep the import of 'useState' since it is used.

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit 
          <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  );
}

export default App;
