import cronstrue from "cronstrue";

function App() {
  const UTC = cronstrue.toString("1 2 3 4 5");
  const IST = cronstrue.toString("1 2 3 4 5", { tzOffset: 5.3 });
  return (
    <div className="App">
      <div className="flex flex-col">
        <div>UTC - {UTC}</div>
        <div>IST - {IST}</div>
      </div>
    </div>
  );
}

export default App;
