import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get('search')
    search(@Query() searchingQuery: Object) {
        return searchingQuery;
    }

    @Get(":id")
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData: Object) {
        return movieData;
    }

    @Delete(":id")
    remove(@Param('id') movieId: string) {
        return `This will remove a movie with the id: ${movieId}`;
    }

    @Patch(":id")
    patch(@Param('id') movieId: string, @Body() updateData: Object) {
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }
}
