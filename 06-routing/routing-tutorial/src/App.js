import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, useHistory, useParams } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

function App() {
	const history = useHistory();
	
	
	
	
	return (
		<div className="App">
			<Link to="/">
				Home
			</Link>
			<Link to="/about/yariv">
				about
			</Link>
		
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				
				<Route path="/about/:name">
					<About />
				</Route>
				
				<Route>
					<Error404 />
				</Route>
			</Switch>
			
		
		</div>
	);
}

export default App;
