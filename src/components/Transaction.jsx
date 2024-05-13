import React, { useContext } from 'react'
import { anountFromatter } from '../utils/headers'
import { GlabalContext } from '../context/TransactionContext'

const Transaction = ({transactions}) => {
  const  {deleteTransaction} = useContext(GlabalContext)

  const sign = transactions.amout < 0 ? "" : "+"
  return (
    <li className={transactions.amout < 0 ? "mines" : "plus"}>
      {transactions.text}

      <span>
        {sign}
        {anountFromatter(transactions.amout)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(transactions.id)}>х</button>
    </li>
  )
}

export default Transaction
