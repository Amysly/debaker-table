import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import mongoose from 'mongoose';

// route to GET all products
//public route
router.get('/', async (req, res) => {
   try{
    const products = await Product.find();
    res.json(products)
   }catch(err){
    console.log(err)
    next(err)

   }
});

// route to GET product/:id
//public route
router.get('/:id', async (req, res) => {
   try{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400);
        throw new Error('Invalid product ID')
    }
    const product = await Product.findById(id);
    if(!product){
        res.status(404);
        throw new Error('Product not found')
    }
    res.json(product)
   }catch(err){
    console.log(err)
    next(err)

   }
});

// route to POST a new product 
//private route
router.post('/', async (req, res) => {
    try{
        const {name, price, description} = req.body;
        if(!name || !price || !description){
            res.status(400);
            throw new Error('Please provide all required fields')
        }
        const product = new Product({
        name,
         price, 
         description
        });
        const savedProduct = await product.save()
     res.status(201).json(savedProduct);
    }catch(err){
        console.log(err)
        next(err)
    }
})
// route to DELETE product/:id
//public route
router.delete('/:id', async (req, res) => {
   try{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400);
        throw new Error('Invalid product ID')
    }
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        res.status(404);
        throw new Error('Product not found')
    }
    res.json({message: 'Product deleted successfully'})
   }catch(err){
    console.log(err)
    next(err)

   }
});

// route to PUT product/:id
//public route
router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {name, price, description} = req.body;
        if(!name || !price || !description){
            res.status(400);
            throw new Error('Please provide all required fields')
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Invalid product ID')
        }
        const product = await Product.findByIdAndUpdate(id, 
            {name,
             price, 
             description},
             {new: true, runValidators: true});
        if(!product){
            res.status(404);
            throw new Error('Product not found')
        }
        res.json(product)
    }catch(err){
        console.log(err)
        next(err)
    }
}) 

export default router;