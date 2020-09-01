import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule} from '@angular/material/slider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';
import { GoogleMapsModule } from '@angular/google-maps'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,MatButtonToggleModule,MatExpansionModule,
    MatFormFieldModule,MatInputModule,MatMenuModule,MatDialogModule,MatSelectModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
