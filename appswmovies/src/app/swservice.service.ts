import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SwserviceService {

  private urlFilms = 'https://swapi.co/api/films';
  private urlGitUser = 'https://api.github.com/users/V1n1c1us'
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
  }
  // get Filsm
  getFilms(): Observable<any> {
    return this.http.get(this.urlFilms, {headers: this.headers});
  }
  // get User
  getMyUserGitHub(): Observable<any> {
    return this.http.get(this.urlGitUser, {headers: this.headers});
  }
}
