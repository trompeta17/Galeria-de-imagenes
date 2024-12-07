package com.galeria.demo.controller;

import com.galeria.demo.Entity.GaleriaEntity;
import com.galeria.demo.repository.GaleriaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GaleriaController {
    @Autowired
    private GaleriaRepository galeriaRepository;
    
    
    //mostrarTodas las imagenes
    @GetMapping("/galeria")
public List<GaleriaEntity> getAllGaleriaEntity() {
    return galeriaRepository.findAll();
}
    
   @GetMapping("/galeria/tipo")
public List<GaleriaEntity> getGaleriaByTipo(@RequestParam String tipo) {
    return galeriaRepository.findByTipo(tipo);
}
}
