export default class Notes {
    constructor(noteObj) {
        this.id = noteObj.id;
        this.title = noteObj.title || 'Untitled Note';
        this.content = noteObj.content;
    }
}
