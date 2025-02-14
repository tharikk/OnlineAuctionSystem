package com.MyFirstApp.WebApp.service;
// import java.util.ArrayList;
// import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyFirstApp.WebApp.Repository.productsRepo;
import com.MyFirstApp.WebApp.modal.Products;

@Service
public class ProductService {
    

    @Autowired
    productsRepo pr;

    // List<Products> product = new ArrayList<>(Arrays.asList(
    //     new Products(001, "Lenovo_LOQ", 66500),
    //     new Products(002, "Asus_ROG", 88900),
    //     new Products(003, "Acer_AGL", 59000)
    // ));


    public List <Products> getProducts(){
        return pr.findAll();
    }

    public Products getProductById(int ProductId){

        return pr.findById(ProductId).orElse(new Products());
        // return product.stream()
        // .filter(p -> p.getProductId() == ProductId)
        // .findFirst().get();
    }

    // public Products getProductByName(String ProductName){
    //     return product.stream()
    //     .filter(p -> p.getProductName() == ProductName)
    //     .findFirst().get();
    // }

    public void addProduct(Products prod){
        pr.save(prod);
    }

    public void updateProduct(Products prod){

        // int index = 0;

        // for(int i = 0; i < product.size(); i++){
        //     if(product.get(i).getProductId() == prod.getProductId()){
        //         index = i;
        //     }
        // }

        pr.save(prod);

    }


    public void DeleteProduct(int productId){

        // for(int i = 0; i < product.size(); i++){
        //     if(product.get(i).getProductId() == productId){
        //         product.remove(i);
        //         break;
        //     }
        // }

        pr.deleteById(productId);

    }

}
