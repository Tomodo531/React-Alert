import React, { useState } from 'react';
import './App.css';
import { FaTimes, FaTimesCircle, FaCheck, FaExclamation } from 'react-icons/fa';

var clearAlertsTimeout;

function App() {
	const [ alerts, setAlerts ] = useState([
		{ id: 0, type: 'Error', alertText: 'Alert error' },
		{ id: 1, type: 'Success', alertText: 'Alert success' },
		{ id: 2, type: 'Alert', alertText: 'Alert' }
	]);

	const alert = {
		error(alertText) {
			setAlerts([ ...alerts, { type: 'Error', alertText: alertText } ]);
			alert.clearAlerts();
		},
		success(alertText) {
			setAlerts([ ...alerts, { type: 'Success', alertText: alertText } ]);
			alert.clearAlerts();
		},
		alert(alertText) {
			setAlerts([ ...alerts, { type: 'Alert', alertText: alertText } ]);
			alert.clearAlerts();
		},
		remove(index) {
			const updatedAlerts = [ ...alerts ];
			console.log();
			updatedAlerts.splice(index, 1);
			setAlerts(updatedAlerts);
		},
		clearAlerts() {
			clearTimeout(clearAlertsTimeout);
			clearAlertsTimeout = setTimeout(() => {
				setAlerts([]);
			}, 5000);
		}
	};

	return (
		<div className="App">
			<button onClick={() => alert.error('Alert error')}>Error</button>
			<button onClick={() => alert.success('Alert success')}>success</button>
			<button onClick={() => alert.alert('Alert')}>Alert</button>
			<div className="alerts">
				{alerts.map((alertObj, index) => (
					<Alert key={alertObj.id} index={index} alert={alertObj} remove={alert.remove} />
				))}
			</div>
		</div>
	);
}

function Alert({ alert, index, remove }) {
	return (
		<div className="alert">
			<span
				className="alert__color"
				style={
					alert.type === 'Error' ? (
						{ backgroundColor: 'red' }
					) : alert.type === 'Success' ? (
						{ backgroundColor: 'green' }
					) : (
						{ backgroundColor: 'dodgerblue' }
					)
				}
			/>
			{alert.type === 'Error' ? (
				<FaTimesCircle style={{ color: 'red' }} />
			) : alert.type === 'Success' ? (
				<FaCheck style={{ color: 'green' }} />
			) : (
				<FaExclamation style={{ color: 'dodgerblue' }} />
			)}
			<span className="alert__text">
				<strong>{alert.type}: </strong>
				{alert.alertText}
			</span>
			<button className="alert__close" onClick={() => remove(index)}>
				<FaTimes />
			</button>
		</div>
	);
}

export default App;
