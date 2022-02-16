package com.al.paiementservice.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Data
@Document
public class User {

	@Id
	private ObjectId _id;
	private String username;
	private String password;
	private String email;
	private String nTelephone;
	private String nom;
	private String prenom;
	private int age;
	private String sexe;
	private String idCarteRFID;
	private String profession;
	private String typeAbonnement;
	private Date debutAbonnement;
	private Date finAbonnement;
	private String role;
	private double solde;

}