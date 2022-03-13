import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import ListComponent from './components/ListComponent'
import FormHandling from './components/FormHandling'
import ParentInput from './components/ParentInputRef'
import PortalDemo from './components/Portal'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <hr></hr>
        </p>
        {/* <ListComponent></ListComponent> */}
          {/* <Greet name="bruce" hero="batman">
            Hello Here
          </Greet>
          <Greet name="clark" hero="superman"></Greet>

          <Welcome name="bruce" hero="batman">
            <p> Hello there</p>
          </Welcome>
          <Welcome name="bruce" hero="batman"></Welcome> */}
        {/* <FormHandling></FormHandling> */}
        {/* <ParentInput></ParentInput> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <Counter></Counter> */}
        {/* <ParentComponent></ParentComponent> */}
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
