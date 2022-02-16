package com.al.paiementservice.dto;

public class ArduinoRequeste {
    private String idCarteRFID;
    private String idVoyage;
    private double prix;

    public ArduinoRequeste(){}

    public ArduinoRequeste(String idCarteRFID,String idVoyage,double prix){
        this.idCarteRFID=idCarteRFID;
        this.idVoyage=idVoyage;
        this.prix=prix;
    }

    public String getIdCarteRFID() {
        return idCarteRFID;
    }

    public String getIdVoyage() {
        return idVoyage;
    }

    public double getPrix() {
        return prix;
    }
}
