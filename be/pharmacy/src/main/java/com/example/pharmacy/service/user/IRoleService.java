package com.example.pharmacy.service.user;



import com.example.pharmacy.entity.user.Role;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName (String name);
}
