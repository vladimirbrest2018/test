import request from 'axios'

class employeesApi {
    static getAllEmployees() {
        return request.get('http://axioma-react/employees').then(response => {
            return response.data
        })
    }

    static editEmployee(employee) {
        return request.put('http://axioma-react/employees/' + employee.id,
            {
                'id': employee.id,
                'name': employee.name,
                'surname': employee.surname,
                'pay': employee.pay,
                'description': employee.description,
                'department_id': employee.department_id
            }
        ).then(response => {
            return response.data[0]
        })
    }

    static addEmployee(employee) {
        return request.post('http://axioma-react/employees',
            {
                'name': employee.name,
                'surname': employee.surname,
                'pay': employee.pay,
                'description': employee.description,
                'department_id': employee.department_id
            }
        ).then(response => {
            return response.data[0]
        })
    }

    static deleteEmployee(employee_id) {
        return request.delete('http://axioma-react/employees/' + employee_id
        ).then(response => {
            return response.data[0]
        })
    }
}

export default employeesApi