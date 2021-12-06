import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY':'8dabf8d5-133c-401a-b761-a0dd6d5b8f9a'
    },
})

export const usersAPI = {
    getUsers(currentPage:number = 1, pageSize: number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id: number){
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId: string){
      return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



