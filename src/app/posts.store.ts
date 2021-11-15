import { Injectable } from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface DomainDefinitionsState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({name: 'posts'})
export class PostsStore extends EntityStore<any> {
  constructor() {super()}
}