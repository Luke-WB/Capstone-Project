package com.gestione.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestione.auth.entity.ERole;
import com.gestione.auth.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
