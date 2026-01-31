import { Routes } from '@angular/router';
import { ScreenBasicComponent } from './screen-basic/screen-basic.component';
import { ScreenEditComponent } from './screen-edit/screen-edit.component';
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: ScreenEditComponent },
      { path: 'basic', component: ScreenBasicComponent },
      { path: 'rotations', component: ScreenRotationsComponent }
    ]
  }
];
