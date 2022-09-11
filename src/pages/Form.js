import { useState } from "react";

export default function Form() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showForm, setShowForm] = useState(false);

	const showForms = () => {
		setShowForm(!showForm);
	};

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
				<h1>User {name} successfully Registered!</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
				<h1>Please fill in all fields</h1>
			</div>
		);
	};

	return (
		<div className="section improve-skills">
			<button className="btns" onClick={showForms}>
				Sign-in now
			</button>

			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			{showForm && (
				<form>
					<label className="label">Name</label>
					<input
						onChange={handleName}
						className="input"
						value={name}
						type="text"
					/>

					<label className="label">Email</label>
					<input
						onChange={handleEmail}
						className="input"
						value={email}
						name="email"
						type="email"
						required
					/>

					<label className="label">Password</label>
					<input
						onChange={handlePassword}
						className="input"
						value={password}
						name="password"
						type="password"
						required
					/>

					<button
						onClick={handleSubmit}
						className="btns"
						value="submit"
						type="submit"
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
