import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('todolistState', [
      state('dotolist_hide', style({
        width: '320px',
        right: '-320px'
      })),
      state('dotolist_show', style({
        width: '320px',
        right: '0px'
      })),
      // transition('* => *', animate('300ms'))
      transition('dotolist_hide => dotolist_show', animate('300ms ease-out')),
      transition('dotolist_show => dotolist_hide', animate('300ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  ngOnInit() { }
}
