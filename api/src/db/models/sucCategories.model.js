const { DataTypes, Model } = require('sequelize');

const subCategoriesSchema = {
    name_subcategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_subCategory: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
};

class SubCategory extends Model {
    static association(models) {
        this.belongsTo(models.Categories, {
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

module.exports = { subCategoriesSchema, SubCategory };
