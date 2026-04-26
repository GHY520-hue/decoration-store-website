package com.decoration.materials.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.decoration.materials.entity.Project;
import com.decoration.materials.mapper.ProjectMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService extends ServiceImpl<ProjectMapper, Project> {
    
    public List<Project> getAllProjects() {
        QueryWrapper<Project> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("create_time");
        return this.list(queryWrapper);
    }
    
    public Project getProjectById(Long id) {
        return this.getById(id);
    }
    
    public Project createProject(Project project) {
        this.save(project);
        return project;
    }
    
    public boolean updateProject(Long id, Project project) {
        project.setId(id);
        return this.updateById(project);
    }
    
    public boolean deleteProject(Long id) {
        return this.removeById(id);
    }
}
