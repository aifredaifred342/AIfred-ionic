import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateMeetingService } from '../services/create-meeting.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.page.html',
  styleUrls: ['./create-meeting.page.scss'],
})
export class CreateMeetingPage implements OnInit {

  createMeetingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private modalCtrl: ModalController,
              private createMeetingService: CreateMeetingService
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
    const values = this.createMeetingForm.getRawValue();
    this.createMeetingService.save(values);
    this.dismissModal();
  }
}
