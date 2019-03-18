import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './pipes/status.pipe';
import { TileComponent } from './tiles/tile/tile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { StarComponent } from './star/star.component';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes =  [{
  path:"login", component : LoginComponent},
  {path:"tiles", component : TilesComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:"register", component : RegisterComponent},
  {path:"tiles/:Id",component:TileDetailComponent},
  {path:"",pathMatch: 'prefix', redirectTo:"login"},
  {path:"**", redirectTo:"login"}
 
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    WelcomeComponent,
    TileDetailComponent,
    StarComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
