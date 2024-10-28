import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
    @Get (":id")
    getAllBootcampsById(@Param("id") id:number): string{
        return `Aqui van a mostrarse todos los bootcamps: ${id}`
    }
}