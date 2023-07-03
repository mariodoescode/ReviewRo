package com.codecool.reviewer.service;

import com.codecool.reviewer.dto.ReviewDTO;
import com.codecool.reviewer.entity.Review;
import com.codecool.reviewer.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    ReviewRepository reviewRepository;


    @Autowired
    public ReviewService (ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public void addReview(ReviewDTO reviewDTO) {
        reviewRepository.save(new Review(
                reviewDTO.getId(),
                reviewDTO.getMessage(),
                reviewDTO.getRating(),
                reviewDTO.getProduct(),
                reviewDTO.getAppUser()
        ));
    }
}
