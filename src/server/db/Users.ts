import { Query } from './index';
import { IUser, MySqlResponse, UsersTable} from '../../types';

const allUsers = () => Query<IUser[]>('SELECT * FROM users');
const oneUser = (id: number) => Query<IUser[]>('SELECT * FROM users WHERE id = ?', [id]);
const find = (column: string, value: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);
const insert = (newUser: {name: string, email: string, password: string}) => Query<MySqlResponse>('INSERT INTO users SET ?', newUser);

export default {
    allUsers,
    oneUser,
    find,
    insert
};