function add(a,b){
    console.log(a+b)
}

add(10,50)
add(50,20)

let display = function(){
    console.log("Hello Display")
}

display()

let addArrow = (a,b) => console.log(a+b)

addArrow(10,20)

let arr = [5,'hello' , true , [2,5,6] , {name : 'joe'}]
console.log(arr[3])

arr.push(30)
console.log(arr)
arr.unshift(1)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(2,2)
console.log(arr)
console.log(arr.length)

let obj = {
    name : "joe",
    age : 25,
    city : 'Chennai',
    addFunc : ()=>{
        return "Hello"
    }
}
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj.addFunc())

obj.state = 'Tamilnadu'
obj['salary'] = 50000
console.log(obj)

delete obj.state
delete obj['salary']
console.log(obj)




