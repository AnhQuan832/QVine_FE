export class Table {
  private _tableID: string
  private _name: string
  private _numOfSeat: number
  private _available: boolean
  constructor(
    tableID: string,
    name: string,
    numOfSeat: number,
    available: boolean
  ) {
    this._tableID = tableID
    this._name = name
    this._numOfSeat = numOfSeat
    this._available = available
  }
  get tableID() {
    return this._tableID
  }

  set tableID(val: string) {
    this._tableID = val
  }

  get name() {
    return this._name
  }

  set name(val: string) {
    this._name = val
  }

  get numOfSeat() {
    return this._numOfSeat
  }

  set numOfSeat(val: number) {
    this._numOfSeat = val
  }

  get available() {
    return this._available
  }

  set available(val: boolean) {
    this._available = val
  }


}
