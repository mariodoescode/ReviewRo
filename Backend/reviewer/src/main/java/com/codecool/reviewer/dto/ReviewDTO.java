package com.codecool.reviewer.dto;


import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReviewDTO {

    private Long id;
    private String message;
    private float rating;
    private Product product;
    private AppUser appUser;

}
