import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { AddApplyFormModel } from 'src/app/models/add-apply-model';
import { CreateApplyResponseModel } from 'src/app/models/create-apply-form-response-model';
interface Food {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  foods: Food[] = [
    {value: 0, viewValue: 'İlkokul'},
    {value: 1, viewValue: 'Lise'},
    {value: 2, viewValue: 'Ön Lisans'},
    {value: 2, viewValue: 'Lisans'},
    {value: 2, viewValue: 'Yüksek Lisans'},
    {value: 2, viewValue: 'Doktora'},


  ];

   formData:FormData =new FormData();
  startDate = new Date(1930, 0, 1);
  startDate1=new Date(1930, 0, 1);""
  ApplyModel:AddApplyFormModel=new AddApplyFormModel()
  applyForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient ) {
   
    
  }
  ngOnInit(): void {
    this.createApplyForm();
  
  }
  createApplyForm(){
    this.applyForm=this.formBuilder.group({
    name:["",Validators.required],
    surName:["",Validators.required],
    phone:["",Validators.required],
    email:["",Validators.required],
    driverLicense:["",Validators.required],
    educationState:["",Validators.required],
    experiences:["",Validators.required],
    birthday:["",Validators.required],
    isWhiteCollar:["",Validators.required],
    gender:["",Validators.required],
    militaryServiceDelayTime:["",Validators.required]


    })
  }
  async submit(){
    Object.assign(this.ApplyModel,this.applyForm.value);
    this.ApplyModel.cvFiles=this.formData;
    debugger
    var sending=JSON.stringify(this.ApplyModel)
    var result=JSON.parse(sending);
    this.httpClient.post<CreateApplyResponseModel>("https://localhost:7083/api/Forms",this.ApplyModel,)
    .subscribe(data => {
      debugger;
      this.httpClient.post(`https://localhost:7052/api/?Id=${data.id}`, this.formData, {headers:new HttpHeaders().set("responseType","blob")})
      .subscribe(data => {
        debugger;
        // Sanitized logo returned from backend
      })
     console.log(data)
    },error=>{
      debugger;
      console.log(error)
    })
    
  }














  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    debugger
    for (const droppedFile of files) {

      // Is it a file?
      
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          debugger
          // Here you can access the real file
          
          this.formData.append(file.name, file, droppedFile.relativePath)

          console.log(file);

         
          
        });
      
     
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
 

}
