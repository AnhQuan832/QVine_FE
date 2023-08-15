import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'user',
})
export class UserPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }

  apiResToUser(jsonUser: any) {
    return new User(
      jsonUser.userID,
      jsonUser.email,
      jsonUser.fullName,
      jsonUser.userRoles,
      jsonUser.locked
    );
  }

  jsonToUser(jsonUser: any) {
    return new User(
      JSON.parse(jsonUser)._userID,
      JSON.parse(jsonUser)._email,
      JSON.parse(jsonUser)._fullName,
      JSON.parse(jsonUser)._userRoles,
      JSON.parse(jsonUser)._locked
    );
  }
}
