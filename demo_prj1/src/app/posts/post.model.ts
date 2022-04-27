export interface IPost {
        id?: number;
        userId?: number;
        title?: string | null;
        body?: string | null;
    }
      
  export class Post implements IPost {
    constructor(
        id?: number,
        userId?: number,
        title?: string | null,
        body?: string | null,
    ) {}
  }