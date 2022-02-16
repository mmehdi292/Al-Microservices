package com.al.passangerservice.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Data
@Document
public class TypeAbonnement {

	@Id
	private ObjectId _id;
	private String nomAbonnement;
	private int pourcentage;

}