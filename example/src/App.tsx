import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
	return (
		<main>
			<Container
				as={Button}
				type='button'
				onClick={() => console.log('clicked')}
			>
				Click me
			</Container>
		</main>
	);
}

export default App;
