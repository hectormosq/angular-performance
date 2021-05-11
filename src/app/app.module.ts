import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './Material.module';
import { FormsModule } from '@angular/forms';
import { GeneralUnoptimizedModule } from './general-unoptimized/general-unoptimized.module';
import { GeneralUnoptimizedComponent } from './general-unoptimized/general-unoptimized.component';
import { OnPushUnoptimizedComponent } from './on-push-unoptimized/on-push-unoptimized.component';
import { OpuTodoListComponent } from './on-push-unoptimized/components/opu-todo-list/opu-todo-list.component';
import { OpuTodoInputComponent } from './on-push-unoptimized/components/opu-todo-input/opu-todo-input.component';
import { CalculatePipe } from './shared/calculate.pipe';
import { OpuDetailsComponent } from './on-push-unoptimized/components/opu-details/opu-details.component';
import { SelectionPipe } from './shared/selection.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeneralUnoptimizedComponent,
    OnPushUnoptimizedComponent,
    OpuTodoListComponent,
    OpuTodoInputComponent,
    OpuDetailsComponent,
    CalculatePipe,
    SelectionPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    GeneralUnoptimizedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
