package com.example.reservationservice.controller;

import com.example.reservationservice.dto.ReservationRequest;
import com.example.reservationservice.model.Reservation;
import com.example.reservationservice.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping(value="microservice-reservation")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping(value="/test")
    public String test(){
        return "microservice-reservation test";
    }

    @RequestMapping(value = "/reservation", method = RequestMethod.POST)
    public ResponseEntity<?> reservation(@RequestBody Map<String, Object> payload){
        String idVoyage = (String) payload.get("idVoyage");
        String username = (String) payload.get("username");
        System.out.println(username+"---"+idVoyage);
        Reservation reservation = new Reservation();
        reservation.setIdReservation(UUID.randomUUID().toString());
        reservation.setUsername(username);
        reservation.setIdVoyage(idVoyage);
        reservation.setPrix(-1);
        reservation.setEtat("Reserver");
        reservationRepository.save(reservation);
        return ResponseEntity.ok(reservation);
    }

    @RequestMapping(value = "/historique", method = RequestMethod.POST)
    public List<Reservation> historique(@RequestBody Map<String, Object> payload){
        System.out.println("--- --- -- -- --: "+payload.get("username"));
        String username = (String) payload.get("username");
        return reservationRepository.findAllByUsername(username);
    }

    @RequestMapping(value = "/annuler", method = RequestMethod.POST)
    public ResponseEntity<?> annulerReservation(@RequestBody Map<String, Object> payload){
        String idReservation = (String) payload.get("idReservation");
        System.out.println("---"+idReservation);
        try{
            Reservation r = reservationRepository.findByIdReservation(idReservation);
            reservationRepository.delete(r);
        }
        catch(Exception e){
            return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok("Has been deleted");
    }
}
