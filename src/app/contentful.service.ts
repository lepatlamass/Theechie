import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  //connection to contentful apikey
private client = createClient({
  space: environment.contentfuel.spaceId,
  accessToken:environment.contentfuel.token
});
  constructor() { }

  //method to get all the episode
  getAllEpisode(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'podcastEpisode'
    }, query))
    .then(res => res.items);
  }

  //method to load a specific cause
  getEpisode(episodeId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'podcastEpisode'
    }, {'sys.id': episodeId}))
    .then(res => res.items[0]);
  }
}
