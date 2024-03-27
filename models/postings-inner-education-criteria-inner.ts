/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostingsInnerEducationCriteriaInnerDegree } from './postings-inner-education-criteria-inner-degree';
import { PostingsInnerEducationCriteriaInnerMajor } from './postings-inner-education-criteria-inner-major';

/**
 * 
 * @export
 * @interface PostingsInnerEducationCriteriaInner
 */
export interface PostingsInnerEducationCriteriaInner {
    /**
     * Indicates if this education is required for the job.
     * @type {boolean}
     * @memberof PostingsInnerEducationCriteriaInner
     */
    'is_required'?: boolean;
    /**
     * Indicates if similar educations will be considered for this job.
     * @type {boolean}
     * @memberof PostingsInnerEducationCriteriaInner
     */
    'allow_related'?: boolean;
    /**
     * 
     * @type {PostingsInnerEducationCriteriaInnerDegree}
     * @memberof PostingsInnerEducationCriteriaInner
     */
    'degree'?: PostingsInnerEducationCriteriaInnerDegree;
    /**
     * 
     * @type {PostingsInnerEducationCriteriaInnerMajor}
     * @memberof PostingsInnerEducationCriteriaInner
     */
    'major'?: PostingsInnerEducationCriteriaInnerMajor;
}

