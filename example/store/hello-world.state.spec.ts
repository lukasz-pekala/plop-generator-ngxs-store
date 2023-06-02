import { Store, NgxsModule } from '@ngxs/store';
import { HelloWorldState } from './hello-world.state';
import { HelloWorldStateModel } from './hello-world.types';
import { fakeAsync, TestBed } from '@angular/core/testing';


describe('HelloWorldState', () => {
  let store: Store;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([HelloWorldState])],
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should have an initial state', () => {
    expect(store.selectSnapshot(HelloWorldState)).toEqual<HelloWorldStateModel>({});
  });
});
