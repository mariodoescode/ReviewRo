package com.codecool.reviewer;

import com.codecool.reviewer.config.RsaKeyProperties;

import com.codecool.reviewer.service.InitService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class ReviewerApplication {

	@Autowired
	InitService initService;

	public static void main(String[] args) {
		SpringApplication.run(ReviewerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer configurer () {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(@NotNull CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("*");
			}
		};
	}

	@Bean
	CommandLineRunner commandLineRunner(){
		return args -> {
			initService.seedDatabase();
		};
	}


}
