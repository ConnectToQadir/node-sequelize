'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
    }
  }
  users.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Name should not be Empty!"
        },
        notNull:{
          msg:"Name should not be Null"
        }
      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:{
        args:true,
        msg:"Email Already Exists!"
      },
      validate:{
        isEmail:{
          msg:"Not a valid Email!"
        },
        notEmpty:{
          msg:"Email should not be Empty!"
        },
        notNull:{
          msg:"Email should not be Null"
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Password should not be Empty!"
        },
        notNull:{
          msg:"Password should not be Null"
        },
        min:8,
        max:16
      }
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};