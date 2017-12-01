package io.oasp.application.serviceAuth.auth.service.api.rest;

public class JwtHeaderTo {

  private String accessToken;

  private String refreshToken;

  private Long expirationTime;

  private String accessHeaderName;

  private String refreshHeaderName;

  public JwtHeaderTo() {

  }

  public JwtHeaderTo(String accessToken, String refreshToken, Long expirationTime) {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setExpirationTime(expirationTime);

    this.accessHeaderName = "Authorization";
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
