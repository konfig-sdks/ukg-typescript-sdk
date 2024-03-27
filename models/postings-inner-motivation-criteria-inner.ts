/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostingsInnerMotivationCriteriaInnerMotivation } from './postings-inner-motivation-criteria-inner-motivation';

/**
 * 
 * @export
 * @interface PostingsInnerMotivationCriteriaInner
 */
export interface PostingsInnerMotivationCriteriaInner {
    /**
     * Indicates if this motivation is required for this job.
     * @type {boolean}
     * @memberof PostingsInnerMotivationCriteriaInner
     */
    'is_required'?: boolean;
    /**
     * 
     * @type {PostingsInnerMotivationCriteriaInnerMotivation}
     * @memberof PostingsInnerMotivationCriteriaInner
     */
    'motivation'?: PostingsInnerMotivationCriteriaInnerMotivation;
}
