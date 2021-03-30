
import { useState } from 'react';

export default function Hello() {
	// [ isHelloWorldShowing, set]
	
	const [ isHelloWorldShowing, setIsShowing] = useState(true);
	// const isHelloWorldShowing = true
	
	const [ msg, setMsg ] = useState('foo bar');
	
	const toggleHello = () => {
		setIsShowing(!isHelloWorldShowing);			
	}
	
	// nope not good
	// setIsShowing(!isHelloWorldShowing);			
	
	return (
		<div>
			{
				isHelloWorldShowing && (
					<h1>
						Hello World
					</h1>		
				)	
			}			
			<button onClick={toggleHello}>
				Toggle hello world
			</button>
		</div>
		
	)
	
}