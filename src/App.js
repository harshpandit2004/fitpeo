import "./App.css";
import Sidebar from "./components/SidebarComponent";
import CardElements from "./components/CardElements";
import NetProfitElement from "./components/NetProfitElement";
import RecentOrdersComponent from "./components/RecentOrdersComponent";
import Feedbacks from "./components/Feedbacks";
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
        <div className="row-03">
          <RecentOrdersComponent />
          <Feedbacks />
        </div>
      </div>
    </div>
  );
}

export default App;
