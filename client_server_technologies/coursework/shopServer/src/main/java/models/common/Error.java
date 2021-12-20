package models.common;

import models.common.Response;

public class Error implements Response {
    // Private Properties
    private String error;

    // Init
    public Error(String error) {
        this.error = error;
    }

    // Get/Set Methods
    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
