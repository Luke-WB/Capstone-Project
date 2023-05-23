package com.gestione.commerce.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Fattura;
import com.gestione.commerce.repository.FatturaDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class FatturaService {
    @Autowired
    private FatturaDao fatturaDao;

    @Autowired
    @Qualifier("FakeFattura")
    private ObjectProvider<Fattura> objFattura;

    public Fattura createFattura() {
	Fattura f = objFattura.getObject();
	fatturaDao.save(f);
	return f;
    }

    public String postFattura(Fattura f) {
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
