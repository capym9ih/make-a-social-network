import * as axios from "axios";

const instance= axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "APi-KEY": "8bb59a0e-19c4-41db-8847-6feb24d56d80"
    }
})

export const usersAPI={
    getUsers (currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)
    }
}

//
// export const getUsers2 = (currentPage,pageSize)=> {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(res=>res.data)
// }