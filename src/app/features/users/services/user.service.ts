import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  #httpClient = inject(HttpClient);

  $users = new BehaviorSubject<any>([]);

  getAllUsers() {
    this.#httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      users => {
        this.$users.next(users);
      }
    );
    // this.#httpClient.get('https://dummyjson.com/users').subscribe(
    //   users => {
    //     this.$users.next(users);
    //     this.$users.pipe(map(users => users.users));
    //   }
    // );
  };

}
