package com.al.paiementservice.controller;

import com.al.paiementservice.dto.ArduinoRequeste;
import com.al.paiementservice.dto.ArduinoResponse;
import com.al.paiementservice.model.User;
import com.al.paiementservice.proxy.UserProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@EnableFeignClients
@RequestMapping(value = "microservice-paiement")
public class PaiementContoller {


    @GetMapping(value="/test")
    public String test(){
        return "microservice-paiement test";
    }

}
