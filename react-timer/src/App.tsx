import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import AddTimer from './components/AddTimer.tsx';
import TimersContextProvider from './store/timers-context.tsx';

function App() {
	return (
		<TimersContextProvider>
			<Header />
			<main>
				<AddTimer />
				<Timers />
			</main>
		</TimersContextProvider>
	);
}

export default App;
