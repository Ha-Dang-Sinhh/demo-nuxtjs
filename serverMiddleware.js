export default (req, res, next) =>{
  if(req.url.includes('/test')){
    // res.status(301).redirect('/home');
    res.writeHead(301,{'Location':'/home'}); //redirect về trang chủ
    res.end(); // kết thúc request
  }else if(req.url.includes('/about')){
    res.writeHead(200,{'Content-Type' : 'application/json'});
    // res.send(JSON.stringify({
    //   name:'Nguyễn Văn A',
    //   age:20
    // }));
    const json = JSON.stringify({
        name:'Nguyễn Văn A',
        age:20
      });
    res.end(json);
  }else {
    next(); // điều hướng về trang ban đàu của request
  }
};
