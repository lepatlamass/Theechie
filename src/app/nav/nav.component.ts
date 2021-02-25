import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
