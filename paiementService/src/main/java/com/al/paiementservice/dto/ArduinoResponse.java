package com.al.paiementservice.dto;

public class ArduinoResponse {
    private String reponseText;

    public ArduinoResponse(){}

    public ArduinoResponse(String reponseText){
        this.reponseText=reponseText;
    }

    public String getReponseText() {
        return reponseText;
    }
}
