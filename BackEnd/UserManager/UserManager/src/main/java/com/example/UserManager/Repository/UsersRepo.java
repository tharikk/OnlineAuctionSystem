package com.example.UserManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.UserManager.modal.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, Integer>{
    
}
