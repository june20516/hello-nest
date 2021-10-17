import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private momvies: Movie[] = [];

    getAll() :Movie[] {
        return this.momvies;
    }

    getOne(id: string) :Movie {
        return this.momvies.find(movie => movie.id === parseInt(id))
    }

    deleteOne(id: string) :boolean {
        this.momvies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.momvies.push({
            id: this.momvies.length + 1,
            ...movieData
        })
    }
}
