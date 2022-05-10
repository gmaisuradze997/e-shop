import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@e-shop/ui';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];
@NgModule({
    declarations: [AppComponent, HomeComponent, ProductListComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
