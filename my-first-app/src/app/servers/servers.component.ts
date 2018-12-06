import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server] attribute selector <div app-server></div>
  // selector: '.app-server' class selector <div class="app-server"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
