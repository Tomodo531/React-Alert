import React, { useContext } from 'react';
import './App.css';
import { ContextProvider } from './Context/Context';
import AlertTest from './Components/AlertTest.Comp';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<AlertTest />
			</div>
		</ContextProvider>
	);
}

export default App;
