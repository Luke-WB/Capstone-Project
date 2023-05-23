package com.gestione.commerce.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gestione.auth.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ordini")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Ordine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numero;
    private String riepilogo;
    private LocalDate dataOrdine;
    private LocalDate dataConsegna;
    @Enumerated(EnumType.STRING)
    private StatoOrdine statoOrdine;
    private Double prezzoConsegna;

    // AZIENDA TABELLA A PARTE
    @ManyToOne
    @JoinColumn(name = "azienda_id")
    @JsonIgnoreProperties({ "ordini" })
    private Azienda azienda;

    @OneToOne(fetch = FetchType.EAGER, cascade = { CascadeType.MERGE, CascadeType.REMOVE, CascadeType.REFRESH,
	    CascadeType.PERSIST })
    @JsonIgnoreProperties({ "ordine" })
    private Fattura fattura;

    @OneToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({ "ordine" })
    private Carrello carrello;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({ "ordini" })
    private User user;

}