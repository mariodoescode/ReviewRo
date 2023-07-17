package com.codecool.reviewer.service;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class UserService {

    UserRepository userRepository;

    PasswordEncoder passwordEncoder;


    @Autowired
    public UserService (UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<AppUser> getAllUsers() {
        return userRepository.findAll();
    }

    public void makeUserPremium(String username) {
        AppUser appUser = userRepository.findAppUserByUsername(username);
        appUser.toggleIsPremium();
        userRepository.save(appUser);
    }

    public AppUser findUserByUsername(String username) {
        return userRepository.findAppUserByUsername(username);
    }
}
