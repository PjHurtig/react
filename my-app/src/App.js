import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';

function App() {
  return (
    <div className="App">
      <MethodsAsPropsParent />
      {/* <MethodsAsPropsChild /> */}
    </div>
  );
} 

export default App;
