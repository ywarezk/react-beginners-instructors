import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
	email: Yup.string().required().email(),
	password: Yup.string().required().min(5)
})

export default function Login2() {
	// const { errors } = useFormik();
	
	// console.log(errors);
	
	const handleSubmit = (values) => {
		console.log(values);
	}
	
	return (
		<Formik
			initialValues={ { email: 'yariv@nerdeez.com', password: ''} }
			onSubmit={ handleSubmit }
			validationSchema={loginSchema}
		>
			{
				( { isValid  } ) => {
					// console.log(errors);
					return (
						<Form>
							<Field 
								type="email" name="email" />
							<ErrorMessage name="email" />
							<Field 
								type="password" name="password" />
							<ErrorMessage name="password" />
							<button disabled={!isValid} type="submit">
								Login
							</button>
						</Form>
					)
				}
			}
			
		</Formik>
		
	)
	
}