import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/SidebarComponent";
import CardElements from "./components/CardElements";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="topbar">topbar</div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row-01">
          <CardElements />
          <div className="net-profit">
            <div className="np-text">
              <h4 className="np-text-head">netprofit</h4>
              <h1 className="np-text-body">$ 6759.25</h1>
              <div className={"np-text-stonks"}>
                <ArrowDropUpIcon />
                3%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
