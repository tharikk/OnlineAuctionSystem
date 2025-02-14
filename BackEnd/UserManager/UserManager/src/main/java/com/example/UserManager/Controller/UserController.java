package com.example.UserManager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.UserManager.Service.UsersService;
import com.example.UserManager.modal.Users;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {
    
    @Autowired
    UsersService service;

    @GetMapping("/Users")
    public List<Users> getUsersAndPasswords(){

        return service.getUsersAndPasswords();

    }

    @DeleteMapping("/Users/{userid}")
    public void deleteUserById(@PathVariable int userid){

        service.deleteUserById(userid);

    }


}
