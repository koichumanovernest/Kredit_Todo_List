import React from "react";
import TransactionContext from "../context/TransactionContext";
import AddTransactions from "./AddTransactions";
import Balance from "./Balance";
import IncomeExpence from "./IncomeExpence";
import TransactionList from "./TransactionList";

const TransactionsWrapper = () => {
	return (
		<div>
			<TransactionContext>

        <Balance/>
        <IncomeExpence/>
        <TransactionList/>
				<AddTransactions />
			</TransactionContext>
		</div>
	);
};

export default TransactionsWrapper;
