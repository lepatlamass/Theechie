import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule ({
    declarations: [ NavComponent,FooterComponent ],
    exports: [NavComponent,FooterComponent],
    imports: [RouterModule]
})
export class ComponentsModule{}