import './index.css'

const TransactionItems = props => {
  const {eachItem, deleteByid} = props
  const {titleled, amountInHis, type, id} = eachItem

  const deletefUNcall = () => {
    deleteByid(id)
  }

  return (
    <ul className="ulCon">
      <li>{titleled}</li>
      <li>{amountInHis}</li>
      <li>{type}</li>
      <button type="button" onClick={deletefUNcall}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="didee"
        />
      </button>
    </ul>
  )
}
export default TransactionItems
