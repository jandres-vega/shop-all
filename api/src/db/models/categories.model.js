const { DataTypes, Model } = require('sequelize');

const categoriesSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        unique: true,
    },
    name_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
};

class Categories extends Model {
    static associated(models) {
        this.hasMany(models.Products, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
        this.hasMany(models.SubCategory, {
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
    Categories,
    categoriesSchema,
};
