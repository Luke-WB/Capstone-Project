package com.gestione.commerce.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Corriere;
import com.gestione.commerce.repository.CorriereDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CorriereService {
    @Autowired
    private CorriereDao corriereDao;

    @Autowired
    @Qualifier("FakeCorriere")
    private ObjectProvider<Corriere> objCorriere;

    public void createCorriere() {
	Corriere c = objCorriere.getObject();
	corriereDao.save(c);
    }

    public String updateCorriere(Corriere c) {
	if (corriereDao.existsById(c.getId())) {
	    corriereDao.save(c);
	    return "Corriere correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Corriere with ID --> " + c.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteCorriere(Corriere c) {
	if (corriereDao.existsById(c.getId())) {
	    corriereDao.delete(c);
	    return "Corriere correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Corriere with ID --> " + c.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteCorriere(Long id) {
	if (corriereDao.existsById(id)) {
	    corriereDao.deleteById(id);
	    return "Corriere correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Corriere with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Corriere FindCorriereById(Long id) {
	if (corriereDao.existsById(id)) {
	    return corriereDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Corriere with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Corriere> findAll() {
	return corriereDao.findAll();
    }
}
