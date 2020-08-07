import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  episodes: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getAllEpisode().then(episodes => this.episodes = episodes);
  }

  gotoEpisode(episodeId){
    this.router.navigate(['/episode', episodeId]);
  }

}
