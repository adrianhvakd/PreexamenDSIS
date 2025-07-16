import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('donaciones')
export class Donacionesentity {
    @PrimaryGeneratedColumn()
    id:string;

    @Column({type:'varchar', length:50})
    nombre:string;

    @Column({type:'varchar', length:50})
    apellido:string;

    @Column({type:'decimal', precision:10, scale: 2})
    monto:number;

    @Column({type:'text'})
    mensaje:string;

    @CreateDateColumn()
    createAt:Date;

    @UpdateDateColumn()
    updateAt:Date;

    @DeleteDateColumn()
    deleteAt:Date;

}
