package com.gestione.commerce.model;

import java.time.LocalDate;
import java.util.List;

import com.gestione.auth.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "utenti")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Utente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String indirizzo;
    private String numeroTelefono;
    private LocalDate dataNascita;

    @OneToMany(mappedBy = "utente", fetch = FetchType.EAGER, cascade = { CascadeType.MERGE, CascadeType.REMOVE,
	    CascadeType.REFRESH })
    private List<Ordine> ordini;

    @OneToOne
    private User user;
}
