package com.al.paiementservice.proxy;

import com.al.paiementservice.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@FeignClient(name = "microservice-passanger", url = "localhost:9002")
public interface UserProxy {

    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    User getProfile(@RequestBody Map<String, Object> payload);
}
