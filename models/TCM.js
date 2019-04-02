module.exports = sequelize, DataTypes => {
    const TCM = sequelize.define("TCM", {
        id: {
          type: DataTypes.INT,
          allowNull: false,
        },
        sum_ID: {
          type: DataTypes.INT,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        smores: {
            type: DataTypes.INT,
            allowNull: true,
        },
        thin_mint:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        shortbread:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        peanut_butter_sandwich:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        lemonades:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        thanks_a_lot:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        samoas:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        caramel_chocolate_chip:  {
            type: DataTypes.INT,
            allowNull: true,
        },
        peanut_butter_patties:  {
            type: DataTypes.INT,
            allowNull: true,
        }
      });

      TCM.associate = function(models) {
        // We're saying that a TCM should belong to an SUM
        // A TCM can't be created without a SUM due to the foreign key constraint
        TCM.belongsTo(models.SUM, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
      return TCM;
    };