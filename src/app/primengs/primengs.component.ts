import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'app-primengs',
    templateUrl: './primengs.component.html',
    styleUrls: ['./primengs.component.css'],
     providers: [ConfirmationService]
})
export class PrimengsComponent implements OnInit {
    cols: any[];
    users: any[];
    displayDialog: boolean;
    user: any;
    msgs: any[] = [];
    constructor(private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.users = [
            {id: 1, name: 'Aman', email: 'amanssit@gmail.com', city: 'saharanpur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'},
            {id: 2, name: 'Sonu', email: 'sonu@gmail.com', city: 'jaipur'}
        ];

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'email', header: 'Email'},
            {field: 'city', header: 'City'}
        ];
    }
    editUser(user) {
        console.log('User data', user);
        this.user = user;
        this.displayDialog = true;
    }
    deleteUser(user) {
        console.log(user);
        
           this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'error', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

}
