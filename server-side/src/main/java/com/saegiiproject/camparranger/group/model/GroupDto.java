package com.saegiiproject.camparranger.group.model;

public class GroupDto {
    private Long id;
    private String name;

    private GroupDto() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static class Builder {
        private Long id;
        private String name;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public GroupDto build() {
            GroupDto groupDto = new GroupDto();
            groupDto.id = this.id;
            groupDto.name = this.name;
            return groupDto;
        }
    }

    public static Builder builder() {
        return new Builder();
    }
}
