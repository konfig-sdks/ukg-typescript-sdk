/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHireReadModelProvisioningProvisioningItemsInner } from './new-hire-read-model-provisioning-provisioning-items-inner';

/**
 * Provisioning for the new hire
 * @export
 * @interface NewHireReadModelProvisioning
 */
export interface NewHireReadModelProvisioning {
    /**
     * The list of provisioning items selected for this New Hire
     * @type {Array<NewHireReadModelProvisioningProvisioningItemsInner>}
     * @memberof NewHireReadModelProvisioning
     */
    'provisioningItems'?: Array<NewHireReadModelProvisioningProvisioningItemsInner>;
    /**
     * These emails receive updates about this new hire\'s provisioning items
     * @type {Array<string>}
     * @memberof NewHireReadModelProvisioning
     */
    'summaryEmailRecipients'?: Array<string>;
}

