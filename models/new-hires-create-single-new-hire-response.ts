/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseCompensation } from './new-hires-create-single-new-hire-response-compensation';
import { NewHiresCreateSingleNewHireResponseContactInformation } from './new-hires-create-single-new-hire-response-contact-information';
import { NewHiresCreateSingleNewHireResponseJob } from './new-hires-create-single-new-hire-response-job';
import { NewHiresCreateSingleNewHireResponseMentor } from './new-hires-create-single-new-hire-response-mentor';
import { NewHiresCreateSingleNewHireResponseOnboardingOwner } from './new-hires-create-single-new-hire-response-onboarding-owner';
import { NewHiresCreateSingleNewHireResponseOrganizationLevelsInner } from './new-hires-create-single-new-hire-response-organization-levels-inner';
import { NewHiresCreateSingleNewHireResponseProvisioning } from './new-hires-create-single-new-hire-response-provisioning';

/**
 * 
 * @export
 * @interface NewHiresCreateSingleNewHireResponse
 */
export interface NewHiresCreateSingleNewHireResponse {
    /**
     * Unique identifier of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'id'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseContactInformation}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'contactInformation'?: NewHiresCreateSingleNewHireResponseContactInformation;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseJob}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'job'?: NewHiresCreateSingleNewHireResponseJob;
    /**
     * 
     * @type {Array<NewHiresCreateSingleNewHireResponseOrganizationLevelsInner>}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'organizationLevels'?: Array<NewHiresCreateSingleNewHireResponseOrganizationLevelsInner>;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseCompensation}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'compensation'?: NewHiresCreateSingleNewHireResponseCompensation;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseOnboardingOwner}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'onboardingOwner'?: NewHiresCreateSingleNewHireResponseOnboardingOwner;
    /**
     * Hire date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'hireDate'?: string;
    /**
     * Orientation date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'orientationDate'?: string;
    /**
     * Start date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'startDate'?: string;
    /**
     * Reason why the new hire start date is 4 or more business days in the past
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'pastStartDateReason'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseMentor}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'mentor'?: NewHiresCreateSingleNewHireResponseMentor;
    /**
     * Personalized welcome message for the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'personalMessage'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseProvisioning}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'provisioning'?: NewHiresCreateSingleNewHireResponseProvisioning;
    /**
     * The status of the new hire in onboarding
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'onboardingStatus'?: string;
    /**
     * Identity user identifier of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'identityUserId'?: string;
    /**
     * External user identifier of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'externalUserId'?: string;
    /**
     * Employee number of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'employeeNumber'?: string;
    /**
     * Date that the new hire was processed
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'sentToProcessHireDate'?: string;
    /**
     * Launch date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'launchedOn'?: string;
    /**
     * Creation date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'createdAt'?: string;
    /**
     * Last updated date of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponse
     */
    'updatedAt'?: string;
}

