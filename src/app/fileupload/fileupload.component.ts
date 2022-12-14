import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  constructor(private htpp:HttpClient) {
    
  }
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData:FormData=new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name,_file,file.relativePath);
      });
    };
    debugger;
    this.htpp.post("https://localhost:7052/api/Products/Upload?Id=84DCD8C6-7F11-410A-A9ED-E2831A1282AD",fileData, {headers:new HttpHeaders().set("responseType","blob") }).subscribe(response=>{
      debugger;
    },error=>{
      console.log(error)
    })
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
}