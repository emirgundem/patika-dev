const fs = require('fs');



//Dosyayı Okuyoruz
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) console.log(err)
    console.log(data);
})


//Dosyayı Güncelliyoruz
fs.appendFile('employees.json','{This is new line}',(err,data)=>{
    if(err) console.log(err)
    console.log('Updated file');
})


fs.unlink('employees.json',(err,data)=>{
    if(err) console.log(err)
    console.log('deleted file');
})






