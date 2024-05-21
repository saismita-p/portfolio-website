export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly REACT = new Tag('React', 'orange');
    static readonly JAVASCRIPT = new Tag('Javascript', 'brown');
    static readonly JAVA = new Tag('Java', 'purple');
    static readonly NODEJS = new Tag('NodeJs', 'blue');
    

    constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}