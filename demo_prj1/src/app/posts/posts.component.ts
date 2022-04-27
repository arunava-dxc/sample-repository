import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { IPost, Post } from './post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

   posts$!: IPost[];
  
  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getPosts().subscribe(
          (      data: HttpResponse<Post[]>) => this.posts$ = data.body ?? []
      );
  }

}
