import { Component, OnInit } from '@angular/core';

import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    console.log('onReload: ', this.activatedRoute);
    // this.router.navigate(['servers', {relativeTo: this.activatedRoute}]);
    this.router.navigate(['/servers']);
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading' });
  }

}
