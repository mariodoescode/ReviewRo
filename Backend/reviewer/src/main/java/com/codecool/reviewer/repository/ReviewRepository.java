package com.codecool.reviewer.repository;

import com.codecool.reviewer.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByProductId(Long product_id);


    List<Review> findAllByAppUser_Id(Long id);
}
