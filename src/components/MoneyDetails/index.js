import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <>
      <li className="liCon">
        <div className="imgCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="aspect"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <h1>RS {balance}</h1>
        </div>
      </li>
      <li className="liCon bgcolor2">
        <div className="imgCon ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="aspect"
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <h1>RS {income}</h1>
        </div>
      </li>
      <li className="liCon bgcolor3">
        <div className="imgCon ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="aspect"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <h1>RS {expenses}</h1>
        </div>
      </li>
    </>
  )
}

MoneyDetails.defaultProps = {
  income: 0,
  balance: 0,
  expenses: 0,
}

export default MoneyDetails
