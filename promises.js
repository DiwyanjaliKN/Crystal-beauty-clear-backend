function getAllStudents(password){
    const p = new Promise(
      (resolve, reject)=>{
        if(password == "abc"){
          setTimeout(()=>{
            resolve([
              {
                name : "Malith",
                age : 20
              },
              {
                name : "Saman",
                age : 21 
              },
              {
                name : "Kamal",
                age : 22
              }
            ])
          },5000)
        }else{
          setTimeout(()=>{
            reject("Invalid Password")
          },5000)
        }
      }
      
    )
    return p
}

// getAllStudents("abc").then(
//   (res)=>{
//     console.log(res)
//   }
// ).catch(
//   (err)=>{
//     console.log(err)
//   }
// )




async function run(){
  try{
    const data = await getAllStudents("123")
    console.log(data)
  }catch(err){
    console.log(err)
  }
  
}

run()

