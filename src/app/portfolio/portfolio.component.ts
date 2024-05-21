import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  typescript: boolean = false;
  java: boolean = false;
  javascript: boolean = false;
  nodejs: boolean = false;
  react: boolean = false;
  angular: boolean = false;
  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Sai Smita - Portfolio");
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = []
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    if (this.angular || this.java || this.javascript || this.nodejs || this.react) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilter() {
    this.typescript = false; 
    this.java  = false; 
    this.javascript = false; 
    this.nodejs = false; 
    this.react = false; 
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
   
}
