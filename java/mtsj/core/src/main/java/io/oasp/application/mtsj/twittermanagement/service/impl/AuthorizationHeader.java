package io.oasp.application.mtsj.twittermanagement.service.impl;

/**
 * @author ssarmoka
 *
 */
public class AuthorizationHeader {

  private String accessToken;

  private String refreshToken;

  private Long expirationTime;

  private String accessHeaderName;

  private String refreshHeaderName;

  public AuthorizationHeader() {
    System.out.println("Default constructor");
  }

  public AuthorizationHeader(String accessToken, String refreshToken, Long expirationTime) {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setExpirationTime(expirationTime);

    this.accessHeaderName = "Authorizarion";
    this.refreshHeaderName = "Authorization-Refresh";
  }

  /**
   * @return accessHeaderName
   */
  public String getAccessHeaderName() {

    return this.accessHeaderName;
  }

  /**
   * @return refreshHeaderName
   */
  public String getRefreshHeaderName() {

    return this.refreshHeaderName;
  }

  /**
   * @return refreshToken
   */
  public String getRefreshToken() {

    return this.refreshToken;
  }

  /**
   * @param refreshToken new value of {@link #getrefreshToken}.
   */
  public void setRefreshToken(String refreshToken) {

    this.refreshToken = refreshToken;
  }

  /**
   * @return accessToken
   */
  public String getAccessToken() {

    return this.accessToken;
  }

  /**
   * @param accessToken new value of {@link #getaccessToken}.
   */
  public void setAccessToken(String accessToken) {

    this.accessToken = accessToken;
  }

  /**
   * @return expirationTime
   */
  public Long getExpirationTime() {

    return this.expirationTime;
  }

  /**
   * @param expirationTime new value of {@link #getexpirationTime}.
   */
  public void setExpirationTime(Long expirationTime) {

    this.expirationTime = expirationTime;
  }

}
