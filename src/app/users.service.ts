import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
providedIn: 'root'
})
export class UsersService {


constructor() { }
apiurl ='http://localhost/netlogapi/users.php';

async login(username,password){
let result= await axios.post(this.apiurl,{
Apikey: 'NetLogApi',
fn: 'Login',
users_name: username,
users_password: password
});

return result.data;

}
async getAllUsers(){
let result= await axios.post(this.apiurl,{
Apikey: 'NetLogApi',
fn: 'selectAll'

});
return result.data;

}
async insertUser(newuser){
newuser.Apikey = 'NetLogApi';
newuser.fn = 'Insert';
//console.log(newuser);
let result = await axios.post(this.apiurl,newuser);
return result.data;
}

async updateUser(edituser){
    edituser.Apikey = 'NetLogApi';
    edituser.fn = 'Update';
    let result = await axios.post(this.apiurl,edituser);
    return result.data;
    }
}
