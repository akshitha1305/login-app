// Write your code here
import {Component} from 'react'
import LoginButt from '../Login/index'
import LogoutButt from '../Logout/index'
import './index.css'

class Message extends Component {
  render() {
    return (<h1 className="heading">Please Login</h1>
    <div>
        <LoginButt />
    <LogoutButt/>
    </div>)
  }
}

export default Message
