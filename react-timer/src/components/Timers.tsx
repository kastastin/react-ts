import Timer from './Timer.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Timers() {
	const { timers } = useTimersContext();

	return (
		<ul>
			{timers.map((timer) => (
				<li key={Math.random()}>
					<Timer {...timer} />
				</li>
			))}
		</ul>
	);
}
