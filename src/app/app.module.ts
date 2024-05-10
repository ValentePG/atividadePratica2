import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
