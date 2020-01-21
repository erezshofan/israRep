import { IRepository } from "./IRepository";

// "all service data" interface
export interface IData {
    total_count: number;
    items: IRepository[];
}