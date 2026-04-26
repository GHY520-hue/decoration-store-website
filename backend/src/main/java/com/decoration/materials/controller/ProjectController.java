package com.decoration.materials.controller;

import com.decoration.materials.common.Result;
import com.decoration.materials.entity.Project;
import com.decoration.materials.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectController {
    
    @Autowired
    private ProjectService projectService;
    
    @GetMapping
    public Result<List<Project>> getProjects() {
        List<Project> projects = projectService.getAllProjects();
        return Result.success(projects);
    }
    
    @GetMapping("/{id}")
    public Result<Project> getProject(@PathVariable Long id) {
        Project project = projectService.getProjectById(id);
        if (project == null) {
            return Result.error(404, "案例不存在");
        }
        return Result.success(project);
    }
    
    @PostMapping
    public Result<Project> createProject(@RequestBody Project project) {
        Project createdProject = projectService.createProject(project);
        return Result.success(createdProject);
    }
    
    @PutMapping("/{id}")
    public Result<Void> updateProject(@PathVariable Long id, @RequestBody Project project) {
        boolean success = projectService.updateProject(id, project);
        if (!success) {
            return Result.error(404, "案例不存在");
        }
        return Result.success();
    }
    
    @DeleteMapping("/{id}")
    public Result<Void> deleteProject(@PathVariable Long id) {
        boolean success = projectService.deleteProject(id);
        if (!success) {
            return Result.error(404, "案例不存在");
        }
        return Result.success();
    }
}
