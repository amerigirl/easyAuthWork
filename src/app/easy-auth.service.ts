import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EasyAuthUser } from 'src/app/models/easyAuthUser';

@Injectable({
  providedIn: 'root',
})
export class EasyAuthService {
  private easyAuthUser: BehaviorSubject<EasyAuthUser | undefined> =
    new BehaviorSubject<EasyAuthUser | undefined>(undefined);

  constructor() {}

  get easyAuthUserObservable(): Observable<EasyAuthUser | undefined> {
    return this.easyAuthUser.asObservable();
  }

  setEasyAuthUserObservable(userData: EasyAuthUser | undefined) {
    this.easyAuthUser.next(userData);
  }
}
