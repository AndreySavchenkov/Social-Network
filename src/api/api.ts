import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'fd48e7c0-1687-4982-b2f6-85d6861b1aef'
    },
})

export const usersAPI = {
    getUsers(currentPage:number = 1, pageSize: number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getAuth(){
        return instance.get(`auth/me`)
    },
    follow(id: number){
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`)
    }
}



