import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [
            {id: 1, name: "Macera"},
            {id: 1, name: "Romantik"},
            {id: 1, name: "Dram"},
            {id: 1, name: "Bilim Kurgu"},
        ];
    }

    getCategories(): Category[] {
        return this.categories;
    }
}