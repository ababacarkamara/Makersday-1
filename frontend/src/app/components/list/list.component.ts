import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../eleve.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private eleveService: EleveService) { }

  ngOnInit() {
    this.eleveService.getEleves().subscribe((eleves) => {
      console.log(eleves);
    });
  }

}
