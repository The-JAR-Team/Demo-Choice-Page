import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FocusFlow</h1>
      </header>
      <main className="App-main">
        <div className="buttons">
          <a
            href="https://the-jar-team.github.io/focus-flow-client/#/?isGuest=true"
            className="BigButton"
            target="_blank"
            rel="noreferrer"
          >
            Enter Site
          </a>

          <a
            href="https://the-jar-team.github.io/focus-flow-client/#/"
            className="BigButton"
            target="_blank"
            rel="noreferrer"
          >
            Site Register/Login
          </a>

          <a
            href="https://the-jar-team.github.io/Engagement-Monitoring/"
            className="BigButton"
            target="_blank"
            rel="noreferrer"
          >
            Engagement Model Demo View
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
