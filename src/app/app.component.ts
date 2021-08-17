import {Component, OnInit} from '@angular/core';
import {AppCardService} from './firstSimpleImpl/app-card/app-card.service';
import {Entity, Fetch, User} from './firstSimpleImpl/fetch/fetch';
import {MyCustomFetchService} from './firstSimpleImpl/my-custom-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myAngularFramework';

  constructor(private cardService: AppCardService,
              private myCustomFetchService: MyCustomFetchService
  ) {}

  ngOnInit(): void {

    this.cardService.onCardEvent().subscribe(event => {

        if (event.name === 'cancel') {
          alert(' I have cancel ;) ');
        }

        if (event.name === 'ok') {
          alert(' I have ok ;) from ' + event.payload.title);
        }

    });
  }

}
