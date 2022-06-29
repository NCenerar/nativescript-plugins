import { Observable } from '@nativescript/core';

export class HelloWorldCommon extends Observable {
    public sayHello(): string {
        return "Hello Common NativeScript!";
    }
}
