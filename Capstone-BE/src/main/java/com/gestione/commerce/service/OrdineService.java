package com.gestione.commerce.service;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.gestione.commerce.model.Azienda;
import com.gestione.commerce.model.Fattura;
import com.gestione.commerce.model.Ordine;
import com.gestione.commerce.repository.OrdineDao;
import com.github.javafaker.Faker;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrdineService {
    @Autowired
    private OrdineDao ordineDao;
    @Autowired
    private AziendaService aziendaService;
    @Autowired
    private FatturaService fatturaService;
    // @Autowired
    // private UtenteService utenteService;

    @Autowired
    @Qualifier("FakeOrdine")
    private ObjectProvider<Ordine> objOrdine;

    private Faker fake = Faker.instance(new Locale("it-IT"));

    public void createOrdine() {
	Ordine o = objOrdine.getObject();
	ordineDao.save(o);
	Azienda a = aziendaService.FindAziendaById(1l);
	Fattura f = fatturaService.createFattura(o);
	// List<Utente> listaUtenti = utenteService.findAll();
	// Integer random = fake.number().numberBetween(0, listaUtenti.size() - 1);
	// Utente u = listaUtenti.get(random);
	o.setAzienda(a);
	o.setFattura(f);
	// o.setUtente(u);
	ordineDao.save(o);
    }

    public String postOrdine(Ordine o) {
	ordineDao.save(o);
	return "Ordine correctly persisted on Database!";
    }

    public String updateOrdine(Ordine o) {
	if (ordineDao.existsById(o.getId())) {
	    ordineDao.save(o);
	    return "Ordine correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Ordine with ID --> " + o.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteOrdine(Ordine o) {
	if (ordineDao.existsById(o.getId())) {
	    ordineDao.delete(o);
	    return "Ordine correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Ordine with ID --> " + o.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteOrdine(Long id) {
	if (ordineDao.existsById(id)) {
	    ordineDao.deleteById(id);
	    return "Ordine correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Ordine with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Ordine FindOrdineById(Long id) {
	if (ordineDao.existsById(id)) {
	    return ordineDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Ordine with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Ordine> findAll() {
	return ordineDao.findAll();
    }
}
