import { useState } from 'react';
import './App.css';



function App() {

	const [value, setValue] = useState(0);

	function addValue() {
		if(value >= 0 && value < 5) {
			const newValue = value + 1
			setValue(newValue)
		}
	}

	function resetValue() {
		setValue(0)
	}

	return (
		<div className="App">
			<div className='counter'>
				<div className={value === 5 ? "display red" : "display" }>
					{value}
				</div>
				<div className="buttons">
					<button onClick={addValue} disabled={value === 5 ? true : false }>+</button>
					<button onClick={resetValue} disabled={value === 0 ? true : false }>Reset</button>
				</div>
			</div>
		</div>
	);
}

export default App;
