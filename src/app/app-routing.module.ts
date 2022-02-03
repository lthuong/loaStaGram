import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AboutComponent } from "./others/about/about.component";
import { FeedComponent } from "./components/feed/feed.component";

const routes : Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'feed', component: FeedComponent},
    { path: '', redirectTo: '/feed', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }