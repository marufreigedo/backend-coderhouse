class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.products.some(p => p.code === product.code)) {
            throw new Error('El código del producto ya existe');
        }
        this.id++;
        const newProduct = { ...product, id: this.id };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }
}

const pm = new ProductManager();

console.log(pm.getProducts()); // []

const product = pm.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
});
console.log(product); 


console.log(pm.getProducts());

try {
    pm.addProduct({
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    });
} catch (e) {
    console.log(e.message); 
}

console.log(pm.getProductById(1)); 
