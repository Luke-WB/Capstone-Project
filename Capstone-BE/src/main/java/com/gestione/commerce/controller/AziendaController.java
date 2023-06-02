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

import com.gestione.commerce.model.Azienda;
import com.gestione.commerce.service.AziendaService;

@RestController
@RequestMapping("/api/azienda")
public class AziendaController {

    @Autowired
    AziendaService aziendaService;

    @GetMapping
    public ResponseEntity<?> findAllAzienda() {
	return new ResponseEntity<>(aziendaService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findAziendaById(@PathVariable Long id) {
	return new ResponseEntity<>(aziendaService.FindAziendaById(id), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<?> addNewAzienda(@RequestBody Azienda a) {
	return new ResponseEntity<String>(aziendaService.postAzienda(a), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAzienda(@RequestBody Azienda a) {
	return new ResponseEntity<String>(aziendaService.updateAzienda(a), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteAzienda(@RequestBody Azienda a) {
	return new ResponseEntity<>(aziendaService.deleteAzienda(a), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAziendaById(@PathVariable Long id) {
	return new ResponseEntity<>(aziendaService.deleteAzienda(id), HttpStatus.OK);
    }
}
