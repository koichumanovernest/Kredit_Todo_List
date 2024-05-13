import { useContext } from "react";
import { GlabalContext } from "../context/TransactionContext";
import { anountFromatter } from "../utils/headers";

const Balance = () => {
	const { transactions } = useContext(GlabalContext);

	const amounts = transactions.map((item) => item.amout);

	console.log(amounts);
	const total = amounts.reduce((acc, amount) => (acc += amount), 0);
	return (
		<div>
			<h1>Your balance</h1>
			<h1>{anountFromatter(total)}</h1>
		</div>
	);
};

export default Balance;
