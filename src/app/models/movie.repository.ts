import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 2, title: "film 2", description: "film 2 details", imageUrl: "2.jpeg", isPopular: false},
            { id: 3, title: "film 3", description: "film 3 details", imageUrl: "3.jpeg", isPopular: true},
            { id: 1, title: "film 1", description: "film 1 details", imageUrl: "1.jpeg", isPopular: false},
            { id: 4, title: "film 4", description: "film 4 details", imageUrl: "4.jpeg", isPopular: true},
            { id: 4, title: "film 5", description: "film 5 details", imageUrl: "5.jpeg", isPopular: true}
        ];
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getPopularMovies(): Movie[] {
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id: number): Movie {
        return this.movies.find(i=>i.id==id);
    }
}