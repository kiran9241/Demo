import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'user.component.html',


})
export class UserComponent implements OnInit {
  page1 = 2;
  page = [this.page1];

  coaches = [];
  students = [];
  public filterId = "";
  public filterlastname = "";
  public filterQuery = "";
  constructor() {
    this.page = [this.page1];

    this.coaches = [
      { uuid: "2cf1", username: "Bala@Student", firstname: "Bala", lastname: "M" }
      , { uuid: "sf51", username: "k@Student", firstname: "kiran", lastname: "M" }
      , { uuid: "f51", username: "a@Student", firstname: "arun", lastname: "M" }
      , { uuid: "7d-a", username: "r@Student", firstname: "raghu", lastname: "M" }
      , { uuid: "add1-c421", username: "k@Student", firstname: "kir", lastname: "M" }
      , { uuid: "2cff0", username: "r@Student", firstname: "rag", lastname: "M" }
      , { uuid: "79f51", username: "a@Student", firstname: "aru", lastname: "M" }
    ];
  }


  change() {
    this.page = [this.page1];

  }
  ngOnInit() {
  }


}
