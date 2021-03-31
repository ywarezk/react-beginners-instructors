import logo from './logo.svg';
import './App.css';
import Name from './02-uncontrolled/Name';
import Login2 from './01-controlled/Login2';
import { OurFormik, OurField } from './03-context/OurFormik';
// import Name from './01-controlled/Name';

function App() {
  return (
    <div className="App">
      {/* <Name /> */}
	  
	  {/* <Login2 /> */}
	  
	  <OurFormik>
	  	<OurField type="text" />
	  </OurFormik>
    </div>
  );
}

export default App;
