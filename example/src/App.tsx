import { useRef } from 'react';

import Form, { type FormHandle } from './components/Form.tsx';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
	const customForm = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		customForm.current?.clear();
	}

	return (
		<main>
			<Form onSave={handleSave} ref={customForm}>
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
