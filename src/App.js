import { Home } from "./pages/Home";

function App() {
  return (
    <div
      className="App"
      style={{
        minWidth: 300,
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#5c0f22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
