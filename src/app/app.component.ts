import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { filter, take } from 'rxjs';
import { ScreenBasicComponent } from "./screen-basic/screen-basic.component";
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';
import { Player } from './model';
import { ScreenEditComponent } from './screen-edit/screen-edit.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule, ScreenBasicComponent, ScreenRotationsComponent, ScreenEditComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'vb';
  data = inject(DataService);

  constructor(public route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.pipe(
      filter(params => Object.keys(params).length > 0), // Only proceed if params are not empty
      take(1)
    ).subscribe(params => {
      if (params['names']){
        this.data.setPlayers(
          params['names'].split(',').map((name: string) => new Player(name))
        );
      }
    });
  }


}
