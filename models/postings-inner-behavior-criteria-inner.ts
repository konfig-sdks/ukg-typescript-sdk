/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostingsInnerBehaviorCriteriaInnerBehavior } from './postings-inner-behavior-criteria-inner-behavior';

/**
 * 
 * @export
 * @interface PostingsInnerBehaviorCriteriaInner
 */
export interface PostingsInnerBehaviorCriteriaInner {
    /**
     * Indicates if this behavior is required for this job.
     * @type {boolean}
     * @memberof PostingsInnerBehaviorCriteriaInner
     */
    'is_required'?: boolean;
    /**
     * 
     * @type {PostingsInnerBehaviorCriteriaInnerBehavior}
     * @memberof PostingsInnerBehaviorCriteriaInner
     */
    'behavior'?: PostingsInnerBehaviorCriteriaInnerBehavior;
}

