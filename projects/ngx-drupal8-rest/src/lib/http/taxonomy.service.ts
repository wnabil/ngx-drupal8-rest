import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, TaxonomyTermEntity, TaxonomyVocabularyEntity } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaxonomyService extends BaseService {

  /**
   * Implement resource /taxonomy/term/{taxonomy_term} GET
   * @param tid the term id
   */
  get(tid: number): Observable<TaxonomyTermEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [tid]
    };
    return this.request(httpOptions, '/taxonomy/term/{taxonomy_term}');
  }

  /**
   * Implement resource /taxonomy/term: POST
   * @param term term object to create
   */
  create(term: TaxonomyTermEntity): Observable<TaxonomyTermEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/taxonomy/term', term);
  }

  /**
   * Implement resource /taxonomy/term/{taxonomy_term}: PATCH
   * @param tid node id to update
   * @param term term object with required values
   */
  update(tid: number, term: TaxonomyTermEntity): Observable<TaxonomyTermEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [tid]
    };
    return this.request(httpOptions, '/taxonomy/term/{taxonomy_term}', term);
  }

  /**
   * Implement resource /taxonomy/term/{taxonomy_term}: DELETE
   * @param tid term id to delete
   */
  delete(tid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [tid]
    };
    return this.request(httpOptions, '/taxonomy/term/{taxonomy_term}');
  }

  /**
   * Implement /entity/taxonomy_vocabulary/{taxonomy_vocabulary}: Get
   * @param machineName vocabulary machine name like tags
   */
  vocabulary(machineName: string): Observable<TaxonomyVocabularyEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [machineName]
    };
    return this.request(httpOptions, '/entity/taxonomy_vocabulary/{taxonomy_vocabulary}');
  }

}
