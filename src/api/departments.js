import request from 'axios'

class departmentsApi {
    static getAllDepartments() {
        return request.get('http://axioma-react/departments').then(response => {
            return response.data
        })
    }

    static editDepartment(department) {
        return request.put('http://axioma-react/departments/' + department.id,
            {
                'id': department.id,
                'name': department.name,
                'description': department.description
            }
        ).then(response => {
            return response.data[0]
        })
    }

    static addDepartment(department) {
        return request.post('http://axioma-react/departments',
            {
                'name': department.name,
                'description': department.description

            }
        ).then(response => {
            return response.data[0]
        })
    }

    static deleteDepartment(department_id) {
        return request.delete('http://axioma-react/departments/' + department_id
        ).then(response => {
            return response.data[0]
        })
    }
}

export default departmentsApi