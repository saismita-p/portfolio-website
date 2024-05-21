import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle("Sai Smita - Resume");
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/resume_sai_smita.pdf');
    link.setAttribute('download', 'resume_sai_smita.pdf');
    link.click();
    link.remove();
  }
}
