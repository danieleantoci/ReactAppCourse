import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EvenBind from "./components/EvenBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/*<ParentComponent/>*/}
      {/*<EvenBind/>*/}
      {/*<FunctionClick/>*/}
      {/*<ClassClick/>*/}
      {/*<Counter/>*/}
      {/*<Message/>*/}
      {/*<HelloWorld name="Bruce" heroName="Batman">*/}
      {/*  <p>Ciao, mi chiamo batman</p>*/}
      {/*</HelloWorld>*/}
      {/*<HelloWorld name="Pippo" heroName="Baudo">*/}
      {/*  <button>Action</button>*/}
      {/*</HelloWorld>*/}
      {/*<HelloWorld name="Daniele" heroName="Antonio"/>*/}
      {/*<Welcome name="Bruce" heroName="Batman">*/}
      {/*  <p>Ciao, mi chiamo batman</p>*/}
      {/*</Welcome>*/}
      {/*<Welcome name="Daniele" heroName="Antonio"/>*/}
    </div>
  );
}

export default App;
