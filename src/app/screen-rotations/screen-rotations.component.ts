// Team Generation Screen respecting volleyball roles as defined by `../model/Player`
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model';

@Component({
  selector: 'app-screen-rotations',
  imports: [FormsModule],
  templateUrl: './screen-rotations.component.html',
  styleUrl: './screen-rotations.component.less'
})
export class ScreenRotationsComponent {
  @Input() players!: Player[];
}