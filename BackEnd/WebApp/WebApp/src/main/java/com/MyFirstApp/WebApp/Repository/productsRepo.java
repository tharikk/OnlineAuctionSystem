package com.MyFirstApp.WebApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MyFirstApp.WebApp.modal.Products;

@Repository
public interface productsRepo extends JpaRepository<Products, Integer>{
    
}
