import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }

}
