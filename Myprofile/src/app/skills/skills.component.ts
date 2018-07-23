import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  star5:Array<number>;
  star4:Array<number>;
  star3:Array<number>;
  star2:Array<number>;
  star1:Array<number>;
  constructor() { }

  ngOnInit() {
    this.star5 = new Array(5);
    this.star4 = new Array(4);
    this.star3 = new Array(3);
    this.star2 = new Array(2);
    this.star1 = new Array(1);
  }

}
