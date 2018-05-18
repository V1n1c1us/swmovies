declare var $: any;

import { Component, OnInit } from '@angular/core';
import { Movies } from '../model/movies.model';
import {SwserviceService} from '../swservice.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [SwserviceService]
})
export class PrincipalComponent implements OnInit {

  public movies: Movies[];
  public movie: Movies;


  constructor(private swService: SwserviceService) { }


  ngOnInit() {
    this.swService.getFilms().subscribe(data => {
      this.movies = data.results;
      this.movies.forEach(movie => console.log(movie));
    });
  }

  // exibe os detalhes do respectivo filme (modal)
  detalhes(movie: Movies) {
    this.movie = movie;
    $("#detalhes").modal('show');
  }


}
