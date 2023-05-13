package com.gestione.auth.runner;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.gestione.auth.entity.ERole;
import com.gestione.auth.entity.Role;
import com.gestione.auth.repository.RoleRepository;
import com.gestione.auth.repository.UserRepository;
import com.gestione.auth.service.AuthService;

@Component
public class AuthRunner implements ApplicationRunner {

    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthService authService;

    private Set<Role> adminRole;
    private Set<Role> userRole;

    @Override
    public void run(ApplicationArguments args) throws Exception {
	System.out.println("Run...");

	if (roleRepository.findAll().isEmpty()) {
	    setRoleDefault();
	}
    }

    private void setRoleDefault() {
	Role admin = new Role();
	admin.setRoleName(ERole.ROLE_ADMIN);
	roleRepository.save(admin);

	Role user = new Role();
	user.setRoleName(ERole.ROLE_USER);
	roleRepository.save(user);

	adminRole = new HashSet<Role>();
	adminRole.add(admin);
	adminRole.add(user);

	userRole = new HashSet<Role>();
	userRole.add(user);
    }

}
