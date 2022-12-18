// Write your code here
import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import './index.css'

class Message extends Component {
  state = {isLoggin: false}

  onClickingButt = () => {
    const {isLoggin} = this.state
    if (isLoggin === false) {
      this.setState(prevState => ({isLoggin: !prevState.isLoggin}))
    } else if (isLoggin === true) {
      this.setState(prevState => ({isLoggin: !prevState.isLoggin}))
    }
  }

  render() {
    const {isLoggin} = this.state
    const messageText = isLoggin ? 'Welcome User' : 'Please Login'

    return (
      <div>
        <h1 className="heading">{messageText}</h1>

        <div className="butt-container">
          {isLoggin && <Logout logoutButt={this.onClickingButt} />}
          {!isLoggin && <Login loginButt={this.onClickingButt} />}
        </div>
      </div>
    )
  }
}

export default Message
