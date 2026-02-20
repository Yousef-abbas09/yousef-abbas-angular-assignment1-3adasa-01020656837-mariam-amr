import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',redirectTo: 'home',pathMatch: 'full',},
  { path: 'home', loadComponent: () => import('./components/home/home').then((c) => c.Home) , title:'Home Page' },
  { path: 'blog', loadComponent: () => import('./components/blog/blog').then((c) => c.Blog), title:'Blog Page' },
  {path: 'blog-details/:id', loadComponent: () => import('./components/blog-details/blog-details').then((c) => c.BlogDetails), title:'Blog details Page' },
  { path: 'about', loadComponent: () => import('./components/about/about').then((c) => c.About),title:'About Page' },
  { path: 'privacy', loadComponent: () => import('./components/privacy/privacy').then((c) => c.Privacy)},
  { path: 'terms', loadComponent: () => import('./components/terms/terms').then((c) => c.Terms)}, 
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then(c => c.NotFound),
    title: 'Page Not Found',
  },
];
