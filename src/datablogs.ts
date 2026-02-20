import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient);
  
  // شيلنا ./public/ وخليناها مسار مباشر للملف بعد الـ Build
  private jsonUrl = 'posts.json'; 

  getPosts(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}