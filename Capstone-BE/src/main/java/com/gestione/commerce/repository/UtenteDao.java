package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Utente;

@Repository
public interface UtenteDao extends JpaRepository<Utente, Long> {

}
