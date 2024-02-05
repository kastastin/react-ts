import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import AddTimer from './components/AddTimer.tsx';

function App() {
	return (
		<>
			<Header />
			<main>
				<AddTimer />
				<Timers />
			</main>
		</>
	);
}

export default App;
