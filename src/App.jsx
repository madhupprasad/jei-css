import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jeivardan 💕</h1>
      <div className="card">
        <div className="btncont">
          <button
            className="button"
            onClick={() => setCount((count) => count + 1)}
          >
            add
          </button>
          <button
            className="button"
            onClick={() => setCount((count) => count - 1)}
          >
            sub
          </button>
        </div>
        <div>
          {/* add a card for count times like a tree structure css */}
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="card-container">
              <div className="line-container">
                {/* first and last item have extra css */}
                <div
                  className={`vline ${i === count - 1 ? "lastitem" : ""}
                  ${count === 1 ? "firstitem" : ""}
                  `}
                ></div>
                <div className="hline"></div>
              </div>
              <div className="count-card">{i + 1}</div>
            </div>
          ))}
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
