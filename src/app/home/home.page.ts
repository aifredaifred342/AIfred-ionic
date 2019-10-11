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
      name: 'Reunión 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/shapes.svg',
    },
    {
      name: 'Reunión 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/shapes.svg',
    },
    {
      name: 'Reunión 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/shapes.svg',
    },
    {
      name: 'Reunión 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt massa id placerat.',
      date: '01/02/2019',
      image: '/assets/shapes.svg',
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
