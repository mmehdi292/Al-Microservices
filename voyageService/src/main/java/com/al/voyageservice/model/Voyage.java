package com.al.voyageservice.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.Date;

@Data
@Document
public class Voyage {

    @Id
    private ObjectId _id;
    private String idVoyage;
    private int trajet;
    private String idBus;
    private String LieuDepart;
    private String destination;
    private Date tempDepart;

}