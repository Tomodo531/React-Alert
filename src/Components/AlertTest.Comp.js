import React, { Fragment, useContext } from 'react';
import { Context } from '../Context/Context';

function AlertTest() {
	const { alert } = useContext(Context);

	return (
		<Fragment>
			<button onClick={() => alert.error('Alert error')}>Error</button>
			<button onClick={() => alert.success('Alert success')}>Success</button>
			<button onClick={() => alert.alert('Alert')}>Alert</button>
		</Fragment>
	);
}

export default AlertTest;
