import { Customer } from "./customer.interface";
import { State } from "./state.interface";
import { User } from "./user.interface";

export interface Ticket {
    id?: string;
    type?: string;
    description?: string;
    client?: Customer;
    employee?: User;
    states?: State[]; 
}
  