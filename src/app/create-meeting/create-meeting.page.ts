import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.page.html',
  styleUrls: ['./create-meeting.page.scss'],
})
export class CreateMeetingPage implements OnInit {

  createMeetingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.createMeetingForm = this.fb.group({
      file: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  createMeeting() {
    console.log(this.createMeetingForm);
    this.dismissModal();
  }
}
