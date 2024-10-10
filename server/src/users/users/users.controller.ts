import { Controller, Get, Post, Param, Query } from '@nestjs/common';

@Controller('/users')
export class UsersController {
    @Get()
    get(): string {
        return "HIII";
    }

    @Get('/:id')
    getById(@Param('id') id: string): string {
        return id;
    }

    @Post()
    register(@Query('id') id: string): string {
        return `Hello ${id}`;
    }
}