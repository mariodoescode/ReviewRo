package com.codecool.reviewer.repository;

import com.codecool.reviewer.entity.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData, Long> {

    Optional<FileData> findByName(String fileName);

    Optional<FileData> findAllByUserId(Long id);

    FileData findByUserId(Long id);
}
