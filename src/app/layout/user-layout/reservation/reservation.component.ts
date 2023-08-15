import { Component, OnInit } from '@angular/core';
import { over } from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Table } from 'src/app/core/models/Table';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  private stompClient;

  protected listTable: Table[];

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.connect();
    this.reservationService.getAllTable().subscribe(value => {
      this.listTable = value;
    })
  }

  public connect() {
    let Sock = new SockJS('http://localhost:8080/ws');
    this.stompClient = over(Sock);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }



  public updateTable(currentTable) {
    let table = {
      tableID: currentTable.tableID,
      name: currentTable.name,
      numOfSeat: currentTable.numOfSeat,
      available: !currentTable.available
    }
    this.stompClient.send("/app/updateTable", {}, JSON.stringify(table))
  }


  onConnected = () => {
    this.stompClient.subscribe('/table', this.onDataChange);
  }

  onDataChange = (payload) => {
    var payloadData = JSON.parse(payload.body)
    this.listTable.map(table => {
      if (table.tableID === payloadData.tableID) {
        table.available = payloadData.available
        return
      }
    })
  }

  onUpdateTable = (payload) => {
    var payloadData = JSON.parse(payload.body);
  }

  onError = (err) => {
    console.log(err);
  }


}




