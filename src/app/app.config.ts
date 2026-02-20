import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // أضفنا withInMemoryScrolling
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // الإضافة هنا: بتخلي أي صفحة تفتح تبدأ من الـ Scroll 0 فوق
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled' 
      })
    ),
    provideHttpClient()
  ]
};