
// [ <li>Walk with piglet and sweetness</li>, ]
const tasks = [
	'Walk with piglet and sweetness',
	'buy tofu'
]



function printTasks() {
	const result = [];
	
	result.push(
		<li>
			
		</li>
	)
	
	return result;
}

const todoList = (
	<ul>
		{
			printTasks()
		}
		
		{
			tasks.map((task, index) => {
				return (
					<li key={index}>
						{task}
					</li>
				)
			})
		}
	</ul>
)