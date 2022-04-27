import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { IUser, User } from '../users/user.model';
import { HttpResponse } from '@angular/common/http';
import { IPost, Post } from '../posts/post.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$!: IUser;

  constructor(private route: ActivatedRoute, private data: DataService) {
     this.route.params.subscribe( params => this.user$ = params['id']);
   }

  ngOnInit(){
    this.data.getUser(this.user$).subscribe(
            (data:HttpResponse<User>) => this.user$ = data.body ? data.body: new User()  );
      
  }

}
