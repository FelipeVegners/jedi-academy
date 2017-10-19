import { Component } from '@angular/core';

import {Student} from './students/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant', color: 'lightgreen'},
    {name: 'Leia', isJedi: false, color: 'red'},
    {name: 'Han Solo', isJedi: false, color: 'red'}
  ]

}
