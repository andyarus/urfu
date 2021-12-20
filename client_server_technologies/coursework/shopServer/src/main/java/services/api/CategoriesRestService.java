package services.api;

import models.category.Category;
import services.data.CategoriesDataService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("categories")
public class CategoriesRestService {
    private CategoriesDataService dataService = CategoriesDataService.getInstance();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getCategories() {
        return dataService.getCategories();
    }
}
