import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'user',
  templateUrl: `app/components/user.component.html`,
  providers: [PostsService]
})
export class UserComponent  { 
	name: string;
	email: string;
	address : address;
	posts : posts;
	hobbies : string[];
	showHobbies: boolean;
	
	constructor(private postsService: PostsService){
		this.name = "john doe",
		this.email = "abc@gmail.com",
		this.address = {
			city: 'boston',
			getcity: function(){
				return "city is " + this.city;
			}
		},
		this.hobbies = ['smoking','drinking','jogging'],
		this.showHobbies = false,
		this.postsService.getPosts().subscribe(posts => {
			this.posts = posts
		})
	}
	toggleHobbies(){
		this.showHobbies = this.showHobbies ? false : true;
	}
	addHobby(hobby){
		this.hobbies.push(hobby)
	}
	removeHobby(index){
		this.hobbies.splice(index,1)
	}
}

interface address {
	//street: string;
	city: string;
	//state: string;
    getcity: () => void;
	
}

interface posts{
	body: string,
	id: number,
	title: string,
	userId: number
}