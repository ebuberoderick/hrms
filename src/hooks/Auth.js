'use client'
import Cookies from 'js-cookie';
import { addData } from '@/Store/reducers/UsersReducer';
import dynamic from 'next/dynamic';


export function SignInAuth(data, dispatch) {
  let x = data?.data
  x.employee = data?.data.user.employee
  dispatch(addData(x));
  Cookies.set('hrms_jwt', data?.data?.bearer_token)
}

export async function SignOut(dispatch) {
  dispatch(addData({}))
  Cookies.remove('hrms_jwt')
}

export function Session(user) {
  const session = {
    status: '',
    user
  }
  if (Object.keys(user.value).length !== 0 && Cookies.get('hrms_jwt')) {
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






