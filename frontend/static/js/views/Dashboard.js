import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome back, DOM </h1>
            <p>
                Ut eiusmod cupidatat laboris pariatur excepteur in velit nulla id aliqua adipisicing nisi eiusmod est. Mollit Lorem aliquip esse amet anim. Ipsum minim mollit eu ipsum amet magna fugiat anim Lorem non quis tempor nulla aliquip. Ut dolore irure veniam aliquip elit consequat commodo aute labore velit cillum adipisicing. Nostrud excepteur ex irure labore sunt. Tempor id eu ea qui. Mollit dolor proident exercitation deserunt.
            </p>
            <p>
             <a href="/posts" data-link>View recent posts</a>
            </p>
        `
    }
}