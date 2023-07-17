package com.codecool.reviewer.controller;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.payload.request.SignUpRequest;
import com.codecool.reviewer.payload.response.MessageResponse;

import com.codecool.reviewer.repository.UserRepository;
import com.codecool.reviewer.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;





@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    public static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    TokenService tokenService;
    UserRepository userRepository;

    PasswordEncoder encoder;


    public AuthController(TokenService tokenService, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
        this.encoder = passwordEncoder;
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Validated @RequestBody SignUpRequest signupRequest) {
        System.out.println("hello register " + signupRequest);
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username already taken"));
        }
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email already taken"));
        }
        System.out.println(signupRequest.getPassword());
        AppUser appUser = new AppUser(signupRequest.getUsername(),
                encoder.encode(signupRequest.getPassword()),signupRequest.getEmail());
        appUser.setRoles("user");
        userRepository.save(appUser);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/token")
    public String token(Authentication authentication) {
        System.out.println("coming here " + authentication);
        LOG.debug("Token requested for user: '{}'", authentication.getName());
        System.out.println(authentication.getAuthorities());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Token generated {}", token);
        System.out.println(token);
        return token;
    }
}
