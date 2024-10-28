import { Entity, 
    PrimaryGeneratedColumn,Column} 
    from "typeorm";

@Entity()
export class Bootcamp {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    phone:number;

    @Column()
    address:string;

    @Column()
    topics: string;

    @Column({name: 'average_rating'})
    averageRating: number
}
