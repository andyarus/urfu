package managers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbManager {
    // Singleton
    private static DbManager instance = new DbManager();

    // Instance
    public static DbManager getInstance() {
        return instance;
    }

    // Public Properties
    Connection conn = null;

    // Private Properties
    private String connectionUrl = "jdbc:postgresql://localhost:5432/shop";
    private String userName = "admin";
    private String userPassword = "EKVhWyB6vd";

    public Connection connect() {
        try {
            if (conn != null && !conn.isClosed()) {
                return conn;
            }
            conn = DriverManager.getConnection(connectionUrl, userName, userPassword);
            System.out.println("You are successfully connected to the PostgreSQL database server.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return conn;
    }
}
