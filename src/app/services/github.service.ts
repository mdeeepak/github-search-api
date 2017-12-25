import{Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class gitHubSearch {
    username = 'bradtraversy';
    constructor( private http:Http){
        console.log('gtiHubSerach class intialized');
    }

    getUser(){
        return this.http.get('https://api.github.com/users/' + this.username)
        .map(res=>res.json());

    }

    getRepos(){
        return this.http.get('https://api.github.com/users/' + this.username +'/repos')
        .map(res=>res.json());

    }

    updateUserName = (username:string)=>{
this.username =username;
    }
}