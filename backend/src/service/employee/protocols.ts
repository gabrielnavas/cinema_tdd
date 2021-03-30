import { Employee } from "../../models/employee";

export interface EmployeeRepository {
  insert(employee: Employee): Promise<void>
}