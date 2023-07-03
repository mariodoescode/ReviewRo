package com.codecool.reviewer.repository;

import com.codecool.reviewer.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
