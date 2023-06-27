import {assign, createMachine} from 'xstate';

const contentMachine = createMachine(
	{
		id: 'contentMachine',
		initial: 'idle',
		states: {
			idle: {
				on: {
					PRIVACY_CLICKED: 'emptyComponent',
					PUBLISH_CLICKED: 'emptyComponent',
				},
			},
			emptyComponent: {
				entry: 'navigateToEmptyComponent',
			},
		},
	},
	{
		actions: {
			navigateToEmptyComponent: () => {
				//  window.location.href = '/emptyComponent'
				console.log('puedo');
			},
		},
	}
);
export default contentMachine;
