import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    activeUser: UserProfile;
    private isLoggedIn: boolean;
    userData: UserProfile[];
    
    constructor() {
       this.userData = [
        {
            email: "s@gmail.com", 
            name: "Savely",
            password: "qwerty"
        },
        {
            email: "al@mail.com", 
            name: "Andrew",
            password: "123"
        }
       ] 
    }

    checkUser(data?: any): boolean {
        if (data) {
         this.userData.forEach((profile: UserProfile) => {
            if (data.email === profile.email && data.password === profile.password) {
                this.isLoggedIn = true;
                this.activeUser = profile;
            } 
         })   
        }
        return this.isLoggedIn;
    }

    registration(data: any) {
        this.userData.push(new UserProfile(data));
    }
}

export class UserProfile {
    email: string;
    name: string;
    password: string;

    constructor(data: any) {
        this.email = data.email;
        this.name = data.name;
        this.password = data.password;
    }
}