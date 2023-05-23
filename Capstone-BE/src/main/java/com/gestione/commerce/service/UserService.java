package com.gestione.commerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestione.auth.entity.User;
import com.gestione.auth.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String updateUser(User u) {
	if (userRepository.existsById(u.getId())) {
	    userRepository.save(u);
	    return "User correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("User with ID --> " + u.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteUser(User u) {
	if (userRepository.existsById(u.getId())) {
	    userRepository.delete(u);
	    return "User correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("User with ID --> " + u.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteUser(Long id) {
	if (userRepository.existsById(id)) {
	    userRepository.deleteById(id);
	    return "User correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("User with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public User FindUserById(Long id) {
	if (userRepository.existsById(id)) {
	    return userRepository.findById(id).get();
	} else {
	    throw new EntityNotFoundException("User with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<User> findAll() {
	return userRepository.findAll();
    }
}
