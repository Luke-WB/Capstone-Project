package com.gestione.commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestione.commerce.model.Carrello;
import com.gestione.commerce.service.CarrelloService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/carrello")
public class CarrelloContoller {

    @Autowired
    CarrelloService carrelloService;

    @GetMapping
    public ResponseEntity<?> findAllCarrello() {
	return new ResponseEntity<>(carrelloService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCarrelloById(@PathVariable Long id) {
	return new ResponseEntity<>(carrelloService.FindCarrelloById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addNewCarrello(@RequestBody Carrello c) {
	return new ResponseEntity<String>(carrelloService.postCarrello(c), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCarrello(@RequestBody Carrello c) {
	return new ResponseEntity<String>(carrelloService.updateCarrello(c), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteCarrello(@RequestBody Carrello c) {
	return new ResponseEntity<>(carrelloService.deleteCarrello(c), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCarrelloById(@PathVariable Long id) {
	return new ResponseEntity<>(carrelloService.deleteCarrello(id), HttpStatus.OK);
    }

}
