package ies.grupo51.lockedin.models;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("inmate")
public class Inmate {
    
    @Id
    private long id;

    private String name;
    private Date birth_date;
    private Date entry_date;
    private Date sentence_ending;
    private Boolean solitary;
    private Workstation application;
    private Workstation workstation;
    private List<Healthcheck> health_logs;
    private List<MoveSensorData> move_logs;

    private static long counter = 1000;

    public Inmate () {
        this.id = 0;
        this.health_logs = new ArrayList<>();
        this.move_logs = new ArrayList<>();
    }

    public Inmate (long id, String name, Date birth_date, Date entry_date, Date sentence_ending, Boolean solitary, Workstation application, Workstation workstation) {
        this.id = id;
        this.name = name;
        this.birth_date = birth_date;
        this.entry_date = entry_date;
        this.sentence_ending = sentence_ending;
        this.solitary = solitary;
        this.application = application;
        this.workstation = workstation;
        this.health_logs = new ArrayList<>();
        this.move_logs = new ArrayList<>();
    }

    // SETS

    public void setName(String name) {
        this.name = name;
    }
    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }
    public void setEntry_date(Date entry_date) {
        this.entry_date = entry_date;
    }
    public void setSentence_ending(Date sentence_ending) {
        this.sentence_ending = sentence_ending;
    }
    public void setSolitary(Boolean solitary) {
        this.solitary = solitary;
    } 
    public void setApplication(Workstation application) {
        this.application = application;
    }
    public void setWorkstation(Workstation workstation) {
        this.workstation = workstation;
    }
    public void setHealth_logs(List<Healthcheck> health_logs) {
        this.health_logs = health_logs;
    }
    public void setMove_logs(List<MoveSensorData> move_logs) {
        this.move_logs = move_logs;
    }
    public static void setCounter(long counter) {
        Inmate.counter = counter;
    }
    public void setId(long id) {
        this.id = id;
    }

    // GETS
    
    public List<Healthcheck> getHealth_logs() {
        return health_logs;
    }
    public List<MoveSensorData> getMove_logs() {
        return move_logs;
    }
    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Date getBirth_date() {
        return birth_date;
    }
    public Date getEntry_date() {
        return entry_date;
    }
    public Date getSentence_ending() {
        return sentence_ending;
    }
    public Boolean getSolitary() {
        return solitary;
    }
    public Workstation getApplication() {
        return application;
    }
    public Workstation getWorkstation() {
        return workstation;
    }
    public static long getCounter() {
        return counter;
    }

    // CUSTOM FUNCTIONS FOR MODEL

    public void addMoveLog(MoveSensorData log){
        this.move_logs.add(log);
    }
    public void addHeathLog(Healthcheck log){
        this.health_logs.add(log);
    }

    public MoveSensorData getLastMoveLog(){
        return this.move_logs.get(-1);
    }
    public Healthcheck getLastHealthLog(){
        return this.health_logs.get(-1);
    }

    @Override
    public String toString() {
        return String.format(
            "Inmate [ID: %s, Name: %s, Birth date: %s, Entry date: %s, Sentence End: %d, Solitary Confinement: %s]", 
            id, name, birth_date.toString(), entry_date.toString(), sentence_ending.toString(), solitary?"YES":"NO");
    }
}