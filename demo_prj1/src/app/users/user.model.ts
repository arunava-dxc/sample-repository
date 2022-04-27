export interface IUser {
        id?: number;
        username?: string;
        email?: string | null;
        phone?: string | null;
        name?: string | null;
        website?: string | null;
    }
      
      export class User implements IUser {
        constructor(
            id?: number,
            username?: string,
            email?: string | null,
            phone?: string | null,
            name?: string | null,
            website?: string | null
        ) {}
      }
    