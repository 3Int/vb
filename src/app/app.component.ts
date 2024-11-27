import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggleModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatListModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'vb';
  numTeamsSelected = "2";
  onNumTeamsSelector(event: MatButtonToggleChange): void{
    this.numTeamsSelected = event.value;
  }
}
