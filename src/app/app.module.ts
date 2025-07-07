import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Forms support
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Animations (needed for Angular Material)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared module (for components, pipes, directives used across app)
import { SharedModule } from './shared/shared.module';

// HTTP client (for API calls)
import { HttpClientModule } from '@angular/common/http';
import { routingComponents } from './app-routing.module';

// Optional: State management, interceptors, etc. can be added here

@NgModule({
  declarations: [	
    AppComponent,
    routingComponents,    // Other global components
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule, // Custom shared module (reusable UI components/pipes)
  ],
  providers: [
    // Global services, interceptors, guards
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
