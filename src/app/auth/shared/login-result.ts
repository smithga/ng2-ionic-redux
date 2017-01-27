import { LoginUserInfo } from './login-user-info';

export interface ILoginResult {
    token: string;
    user: LoginUserInfo;
}

export class LoginResult implements ILoginResult {
    token: string;
    user: LoginUserInfo;

    constructor() { }

}