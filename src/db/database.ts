import {Sequelize} from "sequelize";
import pg from "pg"

export const database = new Sequelize("", {
    define: {
        freezeTableName: true,
        schema: "public",
        timestamps: false
    },
    dialectModule: pg,
    dialect: "postgres"
})