module.exports = function(sequelize, DataTypes) {
  var trade = sequelize.define("Trade", {
        tcmID_giver: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        tcmID_taker: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        cookie_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cookie_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
      });
      
      return trade;
    };