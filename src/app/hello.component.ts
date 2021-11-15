import { Component, Input, OnInit } from "@angular/core";
import { PostsService } from "./posts.service";
import { PostsQuery } from "./posts.query";

import {
  NgEntityServiceLoader,
  NgEntityServiceNotifier
} from "@datorama/akita-ng-entity-service";

@Component({
  selector: "hello",
  template: `
    <ng-container *ngIf="(loaders.get$ | async)">
      Loading...
    </ng-container>

    <ng-container *ngIf="(selectAll$ | async) as data">
      {{ data | json }}
    </ng-container>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  loaders = this.loader.loadersFor("posts");

  selectAll$ = this.query.selectAll();

  constructor(
    private ps: PostsService,
    private query: PostsQuery,
    private loader: NgEntityServiceLoader,
    private notifier: NgEntityServiceNotifier
  ) {}

  ngOnInit(): void {
    this.notifier.action$.subscribe(action => {
      console.log('test', action);
    });
    this.loaders.get$.subscribe(console.log);
    this.ps.get().subscribe();
  }
}
