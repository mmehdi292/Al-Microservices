package com.example.reservationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

public class ReservationRequest implements Serializable {

    private String idVoyage;
    private String username;

    public ReservationRequest(){}

    public ReservationRequest(String idVoyage,String username){
        this.idVoyage=idVoyage;
        this.username=username;
    }

    public String getIdVoyage() {
        return idVoyage;
    }
    public String getUsername() {
        return username;
    }


}
