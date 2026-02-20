import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../datablogs';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-sec3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-sec3.html',
  styleUrl: './home-sec3.css'
})
export class HomeSec3 {
  private blogService = inject(BlogService);

  latestPosts = toSignal(
    this.blogService.getPosts().pipe(
      map((data: any) => {
        const posts = data.posts || data;
        return posts.slice(0, 3); 
      })
    ),
    { initialValue: [] }
  );
}