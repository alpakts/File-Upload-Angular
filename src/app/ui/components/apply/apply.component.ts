import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { AddApplyFormModel } from 'src/app/models/add-apply-model';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  foods: Food[] = [
    {value: '0', viewValue: 'İlkokul'},
    {value: '1', viewValue: 'Lise'},
    {value: '2', viewValue: 'Ön Lisans'},
    {value: '2', viewValue: 'Lisans'},
    {value: '2', viewValue: 'Yüksek Lisans'},
    {value: '2', viewValue: 'Doktora'},


  ];
  startDate = new Date(1930, 0, 1);
  ApplyModel:AddApplyFormModel=new AddApplyFormModel()
  applyForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient) {
   
    
  }
  ngOnInit(): void {
    this.createApplyForm();
  
  }
  createApplyForm(){
    this.applyForm=this.formBuilder.group({
    name:["",Validators.required],
    surname:["",Validators.required],
    phone:["",Validators.required],
    email:["",Validators.required],
    driver:["",Validators.required],
    education:["",Validators.required],
    experince:["",Validators.required],
    birthday:["",Validators.required],

    })
  }
  async submit(){
    
    Object.assign(this.ApplyModel,this.applyForm);
    this.httpClient.post("url",this.ApplyModel)
    debugger;
  }














  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    debugger
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
 

}
