package com.al.voyageservice.repository;


import com.al.voyageservice.model.Voyage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VoyageRepository extends MongoRepository<Voyage,Integer> {
    Voyage findByIdVoyage(String idVoyage);
}
