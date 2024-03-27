/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHireReadModelCompensation } from './new-hire-read-model-compensation';
import { NewHireReadModelContactInformation } from './new-hire-read-model-contact-information';
import { NewHireReadModelJob } from './new-hire-read-model-job';
import { NewHireReadModelMentor } from './new-hire-read-model-mentor';
import { NewHireReadModelOnboardingOwner } from './new-hire-read-model-onboarding-owner';
import { NewHireReadModelOrganizationLevelsInner } from './new-hire-read-model-organization-levels-inner';
import { NewHireReadModelProvisioning } from './new-hire-read-model-provisioning';

/**
 * 
 * @export
 * @interface NewHireReadModel
 */
export interface NewHireReadModel {
    /**
     * Unique identifier of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'id'?: string;
    /**
     * 
     * @type {NewHireReadModelContactInformation}
     * @memberof NewHireReadModel
     */
    'contactInformation'?: NewHireReadModelContactInformation;
    /**
     * 
     * @type {NewHireReadModelJob}
     * @memberof NewHireReadModel
     */
    'job'?: NewHireReadModelJob;
    /**
     * 
     * @type {Array<NewHireReadModelOrganizationLevelsInner>}
     * @memberof NewHireReadModel
     */
    'organizationLevels'?: Array<NewHireReadModelOrganizationLevelsInner>;
    /**
     * 
     * @type {NewHireReadModelCompensation}
     * @memberof NewHireReadModel
     */
    'compensation'?: NewHireReadModelCompensation;
    /**
     * 
     * @type {NewHireReadModelOnboardingOwner}
     * @memberof NewHireReadModel
     */
    'onboardingOwner'?: NewHireReadModelOnboardingOwner;
    /**
     * Hire date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'hireDate'?: string;
    /**
     * Orientation date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'orientationDate'?: string;
    /**
     * Start date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'startDate'?: string;
    /**
     * Reason why the new hire start date is 4 or more business days in the past
     * @type {string}
     * @memberof NewHireReadModel
     */
    'pastStartDateReason'?: string;
    /**
     * 
     * @type {NewHireReadModelMentor}
     * @memberof NewHireReadModel
     */
    'mentor'?: NewHireReadModelMentor;
    /**
     * Personalized welcome message for the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'personalMessage'?: string;
    /**
     * 
     * @type {NewHireReadModelProvisioning}
     * @memberof NewHireReadModel
     */
    'provisioning'?: NewHireReadModelProvisioning;
    /**
     * The status of the new hire in onboarding
     * @type {string}
     * @memberof NewHireReadModel
     */
    'onboardingStatus'?: string;
    /**
     * Identity user identifier of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'identityUserId'?: string;
    /**
     * External user identifier of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'externalUserId'?: string;
    /**
     * Employee number of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'employeeNumber'?: string;
    /**
     * Date that the new hire was processed
     * @type {string}
     * @memberof NewHireReadModel
     */
    'sentToProcessHireDate'?: string;
    /**
     * Launch date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'launchedOn'?: string;
    /**
     * Creation date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'createdAt'?: string;
    /**
     * Last updated date of the new hire
     * @type {string}
     * @memberof NewHireReadModel
     */
    'updatedAt'?: string;
}
