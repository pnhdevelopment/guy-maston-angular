import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';


interface Email {
  email: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  // emailsCol: AngularFirestoreCollection<Email>;
  emails: Observable<Email[]>;

  email:string;
  submitted: boolean = false;

  heroForm = new FormGroup ({
    email: new FormControl(null, [Validators.required, this.mailFormat])
  });


  constructor(
    // private afs: AngularFirestore,
    // public auth: AuthService
  ) { }

  ngOnInit() {
  	// this.emailsCol = this.afs.collection('emails');
   //  this.emails = this.emailsCol.valueChanges();
  }

  mailFormat(control: FormControl){
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (control.value && !EMAIL_REGEXP.test(control.value)){
      return {
        validateEmail: {
          valid: false,
          message: "Not valid email."
        }
      };
    }
    return null;
  }

  submitPost() {
    // this.afs.collection('emails').add({'email': this.heroForm.value.email});
    // console.log(this.heroForm.value.email);
    // console.log(this.heroForm.valid);
    this.submitted = true;
  }

}
