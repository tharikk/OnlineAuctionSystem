package com.example.UserManager.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class Users {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int UserId;
    private String UserName;
    private String UserAccess;
    private String AuctionId;
    private String phone;
    private String address;
    private int bids;


    public Users(){};


}
