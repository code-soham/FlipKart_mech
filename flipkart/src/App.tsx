import "./App.css";
import Appbar from "./comp/Appbar";
import Content from "./comp/Content";
import Menubar from "./comp/Menubar";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Menubar />
      <Content />
    </div>
  );
}

export default App;
