import {InMemoryDbService} from "angular-in-memory-web-api";
import {Category} from "./shared/category.model";
export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 2, name: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 3, name: 'Moradia', description: 'Pagamentos de Contas da casa'}
        ];

        return {categories}
    }
}