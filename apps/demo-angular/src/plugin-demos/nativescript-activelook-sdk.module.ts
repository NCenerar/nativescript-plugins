import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ActiveLookComponent } from './nativescript-activelook-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ActiveLookComponent }])],
  declarations: [ActiveLookComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class ActiveLookModule {}
