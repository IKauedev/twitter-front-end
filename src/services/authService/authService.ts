import api from '../../api/index'
import { AUTH_AUTH, AUTH_ACTIVATE, AUTH_REGISTER, AUTH_LOGOUT } from '../config'
import {
  IAuthSignUpRequest,
  IAuthSignUpResponse,
  IAuthVerifyResponse,
  IAuthLoginRequest,
  IAuthLoginResponse,
} from '../types'

export const register = async (signUp: IAuthSignUpRequest) => {
  if (!signUp.email || !signUp.username || !signUp.password) {
    throw new Error('All fields are required for registration.')
  }
  const response = await api.post<IAuthSignUpResponse>(AUTH_REGISTER, signUp)
  return response
}

export const verifyEmail = async ({
  activationCode,
}: {
  activationCode: string
}) => {
  if (!activationCode) {
    throw new Error('Activation code is required.')
  }
  
  // Ensure activationCode is sent as query param
  const url = `${AUTH_ACTIVATE}${encodeURIComponent(activationCode)}`
  const response = await api.get<IAuthVerifyResponse>(url)
  return response
}

export const login = async (loginData: IAuthLoginRequest) => {
  if (!loginData.email || !loginData.password) {
    throw new Error('Email and password are required for login.')
  }
  const response = await api.post<IAuthLoginResponse>(AUTH_AUTH, loginData)
  return response
}

export const logout = async () => {
  const response = await api.get(AUTH_LOGOUT)
  return response
}
