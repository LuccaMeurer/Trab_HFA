import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      "User",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        full_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
         data_nacimento: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
         email: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
         sexo: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
         estado_civil: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        cpf: {
           type: DataTypes.BIGINT,
           allowNull: false,
        },
      },
      {
        tableName: "user",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
