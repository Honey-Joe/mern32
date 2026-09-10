function display(a,callback){
    console.log(a , callback())
}

display(10,function(){
    return 'hello'
})

//Schedulers - setInterval , setTimeout

var setI = setInterval(()=>{
    console.log('hello')
} , 2000)

setTimeout(()=>{
    clearInterval(setI)
    console.log('Hello after 6 sec')
} , 6000)