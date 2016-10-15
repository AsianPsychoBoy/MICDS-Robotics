import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
		BlogComponent,
		AboutComponent,
		SignInComponent,
		HomeComponent,
		NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		ReactiveFormsModule,
    HttpModule,
		routing
  ],
  providers: [
		appRoutingProviders,
		Title
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
