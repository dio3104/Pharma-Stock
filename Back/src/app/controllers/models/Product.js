import Sequlize, { Model } from "sequelize";

class Product extends Model {
    static init (sequelize) {
        super.init({
            name: Sequelize.STRING
        })
    }    
}