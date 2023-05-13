package com.gestione.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestione.commerce.model.Ordine;

@Repository
public interface OrdineDao extends JpaRepository<Ordine, Long> {

}
