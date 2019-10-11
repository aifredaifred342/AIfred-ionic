import { Component } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent {
  public emotionsLoaded = false;
  public topicsLoaded = false;
  public peopleLoaded = false;
  private colors = ['#2196f3', '#81d4fa', '#a5d6a7', '#ffd54f', '#f48fb1'];

  public meeting = {
    name: 'Reunión 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula lectus justo.',
    date: '01/02/2019',
    image: '/assets/video/video.mp4',
    emotions: [
      { name: 'Frustración', percent: 100 },
      { name: 'Enfadado', percent: 300 },
      { name: 'Alegría', percent: 150 },
      { name: 'Aceptación', percent: 200 },
      { name: 'Motivado', percent: 250 }
    ],
    topics: [
      { name: 'Hipotecas', percent: 200 },
      { name: 'Camunda', percent: 300 },
      { name: 'Scrum', percent: 100 },
      { name: 'QA', percent: 200 },
      { name: 'Bloqueos', percent: 200 },
    ],
    peoples: [
      { name: 'Alejandro', percent: 200 },
      { name: 'Óscar', percent: 300 },
      { name: 'Jorge', percent: 100 },
      { name: 'Daniel', percent: 100 },
      { name: 'Sergio', percent: 100 }
    ]
  };

  public emotionsPieChartOptions: ChartOptions = {};
  public emotionsPieChartLabels: Label[] = [];
  public emotionsPieChartData: any[] = [];
  public emotionsPieChartType: ChartType = 'pie';
  public emotionsPieChartLegend = true;
  public emotionsPieChartColors = [
    {
      backgroundColor: this.colors,
    },
  ];

  public topicsPieChartOptions: ChartOptions = {};
  public topicsPieChartLabels: Label[] = [];
  public topicsPieChartData: any[] = [];
  public topicsPieChartType: ChartType = 'pie';
  public topicsPieChartLegend = true;
  public topicsPieChartColors = [
    {
      backgroundColor: this.colors,
    },
  ];

  public peopleBarChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public peopleBarChartLabels: Label[] = ['Daniel', 'Rosa', 'Pablo', 'Óscar', 'Sergio', 'Pep', 'Adrian'];
  public peopleBarChartType: ChartType = 'bar';
  public peopleBarChartLegend = true;
  public peopleBarChartData: ChartDataSets[] = [
    { data: [15, 23, 7, 11, 5, 9, 30, 13, 70], label: 'Intervenciones' }
  ];


  public peopleEmotionRadarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public peopleEmotionRadarChartLabels: Label[] = ['Frustración', 'Enfadado', 'Alegría', 'Aceptación', 'Motivado'];

  public peopleEmotionRadarChartData: ChartDataSets[] = [
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Daniel' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Rosa' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Pablo' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Óscar' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Sergio' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Pep' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Adrian' }
  ];
  public peopleEmotionRadarChartType: ChartType = 'radar';

  public peopleTopicsRadarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public peopleTopicsRadarChartLabels: Label[] = ['Hipotecas', 'Camunda', 'Scrum', 'QA', 'Bloqueos'];

  public peopleTopicsRadarChartData: ChartDataSets[] = [
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Daniel' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Rosa' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Pablo' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Óscar' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Sergio' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Pep' },
    { data: [this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber, this.randomNumber], label: 'Adrian' }
  ];
  public peopleTopicsRadarChartType: ChartType = 'radar';

  private get randomNumber() {
    return Math.floor((Math.random() * 100) + 1);
  }

  constructor() {
    this.generateEmotions();
    this.generateTopics();
  }

  private generateEmotions() {
    this.meeting.emotions.forEach(element => {
      this.emotionsPieChartLabels = [
        ...this.emotionsPieChartLabels,
        [element.name]
      ];
      this.emotionsPieChartData = [
        ...this.emotionsPieChartData,
        element.percent
      ];
    });
    setTimeout(() => {
      this.emotionsCreateChart();
      this.emotionsLoaded = true;
    }, 1);
  }

  private emotionsCreateChart() {
    this.emotionsPieChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
  }

  private generateTopics() {
    this.meeting.topics.forEach(element => {
      this.topicsPieChartLabels = [
        ...this.topicsPieChartLabels,
        [element.name]
      ];
      console.log(element.percent);
      this.topicsPieChartData = [
        ...this.topicsPieChartData,
        element.percent
      ];
    });
    setTimeout(() => {
      this.topicsCreateChart();
      this.topicsLoaded = true;
    }, 1);
  }

  private topicsCreateChart() {
    this.topicsPieChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
  }


}
