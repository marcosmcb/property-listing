import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyBhiY-e9lYZ0M1E_q9P_w-xKuKto7rTFmY',
    authDomain: 'property-listing-ef822.firebaseapp.com',
    databaseUrl: 'https://property-listing-ef822.firebaseio.com',
    storageBucket: 'property-listing-ef822.appspot.com',
    messagingSenderId: '696106016535'
};

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'listings', component: ListingsComponent},
    {path: 'add-listings', component: AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp( firebaseConfig ),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
