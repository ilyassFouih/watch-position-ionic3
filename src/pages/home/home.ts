import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Coordinates, Geoposition } from "@ionic-native/geolocation"
import { Subscription } from 'rxjs/Subscription';
import { WatchPositionProvider } from '../../providers/watch-position/watch-position';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {


  position: Geoposition[] = []
  $watchPosition: Subscription
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private watchPositionProvider: WatchPositionProvider) {

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.stopWatching()
  }


  watchPosition() {
    this.$watchPosition = this.geolocation.watchPosition()
      .subscribe(async (data: Geoposition) => {
        this.position.push(data)
        // await this.watchPositionProvider.savePosition(data)
      })
  }

  stopWatching() {
    if (this.$watchPosition)
      this.$watchPosition.unsubscribe()
  }

}
