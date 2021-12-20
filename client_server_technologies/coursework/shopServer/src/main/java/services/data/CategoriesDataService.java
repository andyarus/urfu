package services.data;

import managers.DbManager;
import models.category.Category;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CategoriesDataService {
    // Singleton
    private static CategoriesDataService instance = new CategoriesDataService();

    // Instance
    public static CategoriesDataService getInstance() {
        return instance;
    }

    // Private Properties
    private DbManager dbManager = DbManager.getInstance();

    // Get Products
    public List<Category> getCategories() {
        List<Category> categories = new ArrayList<>();
        try {
            Connection conn = dbManager.connect();
            Statement stmt = conn.createStatement();
            String query = String.format("select * from categories;");
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                Integer id = rs.getInt("id");
                String name = rs.getString("name");
                Category category = new Category();
                category.setId(id);
                category.setName(name);
                categories.add(category);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return categories;
            // TODO
            //return new Error("Что-то пошло не так");
        }
        return categories;
    }
}
