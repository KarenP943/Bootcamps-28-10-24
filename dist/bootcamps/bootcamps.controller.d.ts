import { BootcampsService } from './bootcamps.service';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
export declare class BootcampsController {
    private readonly bootcampsService;
    constructor(bootcampsService: BootcampsService);
    create(createBootcampDto: CreateBootcampDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBootcampDto: UpdateBootcampDto): string;
    remove(id: string): string;
}
