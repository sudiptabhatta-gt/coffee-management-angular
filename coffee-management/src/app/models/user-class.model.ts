export class UserClass {
    id: number;
    username: string;
    email: string;
    team: string;
    is_staff: boolean;
    balance: number;


    constructor(id:number, username: string, email: string, team: string, is_staff:boolean, balance: number){
        this.id = id;
        this.username = username;
        this.email = email;
        this.team = team;
        this.is_staff = is_staff;
        this.balance = balance;
    }

}
