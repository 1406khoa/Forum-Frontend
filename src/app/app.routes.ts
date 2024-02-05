import { Routes } from '@angular/router';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: "post",
    component: PostDetailComponent
  }
];
