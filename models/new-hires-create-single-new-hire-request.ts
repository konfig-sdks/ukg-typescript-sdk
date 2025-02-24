/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireRequestCompensation } from './new-hires-create-single-new-hire-request-compensation';
import { NewHiresCreateSingleNewHireRequestContactInformation } from './new-hires-create-single-new-hire-request-contact-information';
import { NewHiresCreateSingleNewHireRequestJob } from './new-hires-create-single-new-hire-request-job';
import { NewHiresCreateSingleNewHireRequestMentor } from './new-hires-create-single-new-hire-request-mentor';
import { NewHiresCreateSingleNewHireRequestOrganizationLevelsInner } from './new-hires-create-single-new-hire-request-organization-levels-inner';

/**
 * 
 * @export
 * @interface NewHiresCreateSingleNewHireRequest
 */
export interface NewHiresCreateSingleNewHireRequest {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestContactInformation}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'contactInformation'?: NewHiresCreateSingleNewHireRequestContactInformation;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestJob}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'job'?: NewHiresCreateSingleNewHireRequestJob;
    /**
     * 
     * @type {Array<NewHiresCreateSingleNewHireRequestOrganizationLevelsInner>}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'organizationLevels'?: Array<NewHiresCreateSingleNewHireRequestOrganizationLevelsInner>;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestCompensation}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'compensation'?: NewHiresCreateSingleNewHireRequestCompensation;
    /**
     * External user identifier of the onboarding owner
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'onboardingOwnerId'?: string;
    /**
     * Hire date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'hireDate'?: string;
    /**
     * Orientation date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'orientationDate'?: string;
    /**
     * Start date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'startDate'?: string;
    /**
     * Reason why the new hire start date is 4 or more business days in the past
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'pastStartDateReason'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestMentor}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'mentor'?: NewHiresCreateSingleNewHireRequestMentor;
    /**
     * Personal message for the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequest
     */
    'personalMessage'?: string;
}

