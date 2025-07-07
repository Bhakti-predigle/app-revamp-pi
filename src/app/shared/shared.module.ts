import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Example shared components, directives, and pipes


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
    // MatButtonModule,
    // MatIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatIconModule,
    // SpinnerComponent,
  ],
})
export class SharedModule {}
