import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedActiveLook } from '@demo/shared';
import { } from '@ncenerar/nativescript-activelook-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedActiveLook {
	
}
