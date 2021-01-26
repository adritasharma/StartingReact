import logo from "./logo.svg";
import "./App.css";
import { Greetings } from "./Greetings";
import { Navbar } from "./Navbar";
import { Banner } from "./Sections/Banner";
import { Timer } from "./Sections/Timer";
import { Bridegroom } from "./Sections/BrideGroom/Bridegroom";
import { Weddingevents } from "./Sections/Weddingevents";
import { Whenandwhere } from "./Sections/Whenandwhere";
import { Seperator } from "./Seperator";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Greetings /> */}
      <div className="container-fluid">
        <Banner />
        <Seperator/>
        <Timer />
        <Seperator/>
        <Bridegroom/>
        <Seperator/>
        <Weddingevents/>
        <Seperator/>
        <Whenandwhere/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
