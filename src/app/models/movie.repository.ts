import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 2, title: "film 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageUrl: "2.jpeg", isPopular: false, datePublished: new Date(1995,23,12)},
            { id: 3, title: "film 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageUrl: "3.jpeg", isPopular: true, datePublished: new Date(1995,23,12)},
            { id: 1, title: "film 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageUrl: "1.jpeg", isPopular: false, datePublished: new Date(1995,23,12)},
            { id: 4, title: "film 4", description: "film 4 details", imageUrl: "4.jpeg", isPopular: true, datePublished: new Date(1995,23,12)},
            { id: 4, title: "film 5", description: "film 5 details", imageUrl: "5.jpeg", isPopular: true, datePublished: new Date(1995,23,12)}
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