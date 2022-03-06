import User from './user';

export default class AuthUser extends User{
    constructor(userObj, token) {
        super(userObj);
        this.token = userObj.token || token || null;
    }
}
