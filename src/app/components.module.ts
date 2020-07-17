import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule ({
    declarations: [ NavComponent ],
    exports: [NavComponent],
    imports: [RouterModule]
})
export class ComponentsModule{}