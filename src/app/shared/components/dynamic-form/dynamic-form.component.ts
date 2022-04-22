import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoutingService } from 'src/app/shared/routing/routing.service';
import { FormBase } from './form-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() title?: any;
  @Input() dataHeaders?: any;

  public createForm: FormGroup;

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.dataHeaders !== undefined) {
      this.toFormGroup(this.dataHeaders);
    }
  }

  toFormGroup(forms: FormBase<string>[] ): void {
    const group: any = {};

    forms.forEach(form => {
      group[form.key] = form.required ? new FormControl(form.value || '', Validators.required)
        : new FormControl(form.value || '');
    });
    this.createForm = new FormGroup(group);
  }

  refreshForm(): void {
    this.createForm.reset();
    Object.keys(this.createForm.controls).forEach(key => {
      this.createForm.controls[key].setErrors(null);
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      // this.classesService.setData(this.createForm.value, "create");
      this.refreshForm();
    }
  }

  changeRoute(name: string): void {
    this.routingService.changeRoute(name);
  }

  back() {
    this.changeRoute(this.routingService.getCurrentRoute().split('/')[1]);
  }

}
