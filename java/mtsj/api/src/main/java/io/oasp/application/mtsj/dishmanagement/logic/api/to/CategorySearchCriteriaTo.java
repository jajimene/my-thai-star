package io.oasp.application.mtsj.dishmanagement.logic.api.to;

import io.oasp.module.jpa.common.api.to.SearchCriteriaTo;

/**
 * This is the {@link SearchCriteriaTo search criteria} {@link net.sf.mmm.util.transferobject.api.TransferObject TO}
 * used to find {@link io.oasp.application.mtsj.dishmanagement.common.api.Category}s.
 *
 */
public class CategorySearchCriteriaTo extends SearchCriteriaTo {


  private static final long serialVersionUID = 1L;

	private String name;
	private String description;
  private Integer showOrder;

  /**
   * The constructor.
   */
  public CategorySearchCriteriaTo() {

    super();
  }

  
	public String getName() {
		return name;
	}

	
	public void setName(String name) {
		this.name = name;
	}
  
	public String getDescription() {
		return description;
	}

	
	public void setDescription(String description) {
		this.description = description;
	}
  
	public Integer getShowOrder() {
		return showOrder;
	}

	
	public void setShowOrder(Integer showOrder) {
		this.showOrder = showOrder;
	}

}
