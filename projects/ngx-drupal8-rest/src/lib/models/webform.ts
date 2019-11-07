import { FieldNumber, FieldBoolean, FieldText, FieldEntityReferenceUrl } from './field';

export interface WebformEntityAccess {
  permissions: string[];
  roles: string[];
  users: string[];
}

export interface WebformEntityHandler {
  conditions: string[];
  handler_id: string;
  id: string;
  label: string;
  status: boolean;
  weight: number;
  settings: {
    attachments: boolean;
    bcc_options: string[];
    body: string;
    cc_options: string[];
    debug: boolean;
    exclude_empty: boolean;
    exclude_empty_checkbox: boolean;
    excluded_elements: string[];
    from_mail: string;
    from_name: string;
    from_options: string[];
    html: boolean;
    ignore_access: boolean;
    states: string[];
    subject: string;
    to_mail: string;
    to_options: string[];
    twig: boolean;
    theme_name?: string;
    reply_to?: string;
    return_path?: string;
    sender_mail?: string;
    sender_name?: string;
    cc_mail?: string;
    bcc_mail?: string;
  };
}

export interface WebformEntity {
  access: {
    administer: WebformEntityAccess;
    configuration: WebformEntityAccess;
    create: WebformEntityAccess;
    delete_any: WebformEntityAccess;
    delete_own: WebformEntityAccess;
    purge_any: WebformEntityAccess;
    test: WebformEntityAccess;
    update_any: WebformEntityAccess;
    update_own: WebformEntityAccess;
    view_any: WebformEntityAccess;
    view_own: WebformEntityAccess;
  };
  archive: boolean;
  dependencies: {
    enforced: {
      module: string[];
    }
  };
  description: string;
  elements: string;
  handlers: {
    email_confirmation: WebformEntityHandler;
    email_notification: WebformEntityHandler;
  };
  id: string;
  langcode: string;
  status: string;
  template: boolean;
  title: string;
  uuid: string;
  weight: number;
  settings: {
    ajax: boolean;
    ajax_effect: string;
    ajax_progress_type: string;
    ajax_scroll_top: string;
    ajax_speed: number;
    autofill: boolean;
    autofill_excluded_elements: string[];
    autofill_message: string;
    confirmation_attributes: string[];
    confirmation_back: boolean;
    confirmation_back_attributes: string[];
    confirmation_back_label: string;
    confirmation_exclude_query: boolean;
    confirmation_exclude_token: boolean;
    confirmation_message: string;
    confirmation_title: string;
    confirmation_type: string;
    confirmation_update: boolean;
    confirmation_url: string;
    draft: string;
    draft_auto_save: boolean;
    draft_loaded_message: string;
    draft_multiple: boolean;
    draft_pending_multiple_message: string;
    draft_pending_single_message: string;
    draft_saved_message: string;
    form_access_denied: string;
    form_access_denied_attributes: string[];
    form_access_denied_message: string;
    form_access_denied_title: string;
    form_autofocus: boolean;
    form_close_message: string;
    form_confidential: boolean;
    form_confidential_message: string;
    form_convert_anonymous: boolean;
    form_details_toggle: boolean;
    form_disable_autocomplete: boolean;
    form_disable_back: boolean;
    form_disable_inline_errors: boolean;
    form_exception_message: string;
    form_file_limit: string;
    form_novalidate: boolean;
    form_open_message: string;
    form_prepopulate: boolean;
    form_prepopulate_source_entity: boolean;
    form_prepopulate_source_entity_required: boolean;
    form_prepopulate_source_entity_type: string;
    form_previous_submissions: boolean;
    form_remote_addr: boolean;
    form_required: boolean;
    form_reset: boolean;
    form_submit_back: boolean;
    form_submit_once: boolean;
    form_title: string;
    form_unsaved: boolean;
    limit_total_message: string;
    limit_total_unique: boolean;
    limit_user_message: string;
    limit_user_unique: boolean;
    page: boolean;
    page_admin_theme: boolean;
    page_confirm_path: string;
    page_submit_path: string;
    preview: number;
    preview_attributes: string[];
    preview_exclude_empty: boolean;
    preview_exclude_empty_checkbox: boolean;
    preview_excluded_elements: string[];
    preview_label: string;
    preview_message: string;
    preview_title: string;
    previous_submission_message: string;
    previous_submissions_message: string;
    purge: string;
    results_disabled: boolean;
    results_disabled_ignore: boolean;
    submission_access_denied: string;
    submission_access_denied_attributes: string[];
    submission_access_denied_message: string;
    submission_access_denied_title: string;
    submission_exception_message: string;
    submission_exclude_empty: boolean;
    submission_exclude_empty_checkbox: boolean;
    submission_excluded_elements: string[];
    submission_label: string;
    submission_locked_message: string;
    submission_log: boolean;
    submission_user_columns: string[];
    submission_user_duplicate: boolean;
    submission_views: string[];
    submission_views_replace: string[];
    token_update: boolean;
    wizard_confirmation: boolean;
    wizard_confirmation_label: string;
    wizard_preview_link: boolean;
    wizard_progress_bar: boolean;
    wizard_progress_link: boolean;
    wizard_progress_pages: boolean;
    wizard_progress_percentage: boolean;
    wizard_start_label: string;
    wizard_track: string;
    limit_total_interval?: number;
    entity_limit_total_interval?: number;
    entity_limit_user?: number;
    entity_limit_total?: number;
    entity_limit_user_interval?: number;
    limit_total?: number;
    limit_user_interval?: number;
    limit_user?: number;
    purge_days?: number;
  };
  uid?: number;
  open?: string;
  javascript?: string;
  category?: string;
  close?: string;
  css?: string;
}

export interface WebformActionsField {
  '#admin_title': string;
  '#title': string;
  '#type': string;
  '#webform': string;
  '#webform_children': string[];
  '#webform_composite': boolean;
  '#webform_depth': number;
  '#webform_id': string;
  '#webform_key': string;
  '#webform_multiple': boolean;
  '#webform_parent_flexbox': boolean;
  '#webform_parents': string[];
  '#webform_parent_key'?: string;
  '#submit__label'?: string;
  '#default_value'?: string;
  '#required'?: boolean;
}

export interface WebformFields {
  actions: WebformActionsField;
  [key: string]: WebformActionsField;
}

export interface WebformSubmission {
  data: {
    [key: string]: string | number;
  };
  entity: {
    changed: FieldNumber[];
    completed: FieldNumber[];
    created: FieldNumber[];
    current_page: number[];
    entity_id: number[];
    entity_type: string[];
    in_draft: FieldBoolean[];
    langcode: FieldText[];
    locked: FieldBoolean[];
    metatag: { value: { title: string } };
    notes: string[];
    remote_addr: FieldText[];
    serial: FieldNumber[];
    sid: FieldNumber[];
    sticky: FieldBoolean[];
    token: FieldText[];
    uid: FieldEntityReferenceUrl[];
    uri: FieldText[];
    uuid: FieldText[];
    webform_id: FieldEntityReferenceUrl[];
  };
}
