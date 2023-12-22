const express = require('express')
const cors = require('cors')
const User = require('./config')
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
    try {
      // Fetch product details from Firestore
      const querySnapshot = await User.getDocs(User.productsCollection);
  
      // Extract and format product details
      const products = [];
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        const productDetails = {
            productImage: productData.product_image,
          productName: productData.product_name,
          productPrice: productData.product_price,
        };
        products.push(productDetails);
      });
      if(products.length > 0){
        console.log('products fetched successfully.');
      }
      else {
        console.log('products not fetched successfully.');
      }
      res.json(products);
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(PORT, ()=>console.log('Up and running on ${PORT}...'))