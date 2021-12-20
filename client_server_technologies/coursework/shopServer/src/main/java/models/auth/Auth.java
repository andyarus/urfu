package models.auth;

public class Auth {
    // Private Properties
    private String username;
    private String password;

    // Get/Set Methods
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}