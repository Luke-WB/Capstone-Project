package com.gestione.commerce.repository;

import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Articolo;
import com.gestione.commerce.model.Carrello;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
public class CarrelloArticoliDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void rimuoviArticoliByCarrello(Long articoloId, Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	if (carrello != null) {
	    carrello.getArticoli().removeIf(articolo -> articolo.getId() == articoloId);
	}
    }

    @Transactional
    public void aggiungiArticoliByCarrello(Long articoloId, Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	Articolo articolo = entityManager.find(Articolo.class, articoloId);
	if (carrello != null && articolo != null) {
	    carrello.getArticoli().add(articolo);
	    entityManager.merge(carrello);
	}
    }
}
