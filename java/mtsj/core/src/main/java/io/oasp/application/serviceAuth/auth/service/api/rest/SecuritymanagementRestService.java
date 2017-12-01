package io.oasp.application.serviceAuth.auth.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.http.ResponseEntity;

/**
 * Login Controller
 *
 */
@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface SecuritymanagementRestService {

  /**
   * Gets the currentuser logged from json web token
   *
   * @param authorizationHeader Authorization header with the json web token
   * @return the user logged
   */
  //
  // @GET
  // @Path("/security/v1/currentuser")
  // ResponseEntity<UserDetailsJsonWebTokenAbstract> currentuser(String authorizationHeader);

  /**
   * Refresh the json web token with new expired time
   *
   * @param authorizationHeader
   * @param authorizationResfreshHeader
   * @return forbidden or refreshed json web token
   */
  @POST
  @Path("/security/v1/refresh_jwt")
  ResponseEntity<JwtHeaderTo> refreshToken(String authorizationHeader, String authorizationResfreshHeader);

  /**
   * Log-in user and generate a valid json web token
   *
   * @param loginTo Data login from the html form
   * @return forbidden or json web token generated
   */
  @POST
  @Path("/login")
  JwtHeaderTo login(LoginTo loginTo);

}
