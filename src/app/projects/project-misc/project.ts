export class Project {
    public constructor(
        private name: string = "NO-NAME",
        private markdown: string = "NO-MARKDOWN",
    ) {}

    public getName() { return this.name; }
    public getMarkdown() { return this.markdown; }
}
