import { DemoSharedBase } from '../utils';
import { HelloWorld } from '@ncenerar/nativescript-hello-world';

export class DemoSharedHelloWorld extends DemoSharedBase {

  testIt() {
    console.log('test nativescript-hello-world!', new HelloWorld().sayHello());
  }
}