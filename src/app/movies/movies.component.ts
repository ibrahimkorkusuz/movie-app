import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.services';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Film Listesi";
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  filteredMovies: Movie[];
  today = new Date();
  filterText: string= "";

  constructor(private alertify: AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.filteredMovies = this.movies;
   }

  ngOnInit(): void {
  }

  onInputChange(){
    this.filteredMovies = this.filterText?
    this.movies.filter(m=>m.title.indexOf(this.filterText) !== -1 || m.description.indexOf(this.filterText) !== -1): this.movies;
  }

  addToList($event: any, movie: Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText = "List Remove"
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' List Added');
    } else {
      $event.target.innerText = "List Add"
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' List Removed')
    }
  }
}
