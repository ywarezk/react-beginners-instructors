
import { useEffect, useState } from 'react';

export default function Counter() {
	const [ countdown, setCountdown ] = useState(10);
	
	useEffect(
		() => {
			
			const intervalId = setInterval(() => {
				
				setCountdown((currentCountdown) => {
					return currentCountdown - 1;
				});
				
			}, 1000);
			
			// "ngOnDestroy" + other destroys
			return () => {
				clearInterval(intervalId);
			}
			
		},
		[]
	)
	
	return (
		<h1>
			{ countdown }
		</h1>
	)
}