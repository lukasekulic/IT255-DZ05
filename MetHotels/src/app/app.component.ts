import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MetHotels';

  public smestajs = [
    {
      title: "23",
      price: 150
    },
    {
      title: "56",
      price: 125
    },
    {
      title: "73",
      price: 250
    },
    {
      title: "12",
      price: 500
    }
  ];

  public changeOrder(): void {
    this.smestajs = this.shuffleArray(this.smestajs);
  }

  public shuffleArray = function (array) {
    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}