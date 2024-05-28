import Cookies from 'js-cookie'
import { UserInformation } from '~/provider/authProvider'
export const getUserW = () => {
  if (Cookies.get('user')) return JSON.parse(Cookies.get('user'))
  return null
}
export const setUserW = (user: UserInformation) => {
  Cookies.set('user', JSON.stringify(user))
}
export const removeUserW = () => {
  Cookies.remove('user')
}
export const hasUserW = () => {
  return !!Cookies.get('user')
}