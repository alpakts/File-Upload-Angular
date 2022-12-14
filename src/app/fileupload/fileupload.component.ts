import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  /**
   *
   */
  constructor(private htpp:HttpClient) {
    
  }
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          
          const formData = new FormData()
          formData.set(file.name, file, droppedFile.relativePath)
          console.log(formData)
          debugger;
          var json=JSON.stringify(formData);
          console.log("sadsad")
          this.htpp.post(`https://localhost:7083/api/Forms/uploadCv?Id=84DCD8C6-7F11-410A-A9ED-E2831A1282AD`, formData, {headers:new HttpHeaders().set('responseType', 'blob')})
          .subscribe(data => {
            debugger
          },er=>{
            console.log(er)
          })
         

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