/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseOnboardingOwnerNamePrefix } from './new-hires-create-single-new-hire-response-onboarding-owner-name-prefix';
import { NewHiresCreateSingleNewHireResponseOnboardingOwnerNameSuffix } from './new-hires-create-single-new-hire-response-onboarding-owner-name-suffix';

/**
 * Name of the onboarding owner
 * @export
 * @interface NewHiresCreateSingleNewHireResponseOnboardingOwnerName
 */
export interface NewHiresCreateSingleNewHireResponseOnboardingOwnerName {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseOnboardingOwnerNamePrefix}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'prefix'?: NewHiresCreateSingleNewHireResponseOnboardingOwnerNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseOnboardingOwnerNameSuffix}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'suffix'?: NewHiresCreateSingleNewHireResponseOnboardingOwnerNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseOnboardingOwnerName
     */
    'preferredFirst'?: string;
}
