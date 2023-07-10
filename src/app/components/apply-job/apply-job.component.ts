import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent {
  applyJobForm = this.fb.group({
    fullName: [null, Validators.required],
    email: [null, Validators.required],
    contact: [null, Validators.required],
    postAppliedFor: [null, Validators.required],
    portfolio: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
