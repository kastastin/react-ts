import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ id, label, ...props }: InputProps,
	ref
) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} ref={ref} {...props} />
		</p>
	);
});

export default Input;
