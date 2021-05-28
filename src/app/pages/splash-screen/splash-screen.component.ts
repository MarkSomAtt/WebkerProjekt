import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CATEGORIES } from 'src/app/database/category.database';
import { Usage } from 'src/app/models/Usage';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  categories = CATEGORIES;
  DataList:Usage[]=[];
  count:number=0;
  clicked=false;
  clicked2=false;

  legfrisseb:Usage| null = null;
   

  constructor(private service: FbBaseService<Usage>,private ft: AngularFirestore) { }


  lekerdezes1(){
    
    this.ft.collection('usages', ref => ref.where("usageType","==","Email")).get().subscribe(res =>{
      res.docs.forEach(us => {
        this.count++;
          
      });

    }
  );
  this.clicked = true;
}

lekerdezes2(){
    
  this.ft.collection('usages', ref => ref.orderBy("usageDate","desc")).get().subscribe(res =>{
    res.docs.forEach(us => {
      this.DataList.push(us.data() as Usage);
      this.legfrisseb=this.DataList[0]; 
    });

  }
);

this.clicked2 = true;
}


}
