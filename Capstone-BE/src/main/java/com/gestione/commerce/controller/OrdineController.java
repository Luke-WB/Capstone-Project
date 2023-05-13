package com.gestione.commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestione.commerce.model.Ordine;
import com.gestione.commerce.service.OrdineService;

@RestController
@RequestMapping("/api/ordine")
public class OrdineController {

    @Autowired
    OrdineService ordineService;

    @GetMapping
    public ResponseEntity<?> findAllOrdine() {
	return new ResponseEntity<>(ordineService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findOrdineById(@PathVariable Long id) {
	return new ResponseEntity<>(ordineService.FindOrdineById(id), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<?> addNewOrdine(@RequestBody Ordine o) {
	return new ResponseEntity<String>(ordineService.postOrdine(o), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrdine(@RequestBody Ordine o) {
	return new ResponseEntity<String>(ordineService.updateOrdine(o), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteOrdine(@RequestBody Ordine o) {
	return new ResponseEntity<>(ordineService.deleteOrdine(o), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrdineById(@PathVariable Long id) {
	return new ResponseEntity<>(ordineService.deleteOrdine(id), HttpStatus.OK);
    }
}
