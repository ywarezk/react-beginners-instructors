import { useParams } from 'react-router-dom';

export default function About() {
	const {name} = useParams();
	
	console.log('!!!!!');
	console.log(name);
	
	return (
		<h1>
			Hello aboutpage {name}
		</h1>
	)
}