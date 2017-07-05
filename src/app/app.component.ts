import { Input, Component,NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@NgModule({
    imports: [NgbModule]
})
export class AppComponent {
constructor(private router: Router,private slimLoadingBarService: SlimLoadingBarService) {    
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
           this.startLoading();
        }
        if (event instanceof NavigationEnd) {
            setTimeout(()=>{
                this.completeLoading();
            },500)
           
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            console.log('Cancel');
        }
        if (event instanceof NavigationError) {
           console.log('Error');
        }
    }
    
      startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }
  }