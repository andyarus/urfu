package services.data;

import managers.DbManager;
import models.product.Product;
import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductsDataService {
    // Singleton
    private static ProductsDataService instance = new ProductsDataService();

    // Instance
    public static ProductsDataService getInstance() {
        return instance;
    }

    // Private Properties
    private DbManager dbManager = DbManager.getInstance();

    // Get Products
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();
        try {
            Connection conn = dbManager.connect();
            Statement stmt = conn.createStatement();
            String query = String.format("select * from products;");
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                Integer id = rs.getInt("id");
                Integer categoryId = rs.getInt("category_id");
                String name = rs.getString("name");
                String imageUrl = rs.getString("image_url");
                BigDecimal price = rs.getBigDecimal("price");
                Product product = new Product();
                product.setId(id);
                product.setCategoryId(categoryId);
                product.setName(name);
                product.setImageUrl(imageUrl);
                product.setPrice(price);
                products.add(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return products;
            // TODO
            //return new Error("Что-то пошло не так");
        }
        return products;
    }
}
