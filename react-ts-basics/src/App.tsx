import { useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalsImg from './assets/goals.jpg';

export type CourseGoal = {
	id: number;
	title: string;
	description: string;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	function handleAddGoal() {
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: 'Learn React + TS',
				description: 'Learn it in depth',
			};

			return [...prevGoals, newGoal];
		});
	}

	function handleDeleteGoal(id: number) {
		setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
	}

	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Your course goals</h1>
			</Header>

			<button onClick={handleAddGoal}>Add Goal</button>

			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
}
