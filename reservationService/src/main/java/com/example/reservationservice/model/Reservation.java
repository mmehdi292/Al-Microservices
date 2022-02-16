package com.example.reservationservice.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Id;

@Data
@Document
public class Reservation {

    @Id
    private ObjectId _id;
    private String idReservation;
    private String idVoyage;
    private String username;
    private double prix;
    private String etat;

}