import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-sec4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-sec4.html',
  styleUrl: './home-sec4.css'
})
export class HomeSec4 {
  // استخدام Signal لتخزين البريد الإلكتروني
  email = signal('');

  subscribe() {
    if (this.email()) {
      console.log('تم الاشتراك بالبريد:', this.email());

      alert('شكراً لاشتراكك في نشرتنا الإخبارية!');
      this.email.set('');
    }
  }
}