import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canva-main',
  templateUrl: './canva-main.component.html',
  styleUrls: ['./canva-main.component.css']
})
export class CanvaMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedNode: any = null;

 nodeTypes = [
      {
        name: 'Category 1',
        image: 'https://storybook-dev.predigle.com/assets/datasource.svg',
      },
      {
        name: 'Category 2',
        image: 'https://storybook-dev.predigle.com/assets/models.svg',
      },
      {
        name: 'Category 3',
        image: 'https://storybook-dev.predigle.com/assets/functions.svg',
      },
      {
        name: 'Category 4',
        image: 'https://storybook-dev.predigle.com/assets/processors.svg',
      },
      {
        name: 'Category 5',
        image: 'https://storybook-dev.predigle.com/assets/db_icon.svg',
      },
    ];

  nodes = [
      {
        id: '1',
        name: 'Node 1',
        nodeType: 'Category 1',
        image: 'https://precog-dev.predigle.com/assets/icons/excel.svg',
        html: `<div class="flex-center gap-md node-typography">
        <img draggable="false" width="40px" height="40px" src="https://precog-dev.predigle.com/assets/icons/excel.svg"/>Node 1
      </div>`,
      },
      {
        id: '2',
        name: 'Node 2',
        nodeType: 'Category 1',
        image: 'https://precog-dev.predigle.com/assets/icons/csv.svg',
      },
      {
        id: '3',
        name: 'Node 3',
        nodeType: 'Category 1',
        image: 'https://precog-dev.predigle.com/assets/icons/sql.svg',
      },
      {
        id: '4',
        name: 'Node 4',
        nodeType: 'Category 2',
        image: 'https://storybook-dev.predigle.com/assets/datasource.svg',
      },
      {
        id: '5',
        name: 'Node 5',
        nodeType: 'Category 3',
        image: 'https://storybook-dev.predigle.com/assets/datasource.svg',
      },
      {
        id: '6',
        name: 'Node 6',
        nodeType: 'Category 4',
        image: 'https://storybook-dev.predigle.com/assets/datasource.svg',
      },
    ];

  onNodeSelected(node: any) {
    this.selectedNode = node;
    console.log('selected node: ', this.selectedNode);
  }

  onNodeConfigChange(nodeId: any){
    // Here you can handle the updated config as needed
    // For example, you might want to send it to a server or update the UI
  }

}
