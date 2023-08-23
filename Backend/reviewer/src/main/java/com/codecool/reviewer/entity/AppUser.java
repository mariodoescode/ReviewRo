package com.codecool.reviewer.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String username;
    private boolean isPremium;
    private String authorities;
    private String description;

    public AppUser(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.isPremium = false;
        this.description = "";
    }



    public void setRoles(String roles) {
        this.authorities = roles;
    }

    public void toggleIsPremium() {
        isPremium = !isPremium;
    }
}
