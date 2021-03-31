
import PropTypes from 'prop-types';

// { name: 'yariv', age: 36}
export default function Hello( { name = 'Yariv', age } ) {
	return (
		<h1>
			Hello {name} {age}
		</h1>
	)
}

Hello.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired,
}
