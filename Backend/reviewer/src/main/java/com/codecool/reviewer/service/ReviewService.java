package com.codecool.reviewer.service;

import com.codecool.reviewer.entity.Review;
import com.codecool.reviewer.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    ReviewRepository reviewRepository;


    @Autowired
    public ReviewService (ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


    public void addReview(Review review) {
        reviewRepository.save(review);
    }

    public List<Review> findReviewsByProductId(String productId) {
        return reviewRepository.findAllByProductId(Long.valueOf(productId));
    }
}
