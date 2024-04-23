export class Project {
    public constructor(
        private fileName    : string = "NO-FILE-NAME",
        private projectName : string = "NO-PROJ-NAME",
        private summary     : string = "NO-SUMMARY",
    ) {}

    public getFileName()    { return this.fileName; }
    public getProjectName() { return this.projectName; }
    public getSummary()     { return this.summary; }
}
