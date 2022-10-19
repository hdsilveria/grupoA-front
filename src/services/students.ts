import { api } from '@/plugins/axios'
import type { IStudent } from '@/models/student'

export default {
    async getStudents(): Promise<any>{
        return api.get<IStudent>('/students')
    }
}