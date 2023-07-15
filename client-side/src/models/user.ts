import { Group } from "./group";

export interface User {
    id: string;
    groups: Group[];
}