import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { delay, of } from "rxjs";
import { EasyAuthService } from "./easy-auth.service";
import { EasyAuthUser } from "./models/easyAuthUser";

describe('EasyAuthService', () => {

  let service: EasyAuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [EasyAuthService],
      imports: [],
    });

    service = new EasyAuthService();

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the observable', fakeAsync(()=>{
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(()=>{
      isSubscribed = true;
    })
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }))


  it('should have an initial value of undefined for easyAuthUserObservable', (done) => {
    service.easyAuthUserObservable.subscribe((userData) => {
      expect(userData).toBeUndefined();
      done();
    });

  });

  it('should update the value of easyAuthUserObservable when setEasyAuthUserObservable is called', (done) => {
    const userData = { id: 1, name: 'John Doe' };

    service.easyAuthUserObservable.subscribe((updatedUserData) => {
      expect(updatedUserData).toEqual(userData);
      done();
    });

    service.setEasyAuthUserObservable(userData);
  });


  it('should set the user data', () => {

    let userData: EasyAuthUser = { id:1, name: 'John Doe'};
    const expectedUserData = userData;

    service.setEasyAuthUserObservable(userData);

    expect(service.easyAuthUser.getValue()).toEqual(expectedUserData);
  });

});












