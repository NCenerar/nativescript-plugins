import { Component, NgZone } from '@angular/core';
import { DemoSharedHelloWorld } from '@demo/shared';
import { } from '@ncenerar/nativescript-hello-world';

@Component({
	selector: 'demo-nativescript-hello-world',
	templateUrl: 'nativescript-hello-world.component.html',
})
export class HelloWorldComponent {
  
  demoShared: DemoSharedHelloWorld;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHelloWorld();
  }

}