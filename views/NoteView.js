import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Note");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}