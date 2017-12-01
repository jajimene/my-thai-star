package io.oasp.application.mtsj.general.service.impl.config;

import java.util.Map;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import io.oasp.module.service.common.api.client.ServiceClientFactory;

/**
 * @author ssarmoka
 *
 */
@Configuration
@PropertySource(value = { "classpath:application.properties" })
@ComponentScan
public class MicroserviceConfig {

  @Inject
  private ServiceClientFactory serviceClientFactory;

  @Value("${microservices.enabled}")
  boolean isMicroServiceEnabled;

  private static final Logger LOG = LoggerFactory.getLogger(MicroserviceConfig.class);

  /**
   * @param <S>
   * @param serviceInterface
   * @param properties
   * @return
   */
  public <S> S getMicroserviceInterface(Class<S> serviceInterface, Map<String, String> properties) {

    System.out.println("isMicroServiceEnabled---- " + this.isMicroServiceEnabled);
    if (this.isMicroServiceEnabled) {
      return this.serviceClientFactory.create(serviceInterface, properties);
    } else {
      LOG.info("No real microservice found for " + serviceInterface.getName()
          + " returning NULL.Set microservices.enabled property true if you have real implementation of service ");
      return null;
    }

  }

  @Bean
  public MicroserviceConfig microserviceConfigBean() {

    MicroserviceConfig config = new MicroserviceConfig();
    config.setMicroServiceEnabled(this.isMicroServiceEnabled);
    return config;
  }

  /**
   * @return isMicroServiceEnabled
   */
  public boolean isMicroServiceEnabled() {

    return this.isMicroServiceEnabled;
  }

  /**
   * @param isMicroServiceEnabled new value of {@link #getisMicroServiceEnabled}.
   */
  public void setMicroServiceEnabled(boolean isMicroServiceEnabled) {

    this.isMicroServiceEnabled = isMicroServiceEnabled;
  }

}
