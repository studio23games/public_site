import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-studio-section',
  templateUrl: 'studio-section.component.html',
  styleUrls: ['studio-section.component.scss']
})

export class StudioSectionComponent implements OnInit, AfterViewInit {
  url = "https://api.mapbox.com/styles/v1/studio23games/clfr72rmr002c01o5ppn8agli/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3R1ZGlvMjNnYW1lcyIsImEiOiJjbGZyNnlqYzkwMzRkM3lwZG00dGdvdmFyIn0.EZd_-c4ZQnfG9Gbm9fslKQ";

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    const map = L.map("leaflet", {zoomControl: false, dragging: false})
      .setView([55.115663554096244, 10.239026950915264], 5);
    L.tileLayer(this.url, {attribution: '<a href="https://mapbox.com">Mapbox</a>'}).addTo(map);
    L.marker([55.115663554096244, 10.239026950915264], {title: "Magic"}).addTo(map);
    map.scrollWheelZoom.disable();
  }
}
