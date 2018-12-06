import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../eleve.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private eleveService: EleveService) { }

  ngOnInit() {
  }

}
