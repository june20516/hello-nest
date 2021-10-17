import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    
    constructor(private readonly moviesService: MoviesService) {

    }
    
    @Get()
    getAll() :Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') movieId: Number) :Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId: Number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param('id') movieId: Number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }
}
