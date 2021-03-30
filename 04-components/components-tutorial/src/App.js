import logo from './logo.svg';
import './App.css';
import Hello from './02-state/Hello';
import Todo from './03-effects/Todo';

class User { 
	constructor() {
		this.name = 'yariv';
	}
}

function App() {
  return (
    <div className="App">
		{/* <Hello name="Yariv" age={36} user={new User()} /> */}
		
		<Todo />
    </div>
  );
}

export default App;
