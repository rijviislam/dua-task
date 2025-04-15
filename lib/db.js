import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'dua_main.sqlite');

const db = new Database(dbPath);

export default db;



