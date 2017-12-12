package io.oasp.application.mtsj.twittermanagement.service.impl;

import java.util.Map;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.core.HttpHeaders;

import org.springframework.beans.factory.annotation.Qualifier;

import io.oasp.application.mtsj.general.service.impl.config.MicroserviceConfig;
import io.oasp.application.mtsj.twittermanagement.service.api.TwittermanagementRestService;
import io.oasp.application.twitterService.twitter.service.api.rest.TwitterClient;
import io.oasp.module.service.common.api.client.config.ServiceClientConfigBuilder;

/***
 *
 * @author jajimene
 *
 */
@Named("TwittermanagementRestService")
public class TwittermanagementRestServiceImpl implements TwittermanagementRestService {

  @Inject
  @Qualifier("microserviceConfigBean")
  private MicroserviceConfig config;

  @Override
  public boolean sendTweetRemote(HttpHeaders headers) {

    // TODO: Fallback, boolean for mock
    MicroserviceConfig msConfig = new MicroserviceConfig();

    // Map<String, String> headerMap =
    // new ServiceClientConfigBuilder().authJwt().userLogin("waiter").userPassword("waiter").buildMap();
    // headerMap.put("Content-Type", "application/json");
    //
    // LoginTo loginTo = new LoginTo();
    // loginTo.setJ_username("waiter");
    // loginTo.setJ_password("waiter");
    //
    // SecuritymanagementRestService authService =
    // this.config.getMicroserviceInterface(SecuritymanagementRestService.class, headerMap);
    // // this.serviceClientFactory.create(SecuritymanagementRestService.class, headerMap);
    // JwtHeaderTo authHeaders = authService.login(loginTo);
    //
    // headerMap.put("Authorization", authHeaders.getAccessToken());

    Map<String, String> headerMap = new ServiceClientConfigBuilder().authJwt().buildMap();
    headerMap.put("Authorization", headers.getHeaderString("Authorization"));

    TwitterClient twitterClient = this.config.getMicroserviceInterface(TwitterClient.class, headerMap);
    return twitterClient.sendTweet();
  }

  // @Override
  // public Tweet getTweet() {
  //
  // RestTemplate restTemplate = new RestTemplate();
  //
  // String serviceURLAuthService = "http://localhost:8081/serviceAuth/services/rest/login";
  // restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
  // String credentials = "{\"j_username\" : \"chief\", \"j_password\" : \"chief\"}";
  // HttpHeaders headers = new HttpHeaders();
  // headers.setContentType(MediaType.APPLICATION_JSON);
  // HttpEntity<String> entity = new HttpEntity<String>(credentials, headers);
  // ResponseEntity<AuthorizationHeader> response =
  // restTemplate.exchange(serviceURLAuthService, HttpMethod.POST, entity, AuthorizationHeader.class);
  // AuthorizationHeader authHeaders = response.getBody();
  // System.out.println(authHeaders);
  //
  // Map<String, String> headerMap =
  // new ServiceClientConfigBuilder().authOAuth().userLogin("waiter").userPassword("waiter").buildMap();
  // headerMap.put("Content-Type", "application/json");
  //
  // headerMap.put("Authorization", authHeaders.getAccessToken());
  //
  // TwitterClient twitterClient = this.serviceClientFactory.create(TwitterClient.class, headerMap);
  // Tweet tweet = twitterClient.getTweet();
  // System.out.println("tweet-------- " + tweet.getText());
  // return null;
  // }

  // public TwitterClient getTweeterClient() {
  //
  // RestTemplate restTemplate = new RestTemplate();
  //
  // String serviceURLAuthService = "http://localhost:8081/service-auth/services/rest/login";
  // restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
  // String credentials = "{\"j_username\" : \"chief\", \"j_password\" : \"chief\"}";
  // HttpHeaders headers = new HttpHeaders();
  // headers.setContentType(MediaType.APPLICATION_JSON);
  // HttpEntity<String> entity = new HttpEntity<String>(credentials, headers);
  // ResponseEntity<AuthorizationHeader> response =
  // restTemplate.exchange(serviceURLAuthService, HttpMethod.POST, entity, AuthorizationHeader.class);
  // AuthorizationHeader authHeaders = response.getBody();
  // System.out.println(authHeaders);
  //
  // Map<String, String> headerMap =
  // new ServiceClientConfigBuilder().authOAuth().userLogin("waiter").userPassword("waiter").buildMap();
  // headerMap.put("Content-Type", "application/json");
  //
  // headerMap.put("Authorization", authHeaders.getAccessToken());
  //
  // TwitterClient twitterClient = this.serviceClientFactory.create(TwitterClient.class, headerMap);
  // return twitterClient;
  // }
}
