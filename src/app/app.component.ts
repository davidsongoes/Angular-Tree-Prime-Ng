import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { NodeService } from './node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-Tree-PrimeNg';
  public items: MenuItem[] = [];
  files: TreeNode[] = [];
  public selectedNode!: TreeNode;
  public displayBasic: boolean = false;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then((files) => {
      this.files = [
        {
          label: 'Modelo de Avaliação',
          children: files,
        },
      ];
    });
    this.items = [
      {
        label: 'Adicionar Registro',
        icon: 'pi pi-plus',
        command: (event) => this.newChildren(this.selectedNode),
      },
      {
        label: 'Editar Registro',
        icon: 'pi pi-pencil',
        command: (event) => this.editnode(this.selectedNode),
      },
      {
        label: 'Remover Registro',
        icon: 'pi pi-trash',
        command: (event) => this.removeNode(this.selectedNode),
      },
    ];
  }

  public newChildren(node: TreeNode) {
    console.log('Adicionar Registro: ', node);
  }
  public editnode(node: TreeNode) {
    console.log('Editar Registro: ', node);
  }

  public removeNode(node: TreeNode) {
    console.log('Remover Registro: ', node);
  }

  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
