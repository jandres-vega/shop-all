const { DataTypes, Model } = require('sequelize');

const productSchema = {
    name_product: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    freeShopping: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
};

class Products extends Model {
    static associated(models) {
        this.belongsTo(models.SubCategory, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
        };
    }
}

module.exports = {
    productSchema,
    Products,
};
