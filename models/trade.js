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
    
      // trade.associate = function(models) {
      //   // We're saying that a TCM should belong to an SUM
      //   // A TCM can't be created without a SUM due to the foreign key constraint
      //   trade.belongsTo(models.TCM, {
      //     foreignKey: {
      //       as: 'Trades'
      //     }
      //   });
      // };
      
        // trade.belongsTo(db.TCM, {
        //   foreignKey: trade.tcmID_giver
        // });
      
      return trade;
    };