import axios from 'axios'

const Util = {
  host: 'http://localhost:3000/api/'
  // host: 'http://39.106.25.139:3000/api/'
}

const request = axios.create({
  baseURL: Util.host,
  validateStatus: function (status) {
    return status < 600; // Reject only if the status code is greater than or equal to 500
  }
})

request.interceptors.response.use((response) => {
  if( response.status == 401 ){
    location.hash = '/login'
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default {
  login(data){
    return request.post('/login',data)
  },
  register(data){
    return request.post('/register',data)
  },
  logout(){
    return request.post('/logout')
  },
  getUsers(){
    return request.get('/users')
  },
  deleteUser(data){
    return request.post('/deleteUser',data)
  },
  updateUser(data){
    return request.put('/users',data)
  },
  getPapers(){
    return request.get('/papers')
  },
  createPaper(data){
    return request.post('/createPaper',data)
  },
  getPaper(id){
    return request.get('/paper/'+id)
  },
  updatePaper(data){
    return request.put('/paper', data)
  },
  getCategories(id){
    return request.get('/categories/'+id)
  },
  createCategory(id,data){
    return request.post('/category/'+id, data)
  },
  getCategory(id,query){
    return request.get('/category/'+id+'/'+query)
  },
  updateCategory(id,query,data){
    return request.put('/category/'+id+'/'+query, data)
  }
}
