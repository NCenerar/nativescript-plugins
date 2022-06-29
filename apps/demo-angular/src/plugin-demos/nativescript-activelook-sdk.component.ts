import { Component, NgZone } from '@angular/core';
import { DemoSharedActiveLook } from '@demo/shared';
import { } from '@ncenerar/nativescript-activelook-sdk';

@Component({
	selector: 'demo-nativescript-activelook-sdk',
	templateUrl: 'nativescript-activelook-sdk.component.html',
})
export class ActiveLookComponent {
  
  demoShared: DemoSharedActiveLook;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedActiveLook();
  }

}