import { useEffect, useState } from 'react';

export default function Todo( {name} ) {
	const [todoList, setTodoList] = useState([]);
	
	// ngOnInit, DoCheck, OnDestroy
	useEffect(() => {
		
		// this will run when component is born and when component is updated
		fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
			.then((response) => {
				return response.json()
			})
			.then((todoListFromServer) => {
				setTodoList(todoListFromServer)
			})
				
		}, 
	
	// when to run the useEffect function
	// empty array ngOnInit
	// state, props
	
		[]
	)
	
	// {{ obs$ | async }}
	/*
	useEffect(() => {
		
		setInterval(() => {
			
		}, 1000);
		
		return () => {
			
		}
		
	}, [])
	*/
	
	return (
		
		<ul>
			{
				todoList.map((task) => {
					return (
						<li key={task.id}>
							{task.title}
						</li>
					)
				})
			}
		</ul>
		
	)
	
}