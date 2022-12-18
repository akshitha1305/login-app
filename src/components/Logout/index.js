// Write your code here

import './index.css'

const Logout = props => {
  const {logoutButt} = props
  return (
    <button onClick={logoutButt} type="button" className="button">
      Logout
    </button>
  )
}
export default Logout
