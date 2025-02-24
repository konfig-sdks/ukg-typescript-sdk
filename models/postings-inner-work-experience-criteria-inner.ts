/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Translations } from './translations';

/**
 * 
 * @export
 * @interface PostingsInnerWorkExperienceCriteriaInner
 */
export interface PostingsInnerWorkExperienceCriteriaInner {
    /**
     * 
     * @type {Translations}
     * @memberof PostingsInnerWorkExperienceCriteriaInner
     */
    'description'?: Translations;
    /**
     * Indicates if this work experience is required.
     * @type {boolean}
     * @memberof PostingsInnerWorkExperienceCriteriaInner
     */
    'is_required'?: boolean;
    /**
     * Minimum years of experience requested for this work experience.
     * @type {number}
     * @memberof PostingsInnerWorkExperienceCriteriaInner
     */
    'minimum_years'?: number;
    /**
     * Maximum years of experience requested for this work experience.
     * @type {number}
     * @memberof PostingsInnerWorkExperienceCriteriaInner
     */
    'maximum_years'?: number;
}

