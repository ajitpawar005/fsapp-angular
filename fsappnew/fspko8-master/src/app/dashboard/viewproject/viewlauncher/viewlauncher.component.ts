import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../../../shared';
import { AuthGuard } from '../../../shared';


@Component({

  templateUrl: './viewlauncher.component.html',
  styleUrls: ['./viewlauncher.component.scss']
})

export class ViewproLauncherComponent implements OnInit {
  constructor(private router: Router,
    private route: ActivatedRoute,    
    private userService: UserService) 
  {
    console.log("this.route:-",this.route);
  }

  isAuthenticated: boolean;
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    console.log("Viewproject launcher component");
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        // set the article list accordingly
        if (authenticated) {
        console.log("User Authenticated");
        }
      }
    );
  }
}