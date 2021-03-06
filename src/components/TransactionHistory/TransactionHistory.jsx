import React from 'react';
import styles from './TransactionHistory.module.css';
import T from 'prop-types';

const TransactionHistory = ({ allTransactions }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {allTransactions.map(item => {
        const { id, type, amount, date } = item;
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}$</td>
            <td>{date}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string,
      amount: T.number,
      date: T.string,
    }),
  ),
};

export default TransactionHistory;
