import { ContextMenuModule } from 'primeng/contextmenu';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { NodeService } from './node.service';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    TreeModule,
    HttpClientModule,
    FieldsetModule,
    MenuModule,
    ContextMenuModule,
  ],
  providers: [NodeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
