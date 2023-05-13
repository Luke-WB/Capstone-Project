package com.gestione.commerce.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "azienda")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Azienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Long partitaIva;
    private Long codiceFiscale;
    private String pec;
    private String città;

    @OneToMany
    private List<Corriere> corrieri;

    @OneToMany(mappedBy = "azienda", fetch = FetchType.LAZY, cascade = { CascadeType.MERGE, CascadeType.REMOVE,
	    CascadeType.REFRESH })
    @JsonIgnoreProperties({ "articoli", "azienda" })
    private List<Ordine> ordini;
}
