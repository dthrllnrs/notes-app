export default class User {
    constructor(userObj) {
        this.id = userObj.id || null;
        this.name = userObj.name || '';
        this.email = userObj.email || '';
    }
}
