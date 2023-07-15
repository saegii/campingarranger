import { User } from "./user";

export interface LoginResponse {
    user: User;
    userId?: string;
    authorized?: boolean;    
}