import { Action } from '@ngrx/store';

export const SIGNUP_START = 'SIGNUP_START';
export const LOGIN_START = 'LOGIN_START';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const AUTHENTICATE_SUCCESS = 'LOGIN';
export const AUTHENTICATE_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      tokenId: string;
      expiryDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string; password: string;}) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {email: string; password: string;}) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export type AuthenticationActions = AuthenticateSuccess | Logout | LoginStart | AutoLogin | AuthenticateFail | SignupStart | ClearError;
