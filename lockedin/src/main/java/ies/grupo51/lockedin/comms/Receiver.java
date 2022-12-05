package ies.grupo51.lockedin.comms;

import org.json.JSONException;
import org.json.JSONObject;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;

import ies.grupo51.lockedin.exceptions.ResourceNotFoundException;
import ies.grupo51.lockedin.models.MoveSensor;
import ies.grupo51.lockedin.models.MoveSensorData;
import ies.grupo51.lockedin.models.Workstation;
import ies.grupo51.lockedin.models.Inmate;
import ies.grupo51.lockedin.services.InmateService;
import ies.grupo51.lockedin.services.MoveSensorDataService;
import ies.grupo51.lockedin.services.MoveSensorService;

public class Receiver {

    @Autowired
    private MoveSensorService moveSensorService;

    @Autowired
    private MoveSensorDataService moveSensorDataService;

    @Autowired
    private InmateService inmateService;

    @RabbitListener(queues = CommsConfig.QUEUE)
    public void listen(String receivedmsg) throws ResourceNotFoundException {
        System.out.print("Received from datagen: " + receivedmsg);

        try {
            JSONObject jmsg = new JSONObject(receivedmsg);
            String type = jmsg.getString("type");
            long inmateid = jmsg.getInt("inmateid");
            Inmate inmate = inmateService.getInmateById(inmateid);
            String arg = jmsg.getString("arg");
            
            switch(type) {
                case "sensor":
                    MoveSensor moveSensor = moveSensorService.getMoveSensorById(Integer.parseInt(arg));
                    moveSensorDataService.saveMoveSensorData(new MoveSensorData(inmateid, moveSensor.getId()));
                    break;
                case "apply":
                    break;
                case "work":
                    break;
                case "healthcheck":
                    break;
                default:
                    System.err.println("Couldn't read message type.");
                    break;
            }
        } catch (JSONException je) {
            System.err.println("Couldn't decode JSON. Exiting.");
            System.exit(1);
        }
    }
}