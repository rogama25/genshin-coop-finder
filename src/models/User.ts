import {database} from "@/db/database";
import {DataTypes} from "sequelize";

export const User = database.define("User", {
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }
})