interface User{
    userName:string;
    password:string;
    confirmPw:string;

}

let user1:User = {userName:"Miguel", password:"123", confirmPw:"123"}

console.log(user1);
console.log(user1.userName)

interface Abord {
    abordT():void;
}

let plane:Abord = {
    abordT: function () {
        console.log("abording");
    }
}
plane.abordT();