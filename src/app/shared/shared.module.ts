import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Example shared components, directives, and pipes
import { WorkflowBuilderComponent } from "@predigle/micro/pi-flow";
import { TopNavbarComponent } from "@predigle/micro/component-ui";


// Angular Material example (optional)
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    // SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorkflowBuilderComponent,
    TopNavbarComponent,
    // MatButtonModule,
    // MatIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    WorkflowBuilderComponent,
    TopNavbarComponent,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatIconModule,
    // SpinnerComponent,
  ],
})
export class SharedModule {}
