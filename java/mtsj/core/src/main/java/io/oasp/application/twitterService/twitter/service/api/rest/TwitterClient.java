package io.oasp.application.twitterService.twitter.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * @author jajimene
 *
 */

@Path("/twitter")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface TwitterClient {

  @POST
  @Path("/sendtweet")
  boolean sendTweet();
  //
  // @GET
  // @Path("/gettweet")
  // public Tweet getTweet();

}
