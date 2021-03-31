
/**
 * 
 
 <OurFormik>
	<OurField type="" name="" placeholder />
 </OurFormik>
 
 */
 
import { createContext, useState, useContext } from 'react';


const FormContext = createContext();


export function OurFormik( { children } ) {
	const [ value, setValue ] = useState('');
	
	return (
		<FormContext.Provider value={ setValue }>
			<form>
				{ children }
			</form>
		</FormContext.Provider>
		
	)
}

export function OurField( props ) {
	const setValue = useContext(FormContext);
	
	return (
		<input {...props} 
			onChange={(event) => setValue(event.currentTarget.value)} 
		/>
	)
	
}