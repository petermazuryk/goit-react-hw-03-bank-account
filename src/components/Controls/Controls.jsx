import React, { Component } from 'react';
import styles from './Controls.module.css';

class Controls extends Component {
  state = {
    amount: '',
  };

  handleInput = e => {
    const value = e.target.value;
    this.setState({
      amount: Number(value),
    });
  };

  handleClick = e => {
    e.target.name === 'deposit'
      ? this.props.onDeposit(Number(this.state.amount))
      : this.props.onWithdraw(Number(this.state.amount));

    this.setState({
      amount: '',
    });
  };

  render() {
    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="amount"
          id={this.props.amountId}
          onChange={this.handleInput}
          value={this.state.amount}
        />

        <button type="button" name="deposit" onClick={this.handleClick}>
          Deposit
        </button>

        <button type="button" name="withdraw" onClick={this.handleClick}>
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
