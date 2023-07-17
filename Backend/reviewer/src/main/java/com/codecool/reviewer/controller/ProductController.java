package com.codecool.reviewer.controller;


import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.entity.Product;
import com.codecool.reviewer.entity.Review;
import com.codecool.reviewer.payload.request.ReviewRequest;
import com.codecool.reviewer.payload.response.MessageResponse;
import com.codecool.reviewer.service.ProductService;
import com.codecool.reviewer.service.ReviewService;
import com.codecool.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ProductController {

    ProductService productService;
    ReviewService reviewService;
    UserService userService;


    @Autowired
    public ProductController(ProductService productService, ReviewService reviewService, UserService userService) {
        this.productService = productService;
        this.reviewService = reviewService;
        this.userService = userService;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/product/{product_id}")
    public Product getProduct(@PathVariable String product_id) {
        return productService.findProductById(product_id);
    }

    @PostMapping("/product/add_review/{username}/{product_id}")
    public ResponseEntity<MessageResponse> addReview(@RequestBody ReviewRequest review,@PathVariable String product_id, @PathVariable String username) {
        System.out.println(review.getMessage() + review.getRating() + product_id + username);
        Product product = productService.findProductById(product_id);
        AppUser appUser = userService.findUserByUsername(username);
        Review review1 = new Review(review.getMessage(), review.getRating(), product, appUser);
        reviewService.addReview(review1);
        return ResponseEntity.ok(new MessageResponse("Review added succesfuly."));
    }

    @GetMapping("/product/reviews/{product_id}")
    public List<Review> getReviewsForProduct(@PathVariable String product_id) {
        return reviewService.findReviewsByProductId(product_id);
    }
}
