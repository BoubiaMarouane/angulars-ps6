import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.html',
  styleUrls: ['./registerpage.css']
})
export class RegisterComponent {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectLogin(): void {
    this.router.navigateByUrl('/login');
  }


}
