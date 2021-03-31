import { Employee, employeModelFactory } from '../../models/employee'
import { CreateEmployeService } from './create-employee-service'
import { EmployeeRepository } from './protocols'

const makeSut = () => {
  class EmployeeRepositoryMock implements EmployeeRepository {
    async insert (employee: Employee): Promise<void> {}
  }
  const employeeRepoInstance = new EmployeeRepositoryMock()
  return {
    sut: new CreateEmployeService(employeeRepoInstance),
    employeeRepositorySpy: employeeRepoInstance
  }
}

describe('CreateEmployeeService', () => {
  test('should call repository and create an new employee', async () => {
    const employee = employeModelFactory({
      name: {
        firstName: 'gabriel',
        lastName: 'navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: 'poll mc district'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const { sut, employeeRepositorySpy } = makeSut()
    const createEmployeServiceSpy = jest.spyOn(employeeRepositorySpy, 'insert')
    await sut.handle(employee)
    expect(createEmployeServiceSpy).toHaveBeenCalledWith(employee)
  })

  test('should throw error if repository that create an new employee throws', () => {
    const employee = employeModelFactory({
      name: {
        firstName: 'gabriel',
        lastName: 'navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: 'poll mc district'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const { sut, employeeRepositorySpy } = makeSut()
    jest.spyOn(employeeRepositorySpy, 'insert').mockImplementationOnce(() => {
      throw new Error()
    })
    const promise = sut.handle(employee)
    expect(promise).rejects.toEqual(new Error())
  })
})
