package com.gestione.commerce.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.gestione.commerce.service.ArticoloService;
import com.gestione.commerce.service.AziendaService;
import com.gestione.commerce.service.CorriereService;
import com.gestione.commerce.service.OrdineService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CommerceRunner implements ApplicationRunner {

    @Autowired
    private ArticoloService articoloService;
    @Autowired
    private AziendaService aziendaService;
    @Autowired
    private OrdineService ordineService;
    @Autowired
    private CorriereService corriereService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

	if (articoloService.findAll().isEmpty()) {
	    for (int i = 0; i < 20; i++) {
		articoloService.createArticolo();
	    }
	    log.info("Articoli creati!");
	}

	if (corriereService.findAll().isEmpty()) {
	    for (int i = 0; i < 10; i++) {
		corriereService.createCorriere();
	    }
	    log.info("Corrieri creati!");
	}

	if (aziendaService.findAll().isEmpty()) {
	    for (int i = 0; i < 1; i++) {
		aziendaService.createAzienda();
	    }
	    log.info("Azienda creata!");
	}

	// if (ordineService.findAll().isEmpty()) {
	// for (int i = 0; i < 20; i++) {
	// ordineService.createOrdine();
	// }
	// log.info("Ordini creati! - Fatture create!");
	// }

//	if (utenteService.findAll().isEmpty()) {
//	    for (int i = 0; i < 20; i++) {
//		utenteService.createUtente();
//	    }
//	    log.info("Utenti creati!");
//	}

    }

}
