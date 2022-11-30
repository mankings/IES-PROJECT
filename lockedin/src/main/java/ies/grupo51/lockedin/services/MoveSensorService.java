package ies.grupo51.lockedin.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ies.grupo51.lockedin.models.MoveSensor;
import ies.grupo51.lockedin.repositories.MoveSensorRepository;

@Service
public class MoveSensorService {
     
    @Autowired
    private MoveSensorRepository repository;

    public MoveSensor saveMoveSensor(MoveSensor moveSensor){
        return repository.save(moveSensor);
    }

    public List<MoveSensor> saveMoveSensors(Set<MoveSensor> moveSensors) {
        return repository.saveAll(moveSensors);
    }

    public List<MoveSensor> getMoveSensors() {
        return repository.findAll();
    }

    public MoveSensor getMoveSensorById(long id) {
        return repository.findById(id).orElse(null);
    }

    public MoveSensor updatMoveSensor(MoveSensor moveSensor) {
        MoveSensor existingMoveSensor = repository.findById(moveSensor.getId()).orElse(null);
        
        if (existingMoveSensor == null){ return null; }
        
        existingMoveSensor.setLogs(moveSensor.getLogs());
        existingMoveSensor.setEntry(moveSensor.getEntry());
        existingMoveSensor.setExit(moveSensor.getExit());
        
        return repository.save(existingMoveSensor);
    }
}