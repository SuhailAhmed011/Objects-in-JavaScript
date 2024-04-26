let getUserDetails = {
    username: 'suhail Ahmed',
    age: 18,
    isSignedIn: true,

    getData: function(){
        console.log(`Username: ${this.username}`)
        console.log(`isSignedIn: ${this.isSignedIn}`)
    }
}

console.log(getUserDetails.getData())
console.log(this)