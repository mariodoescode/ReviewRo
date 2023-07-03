package com.codecool.reviewer.service;

import com.codecool.reviewer.dto.UserDTO;
import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    UserRepository userRepository;

    PasswordEncoder passwordEncoder;


    @Autowired
    public UserService (UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String addUser(UserDTO userDTO) {

        AppUser appUser = new AppUser(
                userDTO.getId(),
                userDTO.getEmail(),
                passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getUsername(),
                userDTO.getAuthorities()
        );
        userRepository.save(appUser);

        return appUser.getUsername();
    }



}
