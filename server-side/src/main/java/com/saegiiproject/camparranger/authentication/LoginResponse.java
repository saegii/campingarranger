package com.saegiiproject.camparranger.authentication;

public class LoginResponse {
    private Long userId;
    private boolean isAuthorized;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public boolean isAuthorized() {
        return isAuthorized;
    }

    public void setAuthorized(boolean authorized) {
        isAuthorized = authorized;
    }
}
