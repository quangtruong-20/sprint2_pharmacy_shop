package com.example.pharmacy.service.user.impl;

import com.example.pharmacy.entity.user.Role;
import com.example.pharmacy.repository.user.IRoleRepository;
import com.example.pharmacy.service.user.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Optional<Role> findByName(String name) {
        return roleRepository.findWithName(name);
    }
}
