// without export keyword it will throw error that this is not not a module and cannot be imported into other components
export class Quiz{
    question : string;
    choices: string[];
    answerIndex: string;

    constructor(question:string, choices: string[], answerIndex: string){
        this.question = question;
        this.choices = choices;
        this.answerIndex = answerIndex;
    }
}