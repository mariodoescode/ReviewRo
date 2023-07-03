package com.codecool.reviewer.controller;


import com.codecool.reviewer.dto.ReviewDTO;
import com.codecool.reviewer.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {

    ReviewService reviewService;

    @Autowired
    public ReviewController (ReviewService reviewService) {
        this.reviewService = reviewService;
    }


    @PostMapping(value = "/review")
    public void addReview(@RequestBody ReviewDTO reviewDTO) {
        reviewService.addReview(reviewDTO);
    }

}
