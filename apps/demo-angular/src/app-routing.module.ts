import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-activelook-sdk', loadChildren: () => import('./plugin-demos/nativescript-activelook-sdk.module').then(m => m.ActiveLookModule) },
	{ path: 'nativescript-hello-world', loadChildren: () => import('./plugin-demos/nativescript-hello-world.module').then(m => m.HelloWorldModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
