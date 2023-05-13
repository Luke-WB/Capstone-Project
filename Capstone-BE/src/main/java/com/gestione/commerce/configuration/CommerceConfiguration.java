package com.gestione.commerce.configuration;

import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.gestione.commerce.model.Articolo;
import com.gestione.commerce.model.Azienda;
import com.gestione.commerce.model.Corriere;
import com.gestione.commerce.model.Fattura;
import com.gestione.commerce.model.Ordine;
import com.gestione.commerce.model.StatoOrdine;
import com.gestione.commerce.model.TipoCorriere;
import com.gestione.commerce.model.Utente;
import com.github.javafaker.Faker;

@Configuration
public class CommerceConfiguration {

    private Faker fake = Faker.instance(new Locale("it-IT"));

    @Bean("FakeUtente")
    @Scope("prototype")
    public Utente fakeUtente() {
	Date from = new Date(100, 0, 1); // aggiunge 1900 all'anno
	Date to = new Date();
	Date insertDate = fake.date().between(from, to);
	return Utente.builder().indirizzo(fake.address().streetAddress())
		.dataNascita(LocalDate.of(insertDate.getYear() + 1900, insertDate.getMonth() + 1, insertDate.getDate()))
		.numeroTelefono(fake.phoneNumber().phoneNumber()).build();
    }

    @Bean("FakeArticolo")
    @Scope("prototype")
    public Articolo fakeArticolo() {
	return Articolo.builder().nome(fake.commerce().productName()).prezzo("$ " + fake.commerce().price(0, 500))
		.descrizione(fake.commerce().color()).marca(fake.commerce().department())
		.img("https://static.vecteezy.com/ti/vettori-gratis/p1/4821112-colore-bianco-pollo-cartone-animato-illustrazione-design-design-per-bambini-libro-gratuito-vettoriale.jpg")
		.quantità(fake.number().numberBetween(0, 100)).build();
    }

    @Bean("FakeAzienda")
    @Scope("prototype")
    public Azienda fakeAzienda() {
	return Azienda.builder().nome("FUTURE GAMING").partitaIva(06524670632l).codiceFiscale(06524670632l)
		.pec("f.gaming@pec.it").città("Torino").build();
    }

    @Bean("FakeCorriere")
    @Scope("prototype")
    public Corriere fakeCorriere() {
	return Corriere.builder().corriere(getCorriere(fake.number().numberBetween(0, 3))).build();
    }

    private TipoCorriere getCorriere(int random) {
	TipoCorriere type = null;
	switch (random) {
	case 0 -> type = TipoCorriere.DHL;
	case 1 -> type = TipoCorriere.GLS;
	case 2 -> type = TipoCorriere.UPS;
	}
	return type;
    }

    @Bean("FakeFattura")
    @Scope("prototype")
    public Fattura fakeFattura() {
	return Fattura.builder().quantitaArtcolo(15).importoTotale(500).build();
    }

    @Bean("FakeOrdine")
    @Scope("prototype")
    public Ordine fakeOrdine() {
	Date to = new Date();
	return Ordine.builder().numero(fake.number().numberBetween(1000, 10000)).riepilogo("RIEPILOGO")
		.dataOrdine(LocalDate.of(to.getYear() + 1900, to.getMonth() + 1, to.getDate()))
		.dataConsegna(LocalDate.of(to.getYear() + 1900, to.getMonth() + 1, to.getDate() + 3))
		.statoOrdine(getStatoOrdine(fake.number().numberBetween(0, 4))).prezzoConsegna(2.99).build();
    }

    private StatoOrdine getStatoOrdine(int random) {
	StatoOrdine type = null;
	switch (random) {
	case 0 -> type = StatoOrdine.ANNULLATO;
	case 1 -> type = StatoOrdine.CONSEGNATO;
	case 2 -> type = StatoOrdine.IN_CONSEGNA;
	case 3 -> type = StatoOrdine.SPEDITO;
	}
	return type;
    }
}
