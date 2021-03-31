import { useState } from "react"
import useForms from "./forms.hook"


export default function Login() {
	const [values, handleChange] = useForms({
		email: 'yariv@nerdeez.com',
		password
	});
	
	return (
		<form>
			<input 
				value={values.email}
				onChange={handleChange}
				type="email" name="email" />
			<input 
				value={values.password}
				onChange={handleChange}
				type="password" name="password" />
			<button type="submit">
				Login
			</button>
		</form>
	)
	
}