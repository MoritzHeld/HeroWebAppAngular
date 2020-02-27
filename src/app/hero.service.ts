import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { map } from 'rxjs/operators';


const endpoint = 'http://localhost:8080/';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
  })
  
export class HeroService {
  
  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(endpoint + 'heroes');
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(endpoint + 'heroes/' + id);
  }

}


