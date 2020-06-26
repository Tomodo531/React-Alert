import React, { createContext, useState } from 'react';
import Alert from '../Components/Alert.Comp';

export const Context = createContext();

var clearAlertsTimeout;

export const ContextProvider = (props) => {
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
		<Context.Provider value={{ alert: alert }}>
			{props.children}
			<div className="alerts">
				{alerts.map((alertObj, index) => (
					<Alert key={alertObj.id} index={index} alert={alertObj} remove={alert.remove} />
				))}
			</div>
		</Context.Provider>
	);
};

export default Context;
