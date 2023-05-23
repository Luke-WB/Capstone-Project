package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Carrello;

@Repository
public interface CarrelloDao extends JpaRepository<Carrello, Long> {

}
