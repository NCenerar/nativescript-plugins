import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HelloWorldComponent } from './nativescript-hello-world.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HelloWorldComponent }])],
  declarations: [HelloWorldComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class HelloWorldModule {}
