package com.codecool.reviewer.payload.response;

import com.codecool.reviewer.entity.AppUser;
import com.codecool.reviewer.entity.Review;
import lombok.*;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserData {

    List<Review> reviews;
    AppUser user;

}
