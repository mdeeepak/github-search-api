import { Component } from '@angular/core';
import {gitHubSearch} from '../services/github.service';



@Component({
  selector: 'git-hub',
  templateUrl: './github.component.html',
  providers:[gitHubSearch]
})
export class gitHubComponent  { 
    user:any;
    repos:any;
    username:string;
    constructor(private _gitHubSerach:gitHubSearch){
        this._gitHubSerach.getUser().subscribe((user)=>{
            this.user = user;
            console.log(this.user);
        })
        this._gitHubSerach.getRepos().subscribe((repos)=>{
            this.repos = repos;
            console.log(this.repos);
        })
    }
    search = ()=>{
        if(this.username){
        this._gitHubSerach.updateUserName(this.username);
        this._gitHubSerach.getUser().subscribe((user)=>{
            this.user = user;
            console.log(this.user);
        })
        this._gitHubSerach.getRepos().subscribe((repos)=>{
            this.repos = repos;
            console.log(this.repos);
        })
    }
    }
 }