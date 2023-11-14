    class ProductManager {
        constructor() {
            this.products = [];
            this.currentId = 1;
        }

        getProducts() {
            return this.products;
        }

        addProduct(product) {
            // Validar que el id sea único antes de agregar el producto
            if (this.products.some(p => p.id === this.currentId)) {
                throw new Error('Error al generar ID único.');
            }

            product.id = this.currentId++;
            this.products.push(product);
        }

        getProductById(id) {
            const product = this.products.find(p => p.id === id);
            if (!product) {
                throw new Error('Producto no encontrado');
            }
            return product;
        }

        updateProduct(id, newProductData) {
            // Verificar que el producto existe antes de intentar actualizarlo
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error('Producto no encontrado');
            }

            // Mantiene el id original
            newProductData.id = id;
            
        
            this.products = this.products.map(p => (p.id === id ? newProductData : p));
        }

        deleteProduct(id) {
        
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error('Producto no encontrado');
            }

        
            this.products = this.products.filter(p => p.id !== id);
        }
    }
    // Crear una instancia de la clase “ProductManager”
    const pm = new ProductManager();


    console.log(pm.getProducts()); // []

    // Llamar al metodo “addProduct”:
    pm.addProduct({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    });

    // Llamar el metodo “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
    console.log(pm.getProducts());

    // Llamar al metodo “getProductById” y se corroborará que devuelva el producto con el id especificado
    console.log(pm.getProductById(1));

    // Llamar al metodo “updateProduct” y se intentará cambiar un campo de algún producto
    pm.updateProduct(1, {
        title: "producto prueba actualizado",
        description: "Este es un producto prueba actualizado",
        price: 300,
        thumbnail: "Con imagen",
        code: "abc1234",
        stock: 30
    });
    console.log(pm.getProductById(1));


    pm.deleteProduct(1);
    console.log(pm.getProducts());
