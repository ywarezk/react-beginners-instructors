import logo from './logo.svg';
import './App.css';
import Hello from './02-state/Hello';
import Todo from './03-effects/Todo';
import Counter from './03-effects/Counter';
import { useState } from 'react';

class User { 
	constructor() {
		this.name = 'yariv';
	}
}

function App() {
	const [isCounterShowing, setIsCounterShowing] = useState(true);
	
	return (
		<div className="App">
			{/* <Hello name="Yariv" age={36} user={new User()} /> */}
			
			{/* <Todo /> */}
			
			<button onClick={() => setIsCounterShowing(!isCounterShowing)} >
				toggle counter
			</button>
				
			{
				isCounterShowing && <Counter />
			}
			
		</div>
	);
}

export default App;
