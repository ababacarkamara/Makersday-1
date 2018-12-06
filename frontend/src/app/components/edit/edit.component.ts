import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../eleve.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private eleveService: EleveService) { }

  ngOnInit() {
  }

}
