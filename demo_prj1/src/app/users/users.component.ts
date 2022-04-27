import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { IUser, User } from './user.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$?: IUser[];
  constructor(private data: DataService) { }

  async ngOnInit() {
    this.data.getUsers().subscribe(
         (      data: HttpResponse<User[]>) => this.users$ = data.body ?? []
     );
 }

}
