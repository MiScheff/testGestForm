import { AboutComponent } from './about/about.component';
import { FunctionalityComponent } from './functionality/functionality.component';

export const routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: FunctionalityComponent
  }
];
