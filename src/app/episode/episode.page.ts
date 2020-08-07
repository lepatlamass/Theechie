import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episode: Entry<any>;

  constructor( 
    private route: ActivatedRoute, 
    private router: Router, 
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    const episodeId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getEpisode(episodeId).then((episode) => {
      this.episode = episode;
    });
    return console.log(this.episode);
  }

}
