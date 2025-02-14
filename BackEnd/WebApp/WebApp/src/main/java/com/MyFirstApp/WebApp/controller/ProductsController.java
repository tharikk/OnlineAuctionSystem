package com.MyFirstApp.WebApp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.MyFirstApp.WebApp.modal.Products;
import com.MyFirstApp.WebApp.service.ProductService;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/api")
public class ProductsController {
    
    // ProductService ps = new ProductService(); is same as @Autowired ProductService ps;

    @Autowired
    ProductService ps;

    @GetMapping("/products")
    public List<Products> getProduct(){
        return ps.getProducts();
    }
    @GetMapping("/products/{ProductId}")
    public Products getProductById(@PathVariable int ProductId){
        return ps.getProductById(ProductId);
    }

    // @RequestMapping("/products/{ProductName}")
    // public Products getProductByName(@PathVariable String ProductName){
    //     return ps.getProductByName(ProductName);
    // }

    @PostMapping("/products")
    public void addProduct(@RequestBody Products prod){
        ps.addProduct(prod);
    }

    @PutMapping("/products")
    public void UpdateProduct(@RequestBody Products prod){
         ps.updateProduct(prod); 
    }

    @DeleteMapping("/products/{productId}")
    public void DeleteProduct(@PathVariable int productId){
        ps.DeleteProduct(productId);
    }

}
