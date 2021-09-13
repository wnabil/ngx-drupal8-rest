import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import {
  QuizEntity,
  HttpOptions,
  QuizFeedbackTypeEntity,
  QuizQuestionEntity,
  EntityBundleType,
  QuizQuestionRelationshipEntity,
  QuizResultEntity,
  QuizResultAnswerEntity,
} from '../models';

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
        _format: 'json',
      },
      frags: [qid],
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
        _format: 'json',
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
        _format: 'json',
      },
      frags: [qid],
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
        _format: 'json',
      },
      frags: [qid],
    };

    return this.request(httpOptions, '/quiz/{quiz}');
  }

  /**
   * Implements /entity/quiz_type/{quiz_type}: GET
   * Returns quiz type
   * @param quizMachineName the quiz type machine name
   */
  getType(quizMachineName: string): Observable<EntityBundleType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [quizMachineName],
    };

    return this.request(httpOptions, '/entity/quiz_type/{quiz_type}');
  }

  /**
   * Implements /entity/quiz_feedback_type/{quiz_feedback_type}: GET
   * Returns quiz feedback type
   * @param feedbackMachineName the feedback type machine name
   */
  getFeedbackType(
    feedbackMachineName: string
  ): Observable<QuizFeedbackTypeEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [feedbackMachineName],
    };

    return this.request(
      httpOptions,
      '/entity/quiz_feedback_type/{quiz_feedback_type}'
    );
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
        _format: 'json',
      },
      frags: [qqid],
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
        _format: 'json',
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
  updateQuestion(
    qqid: number,
    question: QuizQuestionEntity
  ): Observable<QuizQuestionEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        _format: 'json',
      },
      frags: [qqid],
    };

    return this.request(
      httpOptions,
      '/quiz-question/{quiz_question}',
      question
    );
  }

  /**
   * Implements /quiz-question/{quiz_question}: DELETE
   * @param qqid the question entity ID
   */
  deleteQuestion(qqid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        _format: 'json',
      },
      frags: [qqid],
    };

    return this.request(httpOptions, '/quiz-question/{quiz_question}');
  }

  /**
   * Implements /entity/quiz_question_type/{quiz_question_type}: GET
   * Returns quiz question type
   * @param feedbackMachineName the type machine name
   */
  getQuestionType(typeMachineName: string): Observable<EntityBundleType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [typeMachineName],
    };

    return this.request(
      httpOptions,
      '/entity/quiz_question_type/{quiz_question_type}'
    );
  }

  // Relationship

  /**
   * Implements /quiz-question-relationship/{quiz_question_relationship}: GET
   * Returns quiz question relationship entity
   * @param qqrid the quiz question relationship entity ID 'question id'
   */
  getQuestionRelationship(
    qqrid: number
  ): Observable<QuizQuestionRelationshipEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [qqrid],
    };

    return this.request(
      httpOptions,
      '/quiz-question-relationship/{quiz_question_relationship}'
    );
  }

  /**
   * Implements /quiz-question-relationship/{quiz_question_relationship}: POST
   * Returns quiz question relationship created entity
   * @param questionRelationship the quiz question relationship entity to create
   */
  createQuestionRelationship(
    questionRelationship: QuizQuestionRelationshipEntity
  ): Observable<QuizQuestionRelationshipEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        _format: 'json',
      },
    };

    return this.request(
      httpOptions,
      '/entity/quiz_question_relationship',
      questionRelationship
    );
  }

  /**
   * Implements /quiz-question-relationship/{quiz_question_relationship}: PATCH
   * Returns quiz question relationship updated entity
   * @param qqrid the quiz question relationship entity ID 'question id'
   * @param questionRelationship the quiz question relationship updated entity
   */
  updateQuestionRelationship(
    qqrid: number,
    questionRelationship: QuizQuestionRelationshipEntity
  ): Observable<QuizQuestionRelationshipEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        _format: 'json',
      },
      frags: [qqrid],
    };

    return this.request(
      httpOptions,
      '/quiz-question-relationship/{quiz_question_relationship}',
      questionRelationship
    );
  }

  /**
   * Implements /quiz-question-relationship/{quiz_question_relationship}: DELETE
   * @param qqrid the quiz question relationship entity ID 'question id'
   */
  deleteQuestionRelationship(qqrid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        _format: 'json',
      },
      frags: [qqrid],
    };

    return this.request(
      httpOptions,
      '/quiz-question-relationship/{quiz_question_relationship}'
    );
  }

  // Result

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}: GET
   * Returns quiz result entity
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   */
  getResult(qid: number, qrid: number): Observable<QuizResultEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid],
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}');
  }

  /**
   * Implements /entity/quiz_result: POST
   * Returns quiz result created entity
   * @param result the quiz result entity
   */
  createResult(result: QuizResultEntity): Observable<QuizResultEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        _format: 'json',
      },
    };

    return this.request(httpOptions, '/entity/quiz_result', result);
  }

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}: PATCH
   * Returns quiz result updated entity
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   * @param result the quiz result updated entity
   */
   updateResult(qid: number, qrid: number, result: QuizResultEntity): Observable<QuizResultEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid]
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}', result);
  }

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}: DELETE
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   */
   deleteResult(qid: number, qrid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid]
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}');
  }

  /**
   * Implements /entity/quiz_result_type/{quiz_result_type}: GET
   * Returns quiz result type
   * @param resultMachineName the type machine name
   */
   getResultType(resultMachineName: string): Observable<EntityBundleType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [resultMachineName],
    };

    return this.request(
      httpOptions,
      '/entity/quiz_result_type/{quiz_result_type}'
    );
  }

  // Result answer: interfaces TODO

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}: GET
   * Returns quiz result answer entity
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   * @param qrid the quiz result answer entity ID
   */
   getResultAnswer(qid: number, qrid: number, raid: number): Observable<any> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid, raid],
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}');
  }

  /**
   * Implements /entity/quiz_result_answer: POST
   * Returns quiz result answer created entity
   * @param answer the quiz result answer entity
   */
  createResultAnswer(answer: any): Observable<any> {
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        _format: 'json',
      },
    };

    return this.request(httpOptions, '/entity/quiz_result_answer', answer);
  }

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}: PATCH
   * Returns quiz result updated entity
   * Returns quiz result answer entity
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   * @param qrid the quiz result answer entity ID
   * @param answer the quiz result answer entity
   */
   updateResultAnswer(qid: number, qrid: number, raid: number, answer: any): Observable<any> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid, raid]
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}', answer);
  }

  /**
   * Implements /quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}: DELETE
   * @param qid the quiz entity ID
   * @param qrid the quiz result entity ID
   * @param qrid the quiz result answer entity ID
   */
   deleteResultAnswer(qid: number, qrid: number, raid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      params: {
        _format: 'json',
      },
      frags: [qid, qrid, raid]
    };

    return this.request(httpOptions, '/quiz/{quiz}/result/{quiz_result}/answer/{quiz_result_answer}');
  }
}
