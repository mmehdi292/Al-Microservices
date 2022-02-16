package com.example.reservationservice.repository;


import com.example.reservationservice.model.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReservationRepository extends MongoRepository<Reservation,Integer> {
    Reservation findByIdReservation(String idReservation);

    List<Reservation> findAllByUsername(String username);
}
