package models.auth;

import models.common.Response;

//@XmlRootElement
public class User implements Response {
    // Private Properties
    private Integer id;
    private Boolean isAdmin;
    private String name;
    private String email;
    private String avatarUrl;

    // Get/Set Methods
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getIs_admin() {
        return isAdmin;
    }

    public void setIsAdmin(Boolean isAadmin) {
        isAdmin = isAadmin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatar_url() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }
}