package com.gestione.commerce.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Articolo;
import com.gestione.commerce.model.Fattura;
import com.gestione.commerce.model.Ordine;
import com.gestione.commerce.repository.FatturaDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class FatturaService {
    @Autowired
    private FatturaDao fatturaDao;

    @Autowired
    private OrdineService ordineService;

    public Fattura createFattura() {
	Fattura f = new Fattura();
	fatturaDao.save(f);
	return f;
    }

    public String postFattura(Long idOrdine) {

	Ordine o = ordineService.FindOrdineById(idOrdine);
	Fattura f = new Fattura();
	f.setOrdine(o);
	List<Double> numbers = o.getCarrello().getArticoli().stream().map(Articolo::getPrezzo)
		.collect(Collectors.toList());
	Double result = numbers.stream().reduce((double) 0, (subtotal, element) -> subtotal + element);
	f.setImportoTotale(o.getPrezzoConsegna() + result);
	f.setQuantitaArticolo(o.getCarrello().getArticoli().size());
	fatturaDao.save(f);
	return "Fattura correctly persisted on Database!";
    }

    public String updateFattura(Fattura f) {
	if (fatturaDao.existsById(f.getId())) {
	    fatturaDao.save(f);
	    return "Fattura correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Fattura with ID --> " + f.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteFattura(Fattura f) {
	if (fatturaDao.existsById(f.getId())) {
	    fatturaDao.delete(f);
	    return "Fattura correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Fattura with ID --> " + f.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteFattura(Long id) {
	if (fatturaDao.existsById(id)) {
	    fatturaDao.deleteById(id);
	    return "Fattura correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Fattura with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Fattura FindFatturaById(Long id) {
	if (fatturaDao.existsById(id)) {
	    return fatturaDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Fattura with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Fattura> findAll() {
	return fatturaDao.findAll();
    }

}
