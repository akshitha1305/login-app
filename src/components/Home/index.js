// Write your code here
import {Component} from 'react'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message />
        </div>
      </div>
    )
  }
}
export default Home
