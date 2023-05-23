package com.gestione.commerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Carrello;
import com.gestione.commerce.repository.CarrelloDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CarrelloService {

    @Autowired
    private CarrelloDao carrelloDao;

    public String postCarrello(Carrello c) {
	carrelloDao.save(c);
	return "Carrello correctly persisted on Database!";
    }

    public String updateCarrello(Carrello c) {
	if (carrelloDao.existsById(c.getId())) {
	    carrelloDao.save(c);
	    return "Carrello correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + c.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteCarrello(Carrello c) {
	if (carrelloDao.existsById(c.getId())) {
	    carrelloDao.delete(c);
	    return "Carrello correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + c.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteCarrello(Long id) {
	if (carrelloDao.existsById(id)) {
	    carrelloDao.deleteById(id);
	    return "Carrello correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Carrello FindCarrelloById(Long id) {
	if (carrelloDao.existsById(id)) {
	    return carrelloDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Carrello> findAll() {
	return carrelloDao.findAll();
    }

}
