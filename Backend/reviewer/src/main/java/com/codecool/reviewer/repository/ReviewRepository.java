package com.codecool.reviewer.repository;

import com.codecool.reviewer.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
