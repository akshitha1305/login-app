// Write your code
import './index.css'

const Login = props => {
  const {loginButt} = props
  return (
    <button onClick={loginButt} type="button" className="button">
      Login
    </button>
  )
}

export default Login
