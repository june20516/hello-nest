import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll() :Movie[] {
        return this.movies;
    }

    getOne(id: number) :Movie {
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        }
        return movie;
    }

    deleteOne(id: number) {
        const movie = this.getOne(id)
        this.movies = this.movies.filter(m => m.id !== movie.id);
    }

    create(movieData: CreateMovieDto) {
        const movie = {
            id: this.movies.length + 1,
            ...movieData
        }
        this.movies.push(movie)
        return movie
    }

    update(id: number, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
