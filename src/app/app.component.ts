import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggleModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'vb';
}
