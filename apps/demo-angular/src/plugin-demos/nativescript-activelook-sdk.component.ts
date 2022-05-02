import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptActivelookSdk } from '@demo/shared';
import { } from '@ncenerar/nativescript-activelook-sdk';

@Component({
	selector: 'demo-nativescript-activelook-sdk',
	templateUrl: 'nativescript-activelook-sdk.component.html',
})
export class NativescriptActivelookSdkComponent {
  
  demoShared: DemoSharedNativescriptActivelookSdk;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptActivelookSdk();
  }

}