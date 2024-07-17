import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3000",
    password: "12345678joao",
    database: "crud"
})