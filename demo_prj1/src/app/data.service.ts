import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './users/user.model';
import { Observable } from 'rxjs';
import { Post } from './posts/post.model';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
   getUsers(){
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { observe: 'response' });
  }
  getUser(userId:User) {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+userId, { observe: 'response'});
  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/', { observe: 'response' });
  }
}
