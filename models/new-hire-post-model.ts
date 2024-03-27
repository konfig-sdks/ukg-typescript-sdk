/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHirePostModelCompensation } from './new-hire-post-model-compensation';
import { NewHirePostModelContactInformation } from './new-hire-post-model-contact-information';
import { NewHirePostModelJob } from './new-hire-post-model-job';
import { NewHirePostModelMentor } from './new-hire-post-model-mentor';
import { NewHirePostModelOrganizationLevelsInner } from './new-hire-post-model-organization-levels-inner';

/**
 * 
 * @export
 * @interface NewHirePostModel
 */
export interface NewHirePostModel {
    /**
     * 
     * @type {NewHirePostModelContactInformation}
     * @memberof NewHirePostModel
     */
    'contactInformation'?: NewHirePostModelContactInformation;
    /**
     * 
     * @type {NewHirePostModelJob}
     * @memberof NewHirePostModel
     */
    'job'?: NewHirePostModelJob;
    /**
     * 
     * @type {Array<NewHirePostModelOrganizationLevelsInner>}
     * @memberof NewHirePostModel
     */
    'organizationLevels'?: Array<NewHirePostModelOrganizationLevelsInner>;
    /**
     * 
     * @type {NewHirePostModelCompensation}
     * @memberof NewHirePostModel
     */
    'compensation'?: NewHirePostModelCompensation;
    /**
     * External user identifier of the onboarding owner
     * @type {string}
     * @memberof NewHirePostModel
     */
    'onboardingOwnerId'?: string;
    /**
     * Hire date of the new hire
     * @type {string}
     * @memberof NewHirePostModel
     */
    'hireDate'?: string;
    /**
     * Orientation date of the new hire
     * @type {string}
     * @memberof NewHirePostModel
     */
    'orientationDate'?: string;
    /**
     * Start date of the new hire
     * @type {string}
     * @memberof NewHirePostModel
     */
    'startDate'?: string;
    /**
     * Reason why the new hire start date is 4 or more business days in the past
     * @type {string}
     * @memberof NewHirePostModel
     */
    'pastStartDateReason'?: string;
    /**
     * 
     * @type {NewHirePostModelMentor}
     * @memberof NewHirePostModel
     */
    'mentor'?: NewHirePostModelMentor;
    /**
     * Personal message for the new hire
     * @type {string}
     * @memberof NewHirePostModel
     */
    'personalMessage'?: string;
}
