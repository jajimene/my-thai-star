package io.oasp.application.mtsj.twittermanagement.service.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.oasp.application.mtsj.general.common.api.RestService;

/**
 * @author jajimene
 *
 */
@Path("/twittermanagement/v1")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface TwittermanagementRestService extends RestService {

  @POST
  @Path("/twitterRemote")
  boolean sendTweetRemote();

  // @GET
  // @Path("/gettweet")
  // public Tweet getTweet();

}
