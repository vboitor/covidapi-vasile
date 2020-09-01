import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom = 12;
  center: google.maps.LatLngLiteral = {lat: 43, lng:79};
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 5,
    minZoom: 1,
  }

  lat = 43;
  lng = 79;
  constructor() { }

  ngOnInit(): void {
  }
  onMapClick(event){
    this.lat = event.lat;
    this.lng = event.lng;
    console.log(event);
  }
}
