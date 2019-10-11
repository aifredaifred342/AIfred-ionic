import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent {

  public meeting = {
    name: 'Reunión 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula lectus justo.',
    date: '01/02/2019',
    image: '/assets/shapes.svg',
    emotions: [
      {name: 'emoción 1', percent: 10},
      {name: 'emoción 2', percent: 30},
      {name: 'emoción 3', percent: 40},
      {name: 'emoción 4', percent: 20}
    ]
  };

  constructor() { }

}
