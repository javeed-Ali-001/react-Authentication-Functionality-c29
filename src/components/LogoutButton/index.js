import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button onClick={onClickLogoutBtn} type="button" className="btn">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
