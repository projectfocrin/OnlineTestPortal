export class User {
    fullName!: string;
    password!: string;

    constructor(fullName: string, password: string){
        this.fullName = fullName;
        this.password = password;
    }
}