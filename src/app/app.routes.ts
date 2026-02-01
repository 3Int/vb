import { Routes } from '@angular/router';
import { ScreenBasicComponent } from './screen-basic/screen-basic.component';
import { ScreenEditComponent } from './screen-edit/screen-edit.component';
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';

export const routes: Routes = [
    {
    path: '',
    children: [
      { path: '', component: ScreenEditComponent },
      /* IMPORTANT: all routes have to include a `.` (dot)
      this is a workaround used in `sw.js`
      to allow hosting services on the same subdomain as this PWA
      */
      { path: 'basic.t', component: ScreenBasicComponent },
      { path: 'rotations.t', component: ScreenRotationsComponent }
    ]
  }
];
