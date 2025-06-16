let products = [
    
]
class ProductsContoller {

    //Listagem dos produtos
    index(req, res) {
        return res.json(products);
    }

    //Recupera um produto
    show(req, res) {
        const id = parseInt(req.params.id);
        const product = products.find(item => item.id === id);
        const status = product ? 200 : 404;}

    //Adiciona um produto
    create(req, res) { 
        const{ name, site } = req.body;
        const Id = products[products.length - 1].id + 1;

        const newproduct = { id, name, site };
        products.push(newproduct)

        returnres.status(201).json(newproduct);
    }

    //Atualiza um produto
    update(req, res) { 
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = products.findIndex(item => item.id ===id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0){
            products[index] = {id: parseInt(id), name, site }
        }

        return res.status(status).json(products[index]);
    }    
    //Exclui um produto
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = products.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0){
            products.splice(index, 1);
        }

        return res.status(status).json();
    }
}

export default new ProductsContoller();