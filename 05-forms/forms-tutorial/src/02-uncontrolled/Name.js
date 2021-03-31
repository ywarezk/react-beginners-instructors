import { useState, useRef } from "react"

// react-hook-form

export default function Name() {
	// { current: 10 }
	// class Name { ...   this.something = something  }
	const refObj = useRef(10);
	
	// { current: 20 }
	const counterObj = useRef(20);
	
	const handleSubmit = (event) => {
		counterObj.current = counterObj.current - 1;
		
		console.log(counterObj.current);
		
		event.preventDefault();
		
		console.log(refObj.current.value);
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input 
				ref={ refObj }				
				name="myName" 
				type="text" 
				placeholder="enter your name" />
			<button type="submit">
				Send name
			</button>
		</form>
	)
}