export interface ILoginInfo {
    username: string;
    password: string;
}

export class LoginInfo implements ILoginInfo {
    constructor(public username: string, public password: string) { }
}
