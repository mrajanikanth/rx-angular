import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Let1ContainerComponent } from './solution/let1.container.component';
import { TemplateModule } from '@rx-angular/template';

export const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    component: Let1ContainerComponent
  },
  {
    path: 'solution',
    component: Let1ContainerComponent
  }
];
const DECLARATIONS = [Let1ContainerComponent];
export const materialModules = [
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule,
    materialModules,
    RouterModule.forChild(ROUTES),
    TemplateModule
  ],
  exports: [DECLARATIONS]
})
export class PrioritizeInTreeModule {}
