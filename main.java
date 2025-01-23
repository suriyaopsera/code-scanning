import java.io.ObjectInputStream;
import java.io.FileInputStream;

public class VulnerableApp {

    // Hardcoded Credentials
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "password123"; // Avoid hardcoding secrets

    // Insecure Deserialization
    public static void insecureDeserialization(String filename) {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            Object obj = ois.readObject(); // Potentially exploitable
            System.out.println(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        System.out.println("Username: " + USERNAME);
        System.out.println("Password: " + PASSWORD);
        insecureDeserialization("malicious_payload.ser");
    }
}
