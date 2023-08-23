package com.codecool.reviewer.controller;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.payload.request.SignUpRequest;
import com.codecool.reviewer.payload.response.MessageResponse;

import com.codecool.reviewer.repository.UserRepository;
import com.codecool.reviewer.service.EmailService;
import com.codecool.reviewer.service.StorageService;
import com.codecool.reviewer.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    public static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    TokenService tokenService;
    UserRepository userRepository;
    EmailService emailService;
    PasswordEncoder encoder;
    StorageService storageService;


    public AuthController(TokenService tokenService, StorageService storageService,EmailService emailService, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
        this.encoder = passwordEncoder;
        this.emailService =emailService;
        this.storageService = storageService;
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Validated @RequestBody SignUpRequest signupRequest) throws IOException {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username already taken"));
        }
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email already taken"));
        }
        AppUser appUser = new AppUser(signupRequest.getUsername(),
                encoder.encode(signupRequest.getPassword()),signupRequest.getEmail());
        appUser.setRoles("user");
        userRepository.save(appUser);
        Long id = userRepository.findByUsername(signupRequest.getUsername()).get().getId();
        storageService.addPlaceholderImage(id);
//        emailService.sendSimpleEmail(signupRequest.getEmail(), "Reviewer registration",
//                "Your account has been created succesfuly");

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/token")
    public String token(Authentication authentication) {
        LOG.debug("Token requested for user: '{}'", authentication.getName());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Token generated {}", token);
        return token;
    }
}
