import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptActivelookSdkComponent } from './nativescript-activelook-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptActivelookSdkComponent }])],
  declarations: [NativescriptActivelookSdkComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptActivelookSdkModule {}
