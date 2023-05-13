package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Corriere;

@Repository
public interface CorriereDao extends JpaRepository<Corriere, Long> {

}
