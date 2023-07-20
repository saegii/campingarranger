import { Group } from "./group";

export interface User {
    id: string;
    email: string;
    groups: Group[];
    profilePictureUrl?: string;
}