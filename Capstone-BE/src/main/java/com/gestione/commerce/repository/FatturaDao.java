package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Fattura;

@Repository
public interface FatturaDao extends JpaRepository<Fattura, Long> {

}
