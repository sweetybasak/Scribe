export interface Roles{
    student: boolean;
    teacher?: boolean;
    admin?: boolean;
}

export class User {
    email: string;
    password: string;
    roles: Roles;

    constructor(authData) {
        this.email = authData.email;
        this.password = authData.password;
        this.roles = authData.roles;
    }
}

