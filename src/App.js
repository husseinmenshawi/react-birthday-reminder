import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [originalData, setOriginalData] = useState(data);
  const [people, setPeople] = useState(data);
  const [clearBtnClicked, setClearBtnClicked] = useState(false);

  const handleClearOnClick = () => {
    setClearBtnClicked(true);
    setPeople([]);
  };

  const handleUndoOnClick = () => {
    setClearBtnClicked(false);
    setPeople(originalData);
  };

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        <button
          disabled={clearBtnClicked}
          style={{
            cursor: clearBtnClicked ? "not-allowed" : "pointer",
            backgroundColor: clearBtnClicked ? "#b4c3cc" : "#85ccf5",
          }}
          onClick={() => handleClearOnClick()}
        >
          Clear
        </button>
        <button
          disabled={!clearBtnClicked}
          style={{
            cursor: !clearBtnClicked ? "not-allowed" : "pointer",
            backgroundColor: !clearBtnClicked ? "#b4c3cc" : "#85ccf5",
          }}
          onClick={() => handleUndoOnClick()}
        >
          Undo
        </button>
      </section>
    </main>
  );
}

export default App;
