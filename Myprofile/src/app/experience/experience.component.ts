import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
  /*animations: [
    trigger('expcolp', [
      state('expand', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate('auto', style({height: 250}))
      ]),
      state('collapse', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 'auto'}))
      ])
    ])
  ]*/
})
export class ExperienceComponent implements OnInit {
  expData: Array<any> = [{
    id: '1',
    companyName: 'Capgemini Technology Services India Limited',
    totalExp: '2 Years',
    isCurrentCompany: true,
    img: './assets/images/capgemini.png'
  }, {
    id: '2',
    companyName: 'Cognizant Technology Services',
    totalExp: '3 Years 8 Months',
    isCurrentCompany: false,
    img: './assets/images/cognizant.png'
  }, {
    id: '3',
    companyName: 'Wipro Technologies P.Ltd',
    totalExp: '2 Years 6 Months',
    isCurrentCompany: false,
    img: './assets/images/wipro.png'
  }, {
    id: '4',
    companyName: 'Xlabz Technologies P.Ltd',
    totalExp: '8 Months',
    isCurrentCompany: false,
    img: './assets/images/xlabz.png'
  }, {
    id: '5',
    companyName: 'KnowledgeQ Interactive Consultancy Services P.Ltd',
    totalExp: '2 Years',
    isCurrentCompany: false,
    img: './assets/images/kq.png'
  }];
  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    // empty function
  }
}
