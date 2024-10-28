import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
export declare class BootcampsService {
    create(createBootcampDto: CreateBootcampDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBootcampDto: UpdateBootcampDto): string;
    remove(id: number): string;
}
