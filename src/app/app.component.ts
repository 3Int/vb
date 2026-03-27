import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, RouterLink, Router, NavigationEnd } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { filter, take } from 'rxjs';
import { Player } from './model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'vb';
  data = inject(DataService);
  activeId = '/';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeId = this.router.url;
      });
    // process query params
    this.route.queryParams.pipe(
      // Only proceed if params are not empty
      filter(params => Object.keys(params).length > 0),
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
