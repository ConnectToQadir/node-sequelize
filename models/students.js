'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  
  class students extends Model {
    static associate(models) {
    }
  }


  students.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    father_name:{
      type:DataTypes.STRING,
      allowNull:true
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'students',
  });



  return students;
};