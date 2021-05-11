

import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatChipsModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}

