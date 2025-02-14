package com.MyFirstApp.WebApp.modal;
// import lombok.AllArgsConstructor;
// import lombok.Data;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

// @Data 
// @AllArgsConstructor
// public class Products {

//     private int ProductId;
//     private String ProductName;
//     private int price;

// }

//we can use @AllArgsConstructor and @Data to automatically create the argument constructor and the getters and the setters or create it manually as below.
@Data
@Entity
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private int price;


    public Products(){}

    // public int getProductId(){
    //     return productId;
    // }

    // public void setProductId(int productId){
    //     this.productId = productId;
    // }

    // public String getProductName(){
    //     return productName;
    // }

    // public void setProductName(String productName){
    //     this.productName = productName;
    // }

    // public int getPrice(){
    //     return price;
    // }

    // public void setPrice(int price){
    //     this.price = price;
    // }

}