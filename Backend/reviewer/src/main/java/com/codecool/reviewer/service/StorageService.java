package com.codecool.reviewer.service;

import com.codecool.reviewer.entity.FileData;
import com.codecool.reviewer.repository.FileDataRepository;
import com.codecool.reviewer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class StorageService {

    FileDataRepository fileDataRepository;
    UserRepository userRepository;
    String FOLDER_PATH = "C:\\Users\\crist\\Desktop\\Codecool\\Advanced\\Images\\";


    @Autowired
    public StorageService(FileDataRepository fileDataRepository, UserRepository userRepository) {
        this.fileDataRepository = fileDataRepository;
        this.userRepository = userRepository;
    }

    public String uploadImageToFileSystem(MultipartFile file, String username) throws IOException {
        String filePath = FOLDER_PATH + file.getOriginalFilename();
        if (fileDataRepository.findByUserId(userRepository.findByUsername(username).get().getId()) != null) {
            FileData fileData = fileDataRepository.findByUserId(userRepository.findByUsername(username).get().getId());
            fileData.setName(file.getOriginalFilename());
            fileData.setType(file.getContentType());
            fileData.setFilePath(filePath);
            fileDataRepository.save(fileData);
        } else {
            fileDataRepository.save(FileData.builder()
                    .name(file.getOriginalFilename())
                    .type(file.getContentType())
                    .user(userRepository.findAppUserByUsername(username))
                    .filePath(filePath).build());
        }
        file.transferTo(new File(filePath));
        return "file uploaded succesfully : " + filePath;
    }

    public byte[] downloadImageFromFileSystem(String userName) throws IOException {
        Long id = userRepository.findByUsername(userName).get().getId();
        Optional<FileData> fileData = fileDataRepository.findAllByUserId(id);
        String filePath=fileData.get().getFilePath();
        return Files.readAllBytes(new File(filePath).toPath());
    }

    public void addPlaceholderImage(Long id) {
        String filePath = FOLDER_PATH + "placeholder.jpg";
        fileDataRepository.save(FileData.builder()
                .name("placeholder.jpg")
                .type("image/jpg")
                .user(userRepository.findAppUserById(id))
                .filePath(filePath).build());
    }
}
