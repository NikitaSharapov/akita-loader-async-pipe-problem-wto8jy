import { Injectable } from "@angular/core";
import { PostsStore } from "./posts.store";

import { QueryEntity } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class PostsQuery extends QueryEntity<any> {

  constructor(protected store: PostsStore) {
    super(store);
  }

}