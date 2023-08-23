package com.codecool.reviewer.controller;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.entity.Review;
import com.codecool.reviewer.payload.response.MessageResponse;
import com.codecool.reviewer.payload.response.UserData;
import com.codecool.reviewer.service.StorageService;
import com.codecool.reviewer.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    public static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    UserService userService;
    StorageService service;

    @Autowired
    public UserController (UserService userService, StorageService service) {
        this.service = service;
        this.userService = userService;
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<?> getUserDetails(@PathVariable String username) {
        UserData userData = userService.getUserData(username);
        return ResponseEntity.status(HttpStatus.OK).body(userData);

    }

    @PreAuthorize("hasAuthority('SCOPE_admin')")
    @GetMapping("/users")
    public List<AppUser> getAllUsers(Principal principal) {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{username}/premium")
    public ResponseEntity<?> premiumAccount(@PathVariable String username) {
        userService.makeUserPremium(username);
        return ResponseEntity.ok(new MessageResponse("User " + username + " is now premium"));
    }

    @PostMapping("/upload-image/{username}")
    public ResponseEntity<?> uploadImageToFileSystem(@PathVariable String username,
                                                    @RequestParam("image")MultipartFile file) throws IOException {
        String uploadImage = service.uploadImageToFileSystem(file, username);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping("/download-image/{username}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String username) throws IOException {
        byte[] imageData = service.downloadImageFromFileSystem(username);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @PostMapping("/update-description/{username}")
    public String updateDescription(@PathVariable String username,
                                               @RequestParam("description") String description) {
        userService.updateDescription(description, username);
        return "ok";
    }


}
