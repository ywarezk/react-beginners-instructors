
const isConnected = true;

function printUser() {
	if (isConnected) {
		return 'User'
	} else {
		return 'Guest'
	}
}

const h1 = (
	<h1>
		Hello { printUser() }
		
		Hello {
			isConnected ? 'User' : 'Guest'
		}
		
		Hello {
			isConnected ? 'User' : null
		}
		
		Hello {
			isConnected && 'User'
		}
		
		Hello {
			isConnected || 'Guest'
		}
		
	</h1>
)