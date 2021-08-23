import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { QuizEntity, HttpOptions, QuizFeedbackTypeEntity, QuizQuestionEntity } from '../models';

@Injectable()
export class QuizService extends BaseService {

  /**
   * Implements /quiz/{quiz}: GET
   * Returns quiz entity
   * @param qid the quiz entity ID
   */
  get(qid: number): Observable<QuizEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        '_format': 'json'
      },
      frags: [qid]
    };

    return this.request(httpOptions, '/quiz/{quiz}');
  }

  /**
   * Implements /entity/quiz: POST
   * Returns quiz created entity
   * @param quiz the quiz entity with updated values
   */
   create(quiz: QuizEntity): Observable<QuizEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        '_format': 'json'
      },
    };

    return this.request(httpOptions, '/entity/quiz', quiz);
  }

  /**
   * Implements /quiz/{quiz}: PATCH
   * Returns quiz updated entity
   * @param qid the quiz entity ID
   * @param quiz the quiz entity with updated values
   */
   update(qid: number, quiz: QuizEntity): Observable<QuizEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        '_format': 'json'
      },
      frags: [qid]
    };

    return this.request(httpOptions, '/quiz/{quiz}', quiz);
  }

  /**
   * Implements /quiz/{quiz}: DELETE
   * @param qid the quiz entity ID
   */
   delete(qid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        '_format': 'json'
      },
      frags: [qid]
    };

    return this.request(httpOptions, '/quiz/{quiz}');
  }

  /**
   * Implements /entity/quiz_feedback_type/{quiz_feedback_type}: GET
   * Returns quiz feedback type
   * @param feedbackMachineName the feedback type machine name
   */
   getFeedbackType(feedbackMachineName: string): Observable<QuizFeedbackTypeEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        '_format': 'json'
      },
      frags: [feedbackMachineName]
    };

    return this.request(httpOptions, '/entity/quiz_feedback_type/{quiz_feedback_type}');
  }

  // Question

  /**
   * Implements /quiz-question/{quiz_question}: GET
   * Returns quiz question entity
   * @param qqid the quiz question entity ID
   */
   getQuestion(qqid: number): Observable<QuizQuestionEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        '_format': 'json'
      },
      frags: [qqid]
    };

    return this.request(httpOptions, '/quiz-question/{quiz_question}');
  }

  /**
   * Implements /entity/quiz_question: POST
   * Returns question created entity
   * @param question the quiz question entity to create
   */
   createQuestion(question: QuizQuestionEntity): Observable<QuizQuestionEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        '_format': 'json'
      },
    };

    return this.request(httpOptions, '/entity/quiz_question', question);
  }

  /**
   * Implements /quiz-question/{quiz_question}: PATCH
   * Returns question updated entity
   * @param qqid the quiz question entity ID
   * @param question the quiz question entity with updated values
   */
   updateQuestion(qqid: number, question: QuizQuestionEntity): Observable<QuizQuestionEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        '_format': 'json'
      },
      frags: [qqid]
    };

    return this.request(httpOptions, '/quiz-question/{quiz_question}', question);
  }

  /**
   * Implements /quiz-question/{quiz_question}: DELETE
   * @param qqid the question entity ID
   */
   deleteQuestion(qqid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        '_format': 'json'
      },
      frags: [qqid]
    };

    return this.request(httpOptions, '/quiz-question/{quiz_question}');
  }

  // /**
  //  * Implements /entity/quiz_feedback_type/{quiz_feedback_type}: GET
  //  * Returns quiz feedback type
  //  * @param feedbackMachineName the type machine name
  //  */
  //  getQuestionFeedbackType(feedbackMachineName: string): Observable<QuizFeedbackTypeEntity> {
  //   const httpOptions: HttpOptions = {
  //     method: 'get',
  //     params: {
  //       '_format': 'json'
  //     },
  //     frags: [feedbackMachineName]
  //   };

  //   return this.request(httpOptions, '/entity/quiz_feedback_type/{quiz_feedback_type}');
  // }

  // Result
}
