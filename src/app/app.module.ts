import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { PlantComponent } from './plant/plant.component';
import { BaseComponent } from './base/base.component';
import { provideHttpClient } from '@angular/common/http';
import { provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"e-potager","appId":"1:655590651191:web:c1e918647ee650a08f96b2","databaseURL":"https://e-potager-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"e-potager.firebasestorage.app","apiKey":"AIzaSyAq8noe3P5wu6BMWRnQG3yA4Wf2RLM_Ebk","authDomain":"e-potager.firebaseapp.com","messagingSenderId":"655590651191"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
