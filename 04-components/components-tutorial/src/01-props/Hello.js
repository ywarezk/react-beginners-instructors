
// { name: 'yariv', age: 36}
export default function Hello( { name = 'Yariv', age } ) {
	return (
		<h1>
			Hello {name} {age}
		</h1>
	)
}

