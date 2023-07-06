import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  console.log('login')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigateToHome = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickLoginBtn = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      setCookiesAndNavigateToHome(data.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
