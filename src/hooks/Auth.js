import Cookies from 'js-cookie';
import { addData } from '../../reduxStore/reducers/UsersReducer';
import { providerData } from '../../reduxStore/reducers/ProviderStateReducer';
import { businessData } from '../../reduxStore/reducers/BusinessReducer';


export function SignInAuth(data, dispatch) {
  // dispatch(addData(data.entity));
}

export function SignOut(dispatch) {
  dispatch(addData({}))
  dispatch(businessData({}))
  dispatch(providerData(false))
  Cookies.remove('jwt')
}

export function Session(user) {
  const session = {
    status: '',
    user
  }
  if (Object.keys(user.value).length !== 0 && Cookies.get('jwt')) {
    session.status = verifyJWT(user.value.data.api_token)
  } else {
    session.status = 'unauthenticated'
  }
  return session
}

export function verifyJWT(jwtToken) {
  if (jwtToken) {
    try {
      const [, payload] = jwtToken.split('.');
      const { exp: expires } = JSON.parse(window.atob(payload));
      if (typeof expires === 'number') {
        const expired = (Date.now() >= expires * 1000)
        if(expired){
          return 'unauthenticated'
        }else{
          return 'authenticated'
        }
      }
    } catch {
      return 'unauthenticated'
    }
  }
  return null;
}






