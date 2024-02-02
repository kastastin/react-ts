function combiningTypes() {
	let userName = 'kastastin';

	// userName = 10; // Type 'number' is not assignable to type 'string'
	userName = 'bob';

	// string,number, boolean
	let userAge = 20;
	let isValid = true;

	// type string OR number
	let userId: string | number = 'abc1';
	userId = 123;
	// userId = true; // Type 'boolean' is not assignable to type 'string | number'
}

function objectTypes() {
	// let user: object;
	// user = 'kastastin'; // Type 'string' is not assignable to type 'object'

	let user: {
		id: string | number;
		name: string;
		age: number;
		isAdmin: boolean;
	};

	user = {
		id: 'abc',
		name: 'kastastin',
		age: 20,
		isAdmin: true,
	};

	// user = {};
	// Type '{}' is missing the following properties from type '{ id: string | number; name: string; age: number; isAdmin: boolean; }': id, name, age, isAdmin
}

function arrayTypes() {
	let hobbies: Array<string>;
	// alternative syntax
	// let hobbies: string[];
	// let users: { id: string | number; name: string }[];

	hobbies = ['sports', 'cooking', 'reading'];
}

function functionTypes() {
	function displayResult(result: number): void {
		console.log(result);
	}

	function add(a: number, b: number) {
		const result = a + b;
		return result;
	}

	function calculate(
		a: number,
		b: number,
		calcFn: (a: number, b: number) => number
	) {
		return calcFn(a, b);
	}

	displayResult(calculate(2, 2, add));
}

// npx tsc first-app.ts
// functionTypes();

function customTypes() {
	type AddFn = (a: number, b: number) => number;
	function calculate(a: number, b: number, calcFn: AddFn) {
		calcFn(a, b);
	}

	type StrOrNum = string | number;
	let userId: StrOrNum = 123;

	type User = {
		id: StrOrNum;
		userName: string;
		userAge: number;
		isAdmin: boolean;
	};
	const user: User = {
		id: 123,
		userName: 'kastastin',
		userAge: 20,
		isAdmin: true,
	};
}

function interfaces() {
	interface Credentials {
		email: string;
		password: string;
	}

	const cred: Credentials = {
		email: 'example@gmail.com',
		password: 'pass1234',
	};

	class AuthCredentials implements Credentials {
		email: string;
		password: string;
		userName: string;
	}

	function login(credentials: Credentials) {}

	login(new AuthCredentials());
}

function mergeTypes() {
	type Admin = {
		permissions: string[];
	};

	type AppUser = {
		userName: string;
	};

	type AppAdmin = Admin & AppUser;

	const admin: AppAdmin = {
		userName: 'kastastin',
		permissions: ['edit', 'delete'],
	};
}

function mergeInterfaces() {
	interface Admin {
		permissions: string[];
	}

	interface AppUser {
		userName: string;
	}

	interface AppAdmin extends Admin, AppUser {}

	const admin: AppAdmin = {
		userName: 'kastastin',
		permissions: ['edit', 'delete'],
	};
}
