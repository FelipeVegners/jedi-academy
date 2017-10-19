import { Component, OnInit, Input } from '@angular/core';

import {Student} from './student.model'

@Component({
  selector: 'jad-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log(`Student: ${this.student.name}`)
  }

  isJediBackgroundColor (student) {
    return student.isJedi ? student.color : ''
  }
}
