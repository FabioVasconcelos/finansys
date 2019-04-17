import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 2, name: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 3, name: 'Moradia', description: 'Pagamentos de Contas da casa'}
        ];

        return {categories}
    }
}