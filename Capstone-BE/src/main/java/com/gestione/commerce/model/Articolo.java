package com.gestione.commerce.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "articoli")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Articolo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String prezzo;
    private String descrizione;
    private String marca;
    private String img;
    private int quantità;

    @ManyToOne
    @JoinColumn(name = "ordine_id")
    @JsonIgnoreProperties({ "fattura", "azienda", "articoli" })
    private Ordine ordine;
}
