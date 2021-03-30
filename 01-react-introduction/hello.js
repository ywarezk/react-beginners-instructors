
/*
const h1 = document.createElement('h1');
h1.innerText = 'Hello world with javascript';

const container = document.getElementById('container');
container.appendChild(h1);
*/

/**
 * 
 
 js ==========> DOM
 
 virtual dom with React.createElement =====> ReactDOM ======> DOM
 virtual dom with React.createElement =====> react native ========> mobile app
 virtual dom with React.createElement =====> Electron ========> desktop
 
 React core ====> Platform specific
 
 */

/*

jsx

<h1></h1>

*/
/*
const h1 = React.createElement(
	'h1',
	null,
	React.createElement(
		'span',
		null,
		React.createElement(
			'u',
			null,
			'hello world with react and underline'
		)
	)
)
*/

/*
const h1 = (
	<h1>
		<span>
			<u>
				hello world with react and underline and jsx
			</u>
		</span>
	</h1>
)
*/

// Components
function HelloWorld() {
	return (
		<h1 className="hello">
			<span>
				<u>
					hello world with react and underline and jsx in function
				</u>
			</span>
		</h1>
	)
}


ReactDOM.render(
	// React.createElement(HelloWorld)
	<HelloWorld />,
	document.getElementById('container')
)