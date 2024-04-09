import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  columns: {[key: string]: string}[];
  rows: {projectName: string; owner: string; status: string;}[];

  constructor() { }

  ngOnInit(): void {
    this.columns = [
      {name: 'Project Name'},
      {name: 'Owner'},
      {name: 'Status'}
    ];

    this.rows = [
      {projectName: 'Xbox Series X', owner: 'Microsoft', status: 'Finished'},
      {projectName: 'Xbox Series S', owner: 'Microsoft', status: 'Stable'},
      {projectName: 'Playstation 5', owner: 'Sony', status: 'Critical'}
    ];
  }

  onAddRecord() {
    this.rows.push({projectName: 'Nintendo Switch X', owner: 'Nintendo', status: 'Critical'});
    this.rows = [...this.rows];
  }

}
