import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MdToHtmlPipe } from './md-to-html.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [MdToHtmlPipe, SafePipe],
  imports: [IonicModule],
  exports: [MdToHtmlPipe, SafePipe]
})
export class PipesModule  {}