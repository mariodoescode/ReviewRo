package com.codecool.reviewer.payload.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReviewRequest {
    @NotNull
    private String message;
    @NotNull
    private float rating;
}
