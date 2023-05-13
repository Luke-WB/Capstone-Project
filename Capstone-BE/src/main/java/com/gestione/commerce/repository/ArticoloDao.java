package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Articolo;

@Repository
public interface ArticoloDao extends JpaRepository<Articolo, Long> {

}
