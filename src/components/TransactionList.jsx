import React, { useContext } from 'react'
import { GlabalContext } from '../context/TransactionContext'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transactions} = useContext(GlabalContext)
  return (
    <div>
      <h3>History</h3>

      <ul className='list'>
        {transactions?.map((item)=>(
        <Transaction key={item.id} transactions={item}/>
        ))}
        </ul>
    </div>
  )
}

export default TransactionList
