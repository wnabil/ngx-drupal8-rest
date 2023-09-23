import {
  EntityBundleType,
  FieldBoolean,
  FieldEntityReference,
  FieldEntityReferenceUrl,
  FieldNumber,
  FieldText,
  FieldTextArea,
  ValueEndValue,
} from './field';

export interface QuizEntity {
  title: FieldText[];
  type: FieldEntityReferenceUrl[];
  body: FieldTextArea[];
  qid?: FieldNumber[] | any;
  uuid?: FieldText[] | any;
  vid?: FieldNumber[] | any;
  revision_created?: FieldNumber[] | any;
  revision_user?: FieldEntityReferenceUrl[] | any;
  revision_log_message?: FieldText[] | any;
  status?: FieldBoolean[] | any;
  uid?: FieldEntityReferenceUrl[] | any;
  created?: FieldNumber[] | any;
  changed?: FieldNumber[] | any;
  number_of_random_questions?: FieldNumber[] | any;
  max_score_for_random?: FieldNumber[] | any;
  pass_rate?: FieldNumber[] | any;
  summary_pass?: FieldTextArea[] | any;
  summary_default?: FieldTextArea[] | any;
  randomization?: FieldNumber[] | any;
  backwards_navigation?: FieldBoolean[] | any;
  keep_results?: FieldNumber[] | any;
  repeat_until_correct?: FieldBoolean[] | any;
  quiz_date?: ValueEndValue[] | any;
  takes?: FieldNumber[] | any;
  show_attempt_stats?: FieldBoolean[] | any;
  time_limit?: FieldNumber[] | any;
  max_score?: FieldNumber[] | any;
  allow_skipping?: FieldBoolean[] | any;
  allow_resume?: FieldBoolean[] | any;
  allow_jumping?: FieldBoolean[] | any;
  allow_change?: FieldBoolean[] | any;
  allow_change_blank?: FieldBoolean[] | any;
  build_on_last?: FieldText[] | any;
  show_passed?: FieldBoolean[] | any;
  mark_doubtful?: FieldBoolean[] | any;
  review_options?:
    | {
        [key: string]: {
          [key: string]: string;
        };
      }[]
    | any;
  result_type?: FieldEntityReference[] | any;
  result_options?: FieldEntityReference[] | any;
  quiz_terms?: FieldEntityReference[] | any;
  [key: string]: any[];
}

export interface QuizFeedbackTypeEntity extends EntityBundleType {
  description: string;
  component: {
    expression: {
      id: string;
      uuid: string;
      weight: number;
      conditions: {
        id: string;
        uuid: string;
        weight: number;
        context_values: string[];
        context_mapping: { data: string };
        context_processors: string[];
        provides_mapping: string[];
        condition_id: string;
        negate: boolean;
      }[];
    };
    context_definitions: {
      quiz_result: {
        type: string;
        label: string;
        description: string;
      };
    };
    provided_context_definitions: string[];
  };
}

export interface QuizQuestionEntity {
  title: FieldText[];
  body: FieldTextArea[];
  type: FieldEntityReference[];
  qqid?: FieldNumber[] | any;
  uuid?: FieldText[] | any;
  vid?: FieldNumber[] | any;
  revision_timestamp?: FieldNumber[] | any;
  revision_uid?: FieldEntityReferenceUrl[] | any;
  revision_log?: FieldText[] | any;
  status?: FieldBoolean[] | any;
  changed?: FieldNumber[] | any;
  max_score?: FieldNumber[] | any;
  feedback?: FieldTextArea[] | any;
  [key: string]: any[];
}

export interface QuizQuestionRelationshipEntity {
  question_id: FieldEntityReferenceUrl[];
  quiz_id: FieldEntityReferenceUrl[];
  qqr_id?: FieldNumber[];
  qqr_pid?: FieldNumber[];
  quiz_vid?: FieldNumber[];
  question_vid?: FieldNumber[];
  question_status?: FieldNumber[];
  weight?: FieldNumber[];
  max_score?: FieldNumber[];
  auto_update_max_score?: FieldBoolean[];
}

export interface QuizResultEntity {
  type: FieldText[];
  qid: FieldEntityReferenceUrl[];
  vid: FieldNumber[];
  result_id?: FieldNumber[];
  uuid?: FieldText[];
  uid?: FieldEntityReferenceUrl[];
  time_start?: FieldNumber[];
  time_end?: FieldNumber[];
  released?: FieldBoolean[];
  score?: FieldNumber[];
  is_invalid?: FieldBoolean[];
  is_evaluated?: FieldBoolean[];
  attempt?: FieldNumber[];
  created?: FieldNumber[];
  changed?: FieldNumber[];
}

export interface QuizResultAnswerEntity {}
