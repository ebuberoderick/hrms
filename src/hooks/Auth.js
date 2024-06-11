'use client'
import Cookies from 'js-cookie';
import { addData } from '@/Store/reducers/UsersReducer';


export function SignInAuth(data, dispatch) {
  dispatch(addData(data?.data));
  Cookies.set('jwt', data?.data?.bearer_token)
}

export async function SignOut(dispatch) {
  dispatch(addData({}))
  Cookies.remove('jwt')
}

export function Session(user) {
  const session = {
    status: '',
    user
  }
  if (Object.keys(user.value).length !== 0 && Cookies.get('jwt')) {
    session.status = verifyJWT(user.value.bearer_token)
  } else {
    session.status = 'unauthenticated'
  }
  return session
}

export function verifyJWT(jwtToken) {
  if (jwtToken) {
    return 'authenticated'
  } else {
    return 'unauthenticated'
  }
  // if (jwtToken) {
  //   try {
  //     const [, payload] = jwtToken.split('.');
  //     const { exp: expires } = JSON.parse(window.atob(payload));
  //     if (typeof expires === 'number') {
  //       const expired = (Date.now() >= expires * 1000)
  //       if(expired){
  //         return 'unauthenticated'
  //       }else{
  //         return 'authenticated'
  //       }
  //     }
  //   } catch {
  //     return 'unauthenticated'
  //   }
  // }
  return null;
}






