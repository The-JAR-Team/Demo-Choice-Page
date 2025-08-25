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
          <div className="button-card">
            <a
              href="https://the-jar-team.github.io/focus-flow-client/#/?isGuest=true"
              className="App-button"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div>Enter Site</div>
                <div className="badge">Client</div>
              </div>
              <span className="cta">Open</span>
            </a>
          </div>

          <div className="button-card">
            <a
              href="https://the-jar-team.github.io/focus-flow-client/#/"
              className="App-button"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div>Site Register/Login</div>
                <div className="badge">Admin</div>
              </div>
              <span className="cta">Open</span>
            </a>
          </div>

          <div className="button-card">
            <a
              href="https://the-jar-team.github.io/Engagement-Monitoring/"
              className="App-button"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div>Engagement Model Demo View</div>
                <div className="badge">Demo</div>
              </div>
              <span className="cta">Open</span>
            </a>
          </div>
        </div>

        <div className="hint">Opens in a new tab</div>
      </main>
    </div>
  );
}

export default App;
