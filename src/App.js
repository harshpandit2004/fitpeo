import "./App.css";
import Sidebar from "./components/SidebarComponent";
import CardElements from "./components/CardElements";
import NetProfitElement from "./components/NetProfitElement";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="topbar">topbar</div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row-01">
          <CardElements />
          <NetProfitElement />
        </div>
      </div>
    </div>
  );
}

export default App;
