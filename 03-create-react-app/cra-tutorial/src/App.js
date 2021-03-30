import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';

function App() {
  return (
    <div className="App">
		<img src={logo} />	
		<Hello />
    </div>
  );
}

export default App;
