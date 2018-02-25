import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
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

  emailsCol: AngularFirestoreCollection<Email>;
  emails: Observable<Email[]>;

  email:string;

  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
  	this.emailsCol = this.afs.collection('emails');
    this.emails = this.emailsCol.valueChanges();
  }

  addPost() {
    this.afs.collection('emails').add({'email': this.email});
  }

}
