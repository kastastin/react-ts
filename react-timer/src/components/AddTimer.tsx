import { useRef } from 'react';

import Form, { type FormHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function AddTimer() {
	const form = useRef<FormHandle>(null);
	const { addTimer } = useTimersContext();

	function handleSaveTimer(data: unknown) {
		const extractedData = data as { name: string; duration: string };

		addTimer({ name: extractedData.name, duration: +extractedData.duration });
		form.current?.clear();
	}

	return (
		<Form id='add-timer' onSave={handleSaveTimer} ref={form}>
			<Input id='name' label='name' type='text' />
			<Input id='duration' label='Duration' type='number' />

			<p>
				<Button>Add Timer</Button>
			</p>
		</Form>
	);
}
