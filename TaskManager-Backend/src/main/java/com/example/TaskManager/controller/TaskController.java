package com.example.TaskManager.controller;

import com.example.TaskManager.model.Task;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController
{
    private List<Task> tasks = new ArrayList<>();
    private Long idCounter = 1L;

    @GetMapping
    public  List<Task> getTasks()
    {
        return tasks;
    }
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            throw new RuntimeException("Title cannot be empty");

        }
        task.setId(idCounter++);
        task.setCompleted(false);
        task.setCreatedAt(LocalDateTime.now());
        tasks.add(task);
        return task;
    }


    @PatchMapping("/{id}")
    public Task updateTask(@PathVariable Long id)

    {
       for (Task task : tasks) {
           if (task.getId().equals(id)) {
               task.setCompleted(!task.isCompleted());
               return task;
           }
       }
         throw new RuntimeException("Task not found");
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id)
    {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}
