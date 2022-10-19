import { api } from '@/plugins/axios'
import type { IStudent } from '@/models/student'

export default {
    async getStudents(): Promise<any>{
        return api.get<IStudent>('students')
    },

    async findStudent(name: string): Promise<any>{
        return api.get(`students/student?name=${name}`)
    },

    async findStudentById(id: number): Promise<any>{
        return api.get(`students/id/${id}`)
    },

    async sendStudent(body: IStudent): Promise<any>{
        return api.post(body?.id ? `students/${body?.id}` : 'students', body)
    },

    removeStudent(id: string): Promise<any> {
        return api.delete(`students/${id}`)
    }
}