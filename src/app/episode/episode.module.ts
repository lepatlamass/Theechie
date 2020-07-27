import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodePageRoutingModule } from './episode-routing.module';

import { EpisodePage } from './episode.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EpisodePageRoutingModule
  ],
  declarations: [EpisodePage]
})
export class EpisodePageModule {}
