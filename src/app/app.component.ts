import { Component, OnInit } from '@angular/core';
import { Folder } from './folder.class/folder';
import { FolderService } from './folder.service/folder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recursion';
  folders: Folder[];
  getFolders(): void {
    this.folderService.getFolders()
      .subscribe((folders) => this.folders = folders);
  }
  printFolders(): void {
    console.log(this.folders);
  }
  constructor(private folderService: FolderService) { }
  ngOnInit() {
    this.getFolders();
  }
}
