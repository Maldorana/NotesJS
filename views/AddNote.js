import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Add Note");
    }

    async getHtml() {
        return `
          <div id="container">
            <div id="add-note-page">
              <h1>Add Note</h1>
              <div id="note-form">
                <form>
                  <input type="text" placeholder="Note title" id="note-title">
                  <input type="text" placeholder="Note content" id="note-content">
                  <input type="submit" value="Add note" id="add-note">
                </form>
              </div>
            </div>
          </div>
        `;
    }
}