module.exports = sequelize, DataTypes => {
    const trade = sequelize.define("Trade", {
        id: {
          type: DataTypes.INT,
          allowNull: false,
        },
        tcmID_giver: {
          type: DataTypes.INT,
          allowNull: false,
        },
        tcmID_taker: {
          type: DataTypes.INT,
          allowNull: true,
        },
        cookie_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cookie_amount: {
            type: DataTypes.INT,
            allowNull: false,
        }
      });
    
      return trade;
    };