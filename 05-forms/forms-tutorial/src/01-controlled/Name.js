import { useState } from "react"

// Formik

export default function Name() {
	const [ nameValue, setNameValue ] = useState('Piglet');
	
	const handleNameChange = (event) => {
		setNameValue(event.currentTarget.value)
	}
	
	return (
		<form>
			<input 
				value={nameValue} 
				onChange={handleNameChange} 
				name="myName" type="text" placeholder="enter your name" />
			<button type="submit">
				Send name
			</button>
		</form>
	)
}