import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  star5: Array<number> = new Array(5);
  star4: Array<number> = new Array(4);
  star3: Array<number> = new Array(3);
  star2: Array<number> = new Array(2);
  star1: Array<number> = new Array(1);
  skillData: Array<any> = [{
    id: '1',
    language1: 'Javascript',
    language2: 'Typescript',
    star1: this.star5,
    star2:  this.star4,
    img1: './assets/images/js.png',
    img2: './assets/images/ts.png'
  }, {
    id: '2',
    language1: 'ExtJS',
    language2: 'Angular',
    star1: this.star5,
    star2:  this.star4,
    img1: './assets/images/extjs.png',
    img2: './assets/images/angular.png'
  }, {
    id: '3',
    language1: 'ReactJs',
    language2: 'JQuery',
    star1: this.star2,
    star2: this.star3,
    img1: './assets/images/react.png',
    img2: './assets/images/jquery.png'
  }, {
    id: '4',
    language1: 'HTML',
    language2: 'CSS',
    star1: this.star4,
    star2: this.star4,
    img1: './assets/images/html.png',
    img2: './assets/images/css.png'
  }, {
    id: '5',
    language1: 'Bootstrap',
    language2: 'SCSS',
    star1: this.star4,
    star2: this.star2,
    img1: './assets/images/bootstrap.png',
    img2: './assets/images/scss.png'
  }, {
    id: '6',
    language1: 'D3.Js',
    language2: 'LESS',
    star1: this.star2,
    star2: this.star2,
    img1: './assets/images/d3js.png',
    img2: './assets/images/less.png'
  }];
  constructor() { }

  ngOnInit() {
  }

}
