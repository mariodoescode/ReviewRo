package com.codecool.reviewer.controller;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.payload.response.MessageResponse;
import com.codecool.reviewer.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    public static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    UserService userService;

    @Autowired
    public UserController (UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{username}")
    public String getUserDetails(@PathVariable String username) {
        System.out.println(username);
        return username;
    }

    @PreAuthorize("hasAuthority('SCOPE_admin')")
    @GetMapping("/users")
    public List<AppUser> getAllUsers(Principal principal) {
        System.out.println(principal);
        LOG.debug("error in getAllUsers");
        return userService.getAllUsers();
    }

    @GetMapping("/user/{username}/premium")
    public ResponseEntity<?> premiumAccount(@PathVariable String username) {
        userService.makeUserPremium(username);
        return ResponseEntity.ok(new MessageResponse("User " + username + " is now premium"));
    }
}
