/**

place javascript expression inside jsx

 */
 
const h1 = (
	<h1>
		hello world { Math.random() }
		
		{ false}
		{ undefined }
		{ null }
		{ true }
		{ "hello" } 
		{ 42 } 
		{ <span>wat? </span> }
		{ [10, false, null, <li>hello</li>] }
	</h1>
)

const label = (
	<label onClick={ () => {console.log('hello world')} } style={ { backgroundColor: 'red', color: 'blue'} } className={  } htmlFor={ Math.random().toString() } >
		email
	</label>
)

//
/*

1. between tags

  - String
  - Number
  - falsey - false, null, undefined, "",
  - true
  - JSX - <span></span>
  - Array of the above

2. property of an element



*/
 

 
