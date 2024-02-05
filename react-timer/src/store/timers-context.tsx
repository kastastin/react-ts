import { createContext, useContext, useReducer, type ReactNode } from 'react';

type Timer = {
	name: string;
	duration: number;
};

type TimersState = {
	isRunning: boolean;
	timers: Timer[];
};

const initialState: TimersState = {
	isRunning: false,
	timers: [],
};

type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
	const timersCtx = useContext(TimersContext);

	if (timersCtx === null) {
		throw new Error('ERROR: TimersContext is null');
	}

	return timersCtx;
}

type TimersContextProviderProps = {
	children: ReactNode;
};

type AddTimerAction = {
	type: 'ADD_TIMER';
	payload: Timer;
};

type StartTimersAction = {
	type: 'START_TIMERS';
};

type StopTimersAction = {
	type: 'STOP_TIMERS';
};

type Action = AddTimerAction | StartTimersAction | StopTimersAction;

function timersReducer(state: TimersState, action: Action): TimersState {
	if (action.type === 'ADD_TIMER') {
		return {
			...state,
			timers: [
				...state.timers,
				{
					name: action.payload.name,
					duration: action.payload.duration,
				},
			],
		};
	}

	if (action.type === 'START_TIMERS') {
		return {
			...state,
			isRunning: true,
		};
	}

	if (action.type === 'STOP_TIMERS') {
		return {
			...state,
			isRunning: false,
		};
	}

	return state;
}

export default function TimersContextProvider({
	children,
}: TimersContextProviderProps) {
	const [timersState, dispatch] = useReducer(timersReducer, initialState);

	const ctx: TimersContextValue = {
		timers: timersState.timers,
		isRunning: timersState.isRunning,
		addTimer(timerData) {
			dispatch({ type: 'ADD_TIMER', payload: timerData });
		},
		startTimers() {
			dispatch({ type: 'START_TIMERS' });
		},
		stopTimers() {
			dispatch({ type: 'STOP_TIMERS' });
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
}
