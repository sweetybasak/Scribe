import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseid: string;
  coursename: string;

  @Output('courseCreated') courseCreated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  createCourse() {
    firebase.firestore().settings({
      timestampsInSnapshots: true
    });
    firebase.firestore().collection("course").add({
      courseid: this.courseid,
      coursename: this.coursename
    }).then((data) => {
      console.log(data);
      this.courseCreated.emit();
      

    }).catch((error) => {
      console.log(error);
    })
  }

}
