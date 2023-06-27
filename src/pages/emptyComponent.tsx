import contentMachine from '@/machines/contentmachine';
import {useMachine} from '@xstate/react';

const EmptyComponent = () => {
	const [current, send] = useMachine(contentMachine);

	const handleGoHomeClick = () => {
		send('GO_HOME');
	};

	return (
		<div>
			<h1>Eto ta re vacio</h1>
			<button onClick={handleGoHomeClick}>Home</button>
		</div>
	);
};

export default EmptyComponent;
