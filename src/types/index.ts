
export interface IUser {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    _created?: Date | string;
}

export interface MySqlResponse {
    affectedRows?: number;
    insertId?: number;
}

export interface UsersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    _created?: Date;
}

export interface Payload extends UsersTable {
    userid?: number;
    role?: number
}

import { Request } from 'express';

export interface ReqUser extends Request {
    user?: IUser | Payload;
}

