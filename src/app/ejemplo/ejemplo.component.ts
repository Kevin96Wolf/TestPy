import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#datepicker').click(function () {
        $(this).slideToggle();
    }

    );
  }

}
