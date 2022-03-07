export default class Notes {
    constructor(noteObj) {
        this.id = noteObj.id;
        this.title = noteObj.title || '';
        this.content = noteObj.content;
    }
}
