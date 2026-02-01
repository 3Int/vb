import { Routes } from '@angular/router';
import { ScreenBasicComponent } from './screen-basic/screen-basic.component';
import { ScreenEditComponent } from './screen-edit/screen-edit.component';
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';

export const routes: Routes = [
    {
    path: '',
    children: [
      { path: '', component: ScreenEditComponent },
      { path: 'basic.t', component: ScreenBasicComponent },
      { path: 'rotations.t', component: ScreenRotationsComponent }
    ]
  }
];
