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

import com.gestione.commerce.model.Utente;
import com.gestione.commerce.service.UtenteService;

@RestController
@RequestMapping("/api/utente")
public class UtenteController {

    @Autowired
    UtenteService utenteService;

    @GetMapping
    public ResponseEntity<?> findAllUtente() {
	return new ResponseEntity<>(utenteService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findUtenteById(@PathVariable Long id) {
	return new ResponseEntity<>(utenteService.FindUtenteById(id), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<?> addNewUtente(@RequestBody Utente u) {
	return new ResponseEntity<String>(utenteService.postUtente(u), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUtente(@RequestBody Utente u) {
	return new ResponseEntity<String>(utenteService.updateUtente(u), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUtente(@RequestBody Utente u) {
	return new ResponseEntity<>(utenteService.deleteUtente(u), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUtenteById(@PathVariable Long id) {
	return new ResponseEntity<>(utenteService.deleteUtente(id), HttpStatus.OK);
    }
}
