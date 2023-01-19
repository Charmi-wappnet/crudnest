import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

import * as crypto from 'crypto';
@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @BeforeInsert()
    hashpassword() {
        this.password = crypto.createHmac('cha123', this.password).digest('hex');
    }

    @Column()
    password: string;
}