import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHelloWorld } from '@demo/shared';
import { } from '@ncenerar/nativescript-hello-world';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHelloWorld {
	
}
