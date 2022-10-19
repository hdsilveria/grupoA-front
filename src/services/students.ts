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
        return api.get(`students/${id}`)
    }
}