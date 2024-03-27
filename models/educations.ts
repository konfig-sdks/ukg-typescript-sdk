/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EducationsDegree } from './educations-degree';
import { EducationsFrom } from './educations-from';
import { EducationsMajor } from './educations-major';
import { EducationsMinor } from './educations-minor';
import { EducationsSchool } from './educations-school';
import { EducationsTo } from './educations-to';

/**
 * An array containing candidate’s educations.
 * @export
 * @interface Educations
 */
export interface Educations {
    /**
     * The education description. Maximum of 1500 characters.
     * @type {string}
     * @memberof Educations
     */
    'description'?: string;
    /**
     * The id of the candidate’s education record.
     * @type {string}
     * @memberof Educations
     */
    'id'?: string;
    /**
     * 
     * @type {EducationsDegree}
     * @memberof Educations
     */
    'degree'?: EducationsDegree;
    /**
     * 
     * @type {EducationsSchool}
     * @memberof Educations
     */
    'school'?: EducationsSchool;
    /**
     * 
     * @type {EducationsMajor}
     * @memberof Educations
     */
    'major'?: EducationsMajor;
    /**
     * 
     * @type {EducationsMinor}
     * @memberof Educations
     */
    'minor'?: EducationsMinor;
    /**
     * 
     * @type {EducationsFrom}
     * @memberof Educations
     */
    'from'?: EducationsFrom;
    /**
     * 
     * @type {EducationsTo}
     * @memberof Educations
     */
    'to'?: EducationsTo;
}
