package services.api;

import models.common.Response;
import models.auth.Auth;
import services.data.AuthDataService;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("auth")
public class AuthRestService {
    private AuthDataService dataService = AuthDataService.getInstance();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response auth(Auth authModel) {
        return dataService.auth(authModel);
    }
}
