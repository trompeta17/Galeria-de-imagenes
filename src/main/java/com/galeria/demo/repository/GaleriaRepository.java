package com.galeria.demo.repository;

import com.galeria.demo.Entity.GaleriaEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GaleriaRepository extends JpaRepository<GaleriaEntity, Long>{
    List<GaleriaEntity> findByTipo(String tipo);
}
