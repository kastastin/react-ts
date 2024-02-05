import { createContext, useContext, type ReactNode } from 'react';

type Timer = {
	name: string;
	duration: number;
};

type TimersState = {
	isRunning: boolean;
	timers: Timer[];
};

type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimer: () => void;
	stopTimer: () => void;
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

export default function TimersContextProvider({
	children,
}: TimersContextProviderProps) {
	const ctx: TimersContextValue = {
		timers: [],
		isRunning: false,
		addTimer(timerData) {
			// ...
		},
		startTimer() {
			// ...
		},
		stopTimer() {
			// ...
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
}
