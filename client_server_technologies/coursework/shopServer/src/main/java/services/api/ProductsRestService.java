package services.api;

import models.product.Product;
import services.data.ProductsDataService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("products")
public class ProductsRestService {
    private ProductsDataService dataService = ProductsDataService.getInstance();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getProducts() {
        return dataService.getProducts();
    }
}
