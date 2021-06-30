import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Home from './Pages/Home/Home';
import ScoreContext from './ScoreContext/ScoreContext';

function App() {

  const [score, setScore] = useState(0);

  return (
    <>
      <GlobalStyles />
      <ScoreContext.Provider value={{score, setScore}}>
        <Home />  
      </ScoreContext.Provider>
    </>
  );
}

export default App;
