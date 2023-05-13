package com.gestione.commerce.service;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Articolo;
import com.gestione.commerce.model.Ordine;
import com.gestione.commerce.repository.ArticoloDao;
import com.github.javafaker.Faker;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ArticoloService {
    @Autowired
    private ArticoloDao articoloDao;
    @Autowired
    private OrdineService ordineService;

    @Autowired
    @Qualifier("FakeArticolo")
    private ObjectProvider<Articolo> objArticolo;

    private Faker fake = Faker.instance(new Locale("it-IT"));

    public void createArticolo() {
	Articolo a = objArticolo.getObject();
	List<Ordine> listaOrdini = ordineService.findAll();
	Integer random = fake.number().numberBetween(0, listaOrdini.size() - 1);
	Ordine o = listaOrdini.get(random);
	a.setOrdine(o);
	articoloDao.save(a);
    }

    public String postArticolo(Articolo a) {
	articoloDao.save(a);
	return "Articolo correctly persisted on Database!";
    }

    public String updateArticolo(Articolo a) {
	if (articoloDao.existsById(a.getId())) {
	    articoloDao.save(a);
	    return "Articolo correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + a.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteArticolo(Articolo a) {
	if (articoloDao.existsById(a.getId())) {
	    articoloDao.delete(a);
	    return "Articolo correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + a.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteArticolo(Long id) {
	if (articoloDao.existsById(id)) {
	    articoloDao.deleteById(id);
	    return "Articolo correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Articolo FindArticoloById(Long id) {
	if (articoloDao.existsById(id)) {
	    return articoloDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Articolo> findAll() {
	return articoloDao.findAll();
    }

}
