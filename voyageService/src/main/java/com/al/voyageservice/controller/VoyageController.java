package com.al.voyageservice.controller;

import com.al.voyageservice.model.Voyage;
import com.al.voyageservice.repository.VoyageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping(value="microservice-voyage")
public class VoyageController {

    @Autowired
    private VoyageRepository voyageRepository;

    @GetMapping(value = "/voyages")
    public List<Voyage> getVoyages() {
        return voyageRepository.findAll();
    }

    @GetMapping(value = "/createData")
    public String createData() {
        ArrayList<String> ville = new ArrayList<String>();
        ville.add("Annaba");ville.add("Alger");ville.add("Constantine");ville.add("Setif");ville.add("Oran");ville.add("Skikda");
        ville.add("Blida");ville.add("Tamnsaert");ville.add("Ourgela");ville.add("Mila");ville.add("El Tref");ville.add("Tendouf");
        ArrayList<String> cheffuer = new ArrayList<String>();
        cheffuer.add("Mehdi CHAIBRASSOU");
        cheffuer.add("Mehdi MOUDDA");
        for(String v:ville){
            Voyage voyage = new Voyage();
            voyage.setIdVoyage(UUID.randomUUID().toString());
            voyage.setTrajet((int)(Math.random()*20));
            voyage.setIdBus(cheffuer.get((int)(Math.random()*2)));
            voyage.setLieuDepart(v);
            voyage.setDestination(ville.get((int)(Math.random()*10)));
            voyage.setTempDepart(new Date());
            voyageRepository.save(voyage);
        }

        return "Done";
    }
}
