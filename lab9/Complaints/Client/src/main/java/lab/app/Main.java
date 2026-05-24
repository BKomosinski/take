package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.MediaType;

public class Main {

    private static final String BASE_URL = "http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints";

    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();

        long openId = 204;

        System.out.println("=== URUCHAMIANIE KLIENTA REST ===\n");

        String allComplaints = client.target(BASE_URL)
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("a. Wszystkie skargi w bazie:");
        System.out.println(allComplaints);
        System.out.println("\n-------------------------------------------------\n");

        String openComplaint = client.target(BASE_URL + "/" + openId)
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("b. Pobrana otwarta skarga o ID " + openId + ":");
        System.out.println(openComplaint);
        System.out.println("\n-------------------------------------------------\n");

        String updatedJson = "{\n" +
                "  \"id\": " + openId + ",\n" +
                "  \"author\": \"Jim Brown\",\n" +
                "  \"complaintDate\": \"2021-04-24\",\n" +
                "  \"complaintText\": \"Blood stains removed successfully.\",\n" +
                "  \"status\": \"closed\"\n" +
                "}";

        client.target(BASE_URL + "/" + openId)
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.json(updatedJson));

        System.out.println("c. Zmodyfikowano skargę o ID " + openId + " (status zmieniony na 'closed').");
        System.out.println("\n-------------------------------------------------\n");

        String openComplaintsOnly = client.target(BASE_URL)
                .queryParam("status", "open")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("d. Wszystkie pozostałe OTWARTE skargi po aktualizacji:");
        System.out.println(openComplaintsOnly);
        System.out.println("\n=================================================");

        client.close();
    }
}