package com.al.passangerservice.controller;

import com.al.passangerservice.dto.AuthenticationRequest;
import com.al.passangerservice.dto.AuthenticationResponse;
import com.al.passangerservice.model.User;
import com.al.passangerservice.respository.UserRepository;
import com.al.passangerservice.service.MyUserDetailsService;
import com.al.passangerservice.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "microservice-passanger")
public class PassangerController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value="/test")
    public String test(){
        return "microservice-Passanger test";
    }

    @RequestMapping(value="/")
    public String index(){
        return "index";
    }

    @RequestMapping(value = "/insciption", method = RequestMethod.POST)
    public ResponseEntity<?> insciption(@RequestBody User userdata){
        List<User> users = userRepository.findAll();
        for(User user:users){
            if(user.getUsername().equals(userdata.getUsername())){
                return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
            }
        }
        userRepository.save(userdata);
        return ResponseEntity.ok("Account has been created");
    }
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Boolean createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        User user = userRepository.findByUsernameAndPassword(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        return user!=null;
    }

    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public User getProfile(@RequestBody Map<String, Object> payload){
        String username = (String) payload.get("username");
        User user = userRepository.findByUsername(username);
        return user;
    }

    @RequestMapping(value = "/profile", method = RequestMethod.PUT)
    public ResponseEntity<?> editProfile(@RequestBody User userdata){
        User user = userRepository.findByUsername(userdata.getUsername());
        if(userdata.getUsername().equals(user.getUsername())){
            userdata.setPassword(user.getPassword());
            userRepository.delete(user);
            userRepository.save(userdata);
            return ResponseEntity.ok(userdata);
        }

        return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
    }





}
