package com.example.TaskManager.model;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Task {
    private Long id;
    private String title;
    private  boolean completed;
    private LocalDateTime createdAt;
}
