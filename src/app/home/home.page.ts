import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateMeetingPage } from '../create-meeting/create-meeting.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public logList = [
    {
      id: 'meet-1',
      name: 'Reunión 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/video.png',
    },
    {
      id: 'meet-2',
      name: 'Reunión 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/video.png',
    },
    {
      id: 'meet-3',
      name: 'Reunión 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/video.png',
    },
    {
      id: 'meet-4',
      name: 'Reunión 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/video.png',
    }
  ];

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateMeetingPage
    });
    return await modal.present();
  }

}
