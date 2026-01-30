import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { filter, take } from 'rxjs';
import { ScreenBasicComponent } from "./screen-basic/screen-basic.component";
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';
import { Player } from './model';

@Component({
  selector: 'app-root',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule, ScreenBasicComponent, ScreenRotationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'vb';
  players : Player[] = [];

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      filter(params => Object.keys(params).length > 0), // Only proceed if params are not empty
      take(1)
    ).subscribe(params => {
      if (params['names']){
        this.players = params['names'].split(',').map((name: string) => new Player(name));
      }
    });
  }


}
