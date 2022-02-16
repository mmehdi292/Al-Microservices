package com.al.voyageservice.controller.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "microservice-paiement")
public class PaiementController {

    @GetMapping(value = "microservice-paiement")
    public String test(){
        return "microservice-paiement work";
    }
}
