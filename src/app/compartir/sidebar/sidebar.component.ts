import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: []
})
export class SidebarComponent implements OnInit {


    constructor(public auth: AuthService) { }

    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }

}
