import { Component, OnInit, inject,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../../datablogs';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
  encapsulation: ViewEncapsulation.None // السطر ده هيخلي الـ CSS يطبق على الـ HTML غصب عنه
})
export class BlogDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  // تعريف المتغيرات اللي الـ HTML مستنيها
  post: any = null;
  sections: any[] = [];

  ngOnInit() {
    // 1. استلام الـ ID من الـ URL (المفروض يكون اسم الباراميتر في الـ App-Routing هو 'id')
    const postId = this.route.snapshot.paramMap.get('id');

    // 2. جلب الداتا من السيرفس
    this.blogService.getPosts().subscribe({
      next: (data: any) => {
        const allPosts = data.posts || data;
        // 3. البحث عن المقال اللي الـ ID بتاعه مطابق
        this.post = allPosts.find((p: any) => p.id.toString() === postId);

        if (this.post) {
          this.parseContent(this.post.content);
        }
      },
      error: (err) => console.error('Error fetching post:', err)
    });
  }

  // وظيفة لتقسيم الـ content لمصفوفة sections عشان الـ Sidebar والـ Loop
  parseContent(text: string) {
    const splitData = text.split('##');
    this.sections = splitData.filter(s => s.trim() !== '').map((s, index) => {
      const lines = s.trim().split('\n');
      return {
        id: `section-${index}`,
        title: lines[0].replace(/[#?]/g, '').trim(),
        content: lines.slice(1).join('\n').trim()
      };
    });
  }

  // ميزة الـ Smooth Scroll اللي في الـ HTML بتاعك
  scrollToSection(index: number) {
    const sectionId = this.sections[index].id;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}