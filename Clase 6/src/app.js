const express = require('express');
const ProductManager = require('./productManager');

const app = express();
const port = 8080; // Cambiado a 8080

const productManager = new ProductManager('./src/productos.json');

app.get('/products', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.getProducts();

    if (limit) {
      res.json(products.slice(0, parseInt(limit)));
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/products/:pid', async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const product = products.find(p => p.id === req.params.pid);

    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
