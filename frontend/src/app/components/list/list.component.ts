import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Eleve } from '../../eleve.model';
import { EleveService } from '../../eleve.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  eleves: Eleve[];
  displayedColumns = ['civilite', 'prenom', 'nom', 'age', 'actions'];


  constructor(private eleveService: EleveService, private router: Router) { }

  ngOnInit() {
    this.fetchEleves();
  }

  fetchEleves() {
    this.eleveService
      .getEleves()
      .subscribe((data: Eleve[]) => {
        this.eleves = data;
        console.log('Data requested ...');
        console.log(this.eleves);
      });
  }
  editEleve(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEleve(id) {
    this.eleveService.deleteEleve(id).subscribe(() => {
      this.fetchEleves();
    });
  }
}
