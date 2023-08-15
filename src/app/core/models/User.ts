export class User {
  private _userID: string;
  private _email: string;
  private _fullName: string;
  private _role: string;
  private _isLock: boolean;

  get userID(): string {
    return this._userID;
  }

  set userID(value: string) {
    this._userID = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get isLock(): boolean {
    return this._isLock;
  }

  set isLock(value: boolean) {
    this._isLock = value;
  }

  constructor(userID: string, email: string, fullName: string, role: string, isLock: boolean) {
    this._userID = userID;
    this._email = email;
    this._fullName = fullName;
    this._role = role;
    this._isLock = isLock;
  }
}
