import {Component, Injector, OnInit} from '@angular/core';
import {RepositoryService} from '../persistence/repository.service';
import {UserMapperService} from './user-mapper.service';

/**
 * TODO how to pass config for repo service
 */
@Component({
  selector: 'app-app-v2',
  templateUrl: './app-v2.component.html',
  styleUrls: ['./app-v2.component.css']
})
export class AppV2Component implements OnInit {

  id: string;

  constructor(private injector: Injector, public repo: RepositoryService<any>, public  mapper: UserMapperService) {}

  ngOnInit(): void {}

}
