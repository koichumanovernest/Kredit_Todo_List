import React, { createContext, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlabalContext = createContext();

const intitState = {
	transactions: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transactions) => transactions.id !== action.payload
				),
			};

		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};

		default:
			return state;
	}
};

const TransactionContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, intitState);

	const deleteTransaction = (id) => {
    toast("успешно удалено")
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	};

	const addTransaction = (transaction) => {
    toast("успешно добавлено")
		dispatch({ type: "ADD_TRANSACTION", payload: transaction });
	};

	return (
		<GlabalContext.Provider
			value={{
				deleteTransaction,
				transactions: state.transactions,
				addTransaction,
			}}>
        <ToastContainer />
			{children}
		</GlabalContext.Provider>
	);
};

export default TransactionContext;
