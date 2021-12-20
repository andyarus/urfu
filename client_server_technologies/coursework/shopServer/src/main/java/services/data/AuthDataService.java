package services.data;

import managers.DbManager;
import models.common.Response;
import models.auth.Auth;
import models.common.Error;
import models.auth.User;
import java.sql.*;

public class AuthDataService {
    // Singleton
    private static AuthDataService instance = new AuthDataService();

    // Instance
    public static AuthDataService getInstance() {
        return instance;
    }

    // Private Properties
    private DbManager dbManager = DbManager.getInstance();

    // Auth
    public Response auth(Auth auth) {
        try {
            Connection conn = dbManager.connect();
            Statement stmt = conn.createStatement();
            String query = String.format("select * from users where username = '%s';", auth.getUsername());
            ResultSet rs = stmt.executeQuery(query);
            if (rs.next()) {
                String passwordSalt = rs.getString("password");
                if (!passwordSalt.equals(salt(auth.getPassword()))) {
                    return new Error("Неверный пароль");
                }
                Integer id = rs.getInt("id");
                Boolean isAdmin = rs.getBoolean("is_admin");
                String name = rs.getString("name");
                String email = rs.getString("email");
                String avatarUrl = rs.getString("avatar_url");
                User user = new User();
                user.setId(id);
                user.setIsAdmin(isAdmin);
                user.setName(name);
                user.setEmail(email);
                user.setAvatarUrl(avatarUrl);
                return user;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return new Error("Что-то пошло не так");
        }
        return new Error("Неверный логин");
    }

    // Private Methods
    private String salt(String source) {
        // TODO
        return source;
    }
}
