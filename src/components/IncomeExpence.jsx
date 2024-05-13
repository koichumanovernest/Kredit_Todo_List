import React, { useContext } from "react";
import { anountFromatter } from "../utils/headers";
import { GlabalContext } from "../context/TransactionContext";

const IncomeExpence = () => {
	const { transactions } = useContext(GlabalContext);

	const amounts = transactions.map((item) => item.amout);
	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0);
	const expence = amounts
		.filter((item) => item < 0)
		.reduce((acc, item) => (acc += item), 0);
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{anountFromatter(income)}</p>
			</div>

			<div>
				<h4>Expence</h4>
				<p className="money minus">{anountFromatter(expence)}</p>
			</div>
		</div>
	);
};

export default IncomeExpence;
