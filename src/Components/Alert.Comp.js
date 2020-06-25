import React from 'react';
import { FaTimes, FaTimesCircle, FaCheck, FaExclamation } from 'react-icons/fa';

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
export default Alert;
