import { Injectable } from '@angular/core';
import {HttpGetConfig, NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {getIDType} from '@datorama/akita';
import { PostsStore } from './posts.store';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService extends NgEntityService<any> {
  constructor(protected store: PostsStore) {
    super(store);
  }
}