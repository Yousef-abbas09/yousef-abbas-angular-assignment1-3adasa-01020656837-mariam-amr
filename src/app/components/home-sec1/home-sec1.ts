import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../datablogs';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-sec1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-sec1.html',
  styleUrl: './home-sec1.css'
})
export class HomeSec1 {
  private blogService = inject(BlogService);
    private router = inject(Router);
  
  featuredPosts = toSignal(
    this.blogService.getPosts().pipe(
      map((data: any) => (data.posts || data).slice(0, 3))
    ),
    { initialValue: [] }
  );
    EnterBlog(e: number): void {
    console.log(e);
    // التنقل للمسار المطلوب مع تمرير الـ id
    // المسار ده لازم يكون مطابق للي أنت معرفه في الـ App Routing
    this.router.navigate(['/blog-details', e]);
  }
}