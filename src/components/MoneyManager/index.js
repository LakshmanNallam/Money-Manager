import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItems from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    array: [],
    title: '',
    amount: '',
    optionId: 'INCOME',
  }

  submitFun = event => {
    event.preventDefault()
    const {title, amount, optionId, array} = this.state

    if (optionId === 'INCOME') {
      this.setState({
        array: [
          ...array,
          {id: uuidv4(), type: optionId, amountInHis: amount, titleled: title},
        ],
      })
    } else if (optionId === 'EXPENSES') {
      this.setState({
        array: [
          ...array,
          {id: uuidv4(), type: optionId, amountInHis: amount, titleled: title},
        ],
      })
    }
  }

  selectCd = event => {
    console.log(event.target.value)
    this.setState({optionId: event.target.value})
  }

  titleCh = event => {
    this.setState({title: event.target.value})
  }

  amountCh = event => {
    this.setState({amount: event.target.value})
  }

  balanceFun = array => {
    console.log(array)
    let ba = 0
    let ex = 0
    array.forEach(element => {
      if (element.type === 'INCOME') {
        ba += parseInt(element.amountInHis)
      } else if (element.type === 'EXPENSES') {
        ex += parseInt(element.amountInHis)
      }
    })
    return ba - ex
  }

  incomeFun = array => {
    let inca = 0
    array.forEach(element => {
      if (element.type === 'INCOME') {
        inca += parseInt(element.amountInHis)
      }
    })
    return inca
  }

  expenseFun = array => {
    let expa = 0
    array.forEach(element => {
      if (element.type === 'EXPENSES') {
        expa += parseInt(element.amountInHis)
      }
    })
    return expa
  }

  deleteByid = id => {
    const {array} = this.state
    this.setState({array: array.filter(eachItem => eachItem.id !== id)})
  }

  render() {
    const {array, optionId} = this.state
    const income = this.incomeFun(array)
    const balance = this.balanceFun(array)
    const expenses = this.expenseFun(array)

    return (
      <div className="mainDiv">
        <div className="headingBar">
          <h1>Hi Richard</h1>
          <p>Welcome Back to your Money Manager</p>
        </div>

        <ul className="transactionItemCon">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </ul>

        <div className="lowerCon">
          <form className="formCon" onSubmit={this.submitFun}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITILE</label>
            <input type="text" id="title" onChange={this.titleCh} />
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" onChange={this.amountCh} />
            <label htmlFor="typee">TYPE</label>
            <select id="typee" onChange={this.selectCd} value={optionId}>
              {transactionTypeOptions.map(eachObj => (
                <option value={eachObj.optionId} key={eachObj.optionId}>
                  {eachObj.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>

          <div className="formCon">
            <h1>History</h1>

            <div className="histloCon">
              <ul className="ulCon">
                <li>Title</li>
                <li>Amount</li>
                <li>Type</li>
              </ul>
              {array.map(eachItem => (
                <TransactionItems
                  eachItem={eachItem}
                  key={eachItem.id}
                  deleteByid={this.deleteByid}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
