import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sec2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-sec2.html',
  styleUrl: './home-sec2.css'
})
export class HomeSec2 {
  categories = [
    { title: 'إضاءة', icon: 'fa-lightbulb', count: '12 مقال' },
    { title: 'بورتريه', icon: 'fa-user', count: '8 مقالات' },
    { title: 'مناظر طبيعية', icon: 'fa-mountain', count: '15 مقال' },
    { title: 'تقنيات', icon: 'fa-microchip', count: '10 مقالات' },
    { title: 'معدات', icon: 'fa-camera', count: '7 مقالات' },
    { title: 'نصائح', icon: 'fa-gear', count: '20 مقال' }
  ];
  
}