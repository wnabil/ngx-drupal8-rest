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
  qid?: FieldNumber[];
  uuid?: FieldText[];
  vid?: FieldNumber[];
  revision_created?: FieldNumber[];
  revision_user?: FieldEntityReferenceUrl[];
  revision_log_message?: FieldText[];
  status?: FieldBoolean[];
  uid?: FieldEntityReferenceUrl[];
  created?: FieldNumber[];
  changed?: FieldNumber[];
  number_of_random_questions?: FieldNumber[];
  max_score_for_random?: FieldNumber[];
  pass_rate?: FieldNumber[];
  summary_pass?: FieldTextArea[];
  summary_default?: FieldTextArea[];
  randomization?: FieldNumber[];
  backwards_navigation?: FieldBoolean[];
  keep_results?: FieldNumber[];
  repeat_until_correct?: FieldBoolean[];
  quiz_date?: ValueEndValue[];
  takes?: FieldNumber[];
  show_attempt_stats?: FieldBoolean[];
  time_limit?: FieldNumber[];
  max_score?: FieldNumber[];
  allow_skipping?: FieldBoolean[];
  allow_resume?: FieldBoolean[];
  allow_jumping?: FieldBoolean[];
  allow_change?: FieldBoolean[];
  allow_change_blank?: FieldBoolean[];
  build_on_last?: FieldText[];
  show_passed?: FieldBoolean[];
  mark_doubtful?: FieldBoolean[];
  review_options?: {
    [key: string]: { [key: string]: string };
  }[];
  result_type?: FieldEntityReference[];
  result_options?: FieldEntityReference[];
  quiz_terms?: FieldEntityReference[];
  [key: string]: any[]; // custom fields
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
  qqid?: FieldNumber[];
  uuid?: FieldText[];
  vid?: FieldNumber[];
  revision_timestamp?: FieldNumber[];
  revision_uid?: FieldEntityReferenceUrl[];
  revision_log?: FieldText[];
  status?: FieldBoolean[];
  changed?: FieldNumber[];
  max_score?: FieldNumber[];
  feedback?: FieldTextArea[];
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

export interface QuizResultAnswerEntity {
  
}
