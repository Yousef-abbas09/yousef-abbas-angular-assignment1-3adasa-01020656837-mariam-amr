import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../../datablogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  private blogService = inject(BlogService);
  private router = inject(Router);

  allPosts: any[] = []; 
  searchText: string = '';
  selectedCategory: string = 'الكل';
  categories: string[] = ['الكل', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

  ngOnInit() {
    // جلب البيانات من السيرفس
    this.blogService.getPosts().subscribe({
      next: (data: any) => {
        // لو الداتا جاية جوه كائن اسمه posts أو مصفوفة مباشرة
        this.allPosts = data.posts || data;
      },
      error: (err) => console.error('Data not found!', err)
    });
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  get filteredPosts() {
    return this.allPosts.filter(post => {
      const matchCat = this.selectedCategory === 'الكل' || post.category === this.selectedCategory;
      const matchSearch = post.title.toLowerCase().includes(this.searchText.toLowerCase());
      return matchCat && matchSearch;
    });
  }



  enterBlog(e: number): void {
    console.log(e);
    // التنقل للمسار المطلوب مع تمرير الـ id
    // المسار ده لازم يكون مطابق للي أنت معرفه في الـ App Routing
    this.router.navigate(['/blog-details', e]);
  }
}