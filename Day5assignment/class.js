//user=name,age,e-mail,login,logout
//mod-user + add & remove coins
//admin-mod+ add & delete a course

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user,add){
        user.luCoins+=add;
        console.log(`${user.name} has ${user.luCoins} coins`);
        console.log(user);
    }

    removeCoins(user,remove){
            if (user.luCoins>=remove){
                user.luCoins-=remove;
            }
            else{
                console.log("Re-enter the value to remove");
            }
            console.log(`${user.name} now has ${user.luCoins} coins`);
            console.log(user);
        }
}

class Admin extends Moderator{

    constructor(name,age,email,prop){
        super(name,age,email);
        this.prop=prop;
    }

    addCourse(user,course){
        user.courses.push(course);
        console.log(`Admin has added ${course}`);
        console.log(user);
    }
    
    deleteCourse(user,course){
        user.courses.filter(ele=>ele==course);
        console.log(`Admin has deleted ${course}`);
        console.log(user);
    }

}


let user1 = new User('Deflee',17,'deflle@gmail.com')
let user2 = new User('Kumar',24,'kumar@gmai.com')
let mod = new Moderator('Badri',24,'b@gmail.com','Moderator');
let admin = new Admin('Roy',25,'roy@gmail.com','admin');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.deleteCourse(user1,'Javascript');
user1.login();
admin.login().logout();
user2.login();
mod.addCoins(user1,34);
mod.addCoins(user1,35);
mod.addCoins(user2,50);
mod.removeCoins(user1,65);
user1.logout();
