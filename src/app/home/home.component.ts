import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'ng17app-demo';
  name = 'Phoutthasone';
  work ='UXOLAO';
  mypic= 'assets/images/blu3.png';
  data ={
    fullname:'Phoutthasone Vongxay'
  }
  
  num_a = 0
  num_b = 0
  


  //สร้าง Function กดปุ่ม
  onClick(){
    alert('Hello Phoutthasone');
  }

}
