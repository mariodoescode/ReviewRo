package com.codecool.reviewer.service;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.entity.Review;
import com.codecool.reviewer.payload.response.UserData;
import com.codecool.reviewer.repository.ReviewRepository;
import com.codecool.reviewer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    UserRepository userRepository;

    PasswordEncoder passwordEncoder;
    ReviewRepository reviewRepository;


    @Autowired
    public UserService (UserRepository userRepository, ReviewRepository reviewRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.reviewRepository = reviewRepository;
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


    public UserData getUserData(String username) {
        AppUser user = userRepository.findAppUserByUsername(username);
        List<Review> reviews = reviewRepository.findAllByAppUser_Id(user.getId());
        return new UserData(reviews,user);
    }

    public void updateDescription(String description, String username) {
        AppUser user = userRepository.findAppUserByUsername(username);
        user.setDescription(description);
        userRepository.save(user);
    }
}
