package com.example.UserManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.UserManager.Repository.UsersRepo;
import com.example.UserManager.modal.Users;

@Service
public class UsersService {
    
    @Autowired
    UsersRepo repo;

    public List<Users> getUsersAndPasswords(){
        return repo.findAll();
    }

    public void addUsersAndPasswords(Users user){
        repo.save(user);
    }

    public void deleteUserById(int userid){
        repo.deleteById(userid);
    }
}
