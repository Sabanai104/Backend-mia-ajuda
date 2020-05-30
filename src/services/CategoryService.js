const CategoryRepository = require('../repository/CategoryRepository');

class CategoryService {
    constructor() {
        this.CategoryRepository = new CategoryRepository();
    }

    async getCategoryByid(id) {
        
        const Category = await this.CategoryRepository.getById(id);
        
        
        if (!Category) {
            throw 'Categoria não encontrada';
        }

        return Category;
    }

    async getCategoryList(id) {
        const Categorylist = await this.CategoryRepository.list(id);
        if (!Categorylist) {
            throw 'Categorias não encontrada';
        }

        return Categorylist;
    }
}

module.exports = CategoryService;
