import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="stateful greeting" age="36" />
      <FunctionalGreetingWithProps greeting="nice to meet ya" name="PJ" age="35" />
    </div>
  );
} 

export default App;
