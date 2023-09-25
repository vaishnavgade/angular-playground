import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    // https://rxjs.dev/api/index/function/of
    const heros = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }
}
