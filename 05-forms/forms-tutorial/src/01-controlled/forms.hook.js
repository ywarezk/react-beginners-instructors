

export default function useForms(initialValues) {
	
	const [values, setValues] = useState(initialValues)
	
	const handleChange = (event) => {
		setValues({
			...values,
			// email / password
			[event.currentTarget.name]: event.currentTarget.value
		})
	}
	
	return [
		values,
		handleChange
	]
	
}