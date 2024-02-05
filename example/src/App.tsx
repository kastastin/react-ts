import Form from './components/Form.tsx';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
	}

	return (
		<main>
			<Form onSave={handleSave}>
				<Input id='name' label='Name' type='text' />
				<Input id='age' label='Age' type='number' />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
