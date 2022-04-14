export default function ({$axios,$storage,redirect}){
  $axios.onRequest(config =>{
    config.headers.common['Authorization'] = 'Bearer' + $storage.getUniversal('token'); // getLocalStorage chạy ở clint getUniversal chạy cả clint và be
  })

  $axios.onRequest(response =>{
    console.log('onResponse',response)
    return response.data
  })

  $axios.onError(error =>{
    const code = parseInt(error.response && error.response.status)
    if(code==400){
      return Promise.reject(error.response.data)
    }
    if(code == 401){
      // chuyển đến trang login
      redirect('/login');
    }
  })
}
