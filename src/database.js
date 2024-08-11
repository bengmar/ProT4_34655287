import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bengochea_m'
};

export const pool = mysqlConnection.createPool(properties);
