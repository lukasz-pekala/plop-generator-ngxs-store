import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { defaultHelloWorldState } from './hello-world.constant';
import { HelloWorldStateModel } from './hello-world.types';


@State<HelloWorldStateModel>({
  name: 'HelloWorld',
  defaults: defaultHelloWorldState,
})
@Injectable()
export class HelloWorldState {
  constructor() {}

}
