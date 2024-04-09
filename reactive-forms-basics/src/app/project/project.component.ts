import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  projectName: FormControl;
  email: FormControl;
  projectStatus: FormControl;
  statusList: string[];
  projectList: {projectName: string; email: string; projectStatus: string;}[];

  constructor() { }

  ngOnInit(): void {
    this.statusList = ['Stable', 'Critical', 'Finished'];
    this.projectList = [];
    this.onInitProjectForm();
  }

  onInitProjectForm() {
    this.projectName = new FormControl(null, Validators.required, this.invalidProjectAsync);
    this.email = new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
    this.projectStatus = new FormControl(null, Validators.required);

    this.projectForm = new FormGroup({
      projectName: this.projectName,
      email: this.email,
      projectStatus: this.projectStatus
    });
  }

  onSubmit() {
    const project = {
      projectName: this.projectForm.value.projectName,
      email: this.projectForm.value.email,
      projectStatus: this.projectForm.value.projectStatus
    };

    this.projectList.push(project);
    this.projectForm.reset();
  }

  invalidProject(control: FormControl): ValidationErrors | null {
    if (control.value === 'Test' || control.value === 'test') {
      return {invalidProject: true};
    }

    return null;
  }

  invalidProjectAsync(control: FormControl): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test' || control.value === 'test') {
          resolve({invalidProject: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

}
