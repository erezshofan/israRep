import { IOwner } from "./IOwner";

// Repository interface
export interface IRepository {
    id: number;
    name: string;
    owner: IOwner;
}