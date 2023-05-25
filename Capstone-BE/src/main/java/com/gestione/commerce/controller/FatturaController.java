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

import com.gestione.commerce.model.Fattura;
import com.gestione.commerce.service.FatturaService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/fattura")
public class FatturaController {

    @Autowired
    FatturaService fatturaService;

    @GetMapping
    public ResponseEntity<?> findAllFattura() {
	return new ResponseEntity<>(fatturaService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findFatturaById(@PathVariable Long id) {
	return new ResponseEntity<>(fatturaService.FindFatturaById(id), HttpStatus.FOUND);
    }

    @PostMapping("/ordine/{idOrdine}")
    public ResponseEntity<?> addNewFattura(@PathVariable Long idOrdine) {
	return new ResponseEntity<String>(fatturaService.postFattura(idOrdine), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFattura(@RequestBody Fattura f) {
	return new ResponseEntity<String>(fatturaService.updateFattura(f), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteFattura(@RequestBody Fattura f) {
	return new ResponseEntity<>(fatturaService.deleteFattura(f), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFatturaById(@PathVariable Long id) {
	return new ResponseEntity<>(fatturaService.deleteFattura(id), HttpStatus.OK);
    }
}
