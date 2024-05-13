import React, { useContext, useState } from "react";
import { GlabalContext } from "../context/TransactionContext";

const AddTransactions = () => {
	const [text, setText] = useState("");
	const [amout, setAmout] = useState(0);

	const { addTransaction } = useContext(GlabalContext);

	const submitHnadler = (e) => {
		e.preventDefault();

		const newTransaction = {
			text,
			amout: +amout,
			id: Math.floor(Math.random() * 1000),
		};

		console.log("bermet");
		addTransaction(newTransaction);
	};
	return (
		<div>
			<>
				<h3>Add transations</h3>
				<form onSubmit={submitHnadler}>
					<div>
						<label htmlFor="text">Text</label>

						<input
							type="text"
							name="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="Enter Text ..."
						/>
					</div>
					<div>
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							name="amount"
							value={amout}
							onChange={(e) => setAmout(e.target.value)}
							placeholder="Enter amount..."
						/>
					</div>
					<button className="btn" type="submit">ADD</button>
				</form>
			</>
		</div>
	);
};

export default AddTransactions;
