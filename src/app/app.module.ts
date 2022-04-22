import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http client
import { HttpClientModule } from '@angular/common/http';

// shared components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { DynamicListComponent } from './shared/components/dynamic-list/dynamic-list.component';
import { DynamicBreadcrumbComponent } from './shared/components/dynamic-breadcrumb/dynamic-breadcrumb.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationInterceptor } from './authentication.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DynamicListComponent,
    DynamicBreadcrumbComponent,
    DynamicFormComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
