/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresGetById200ResponseProvisioningProvisioningItemsInner } from './new-hires-get-by-id200-response-provisioning-provisioning-items-inner';

/**
 * Provisioning for the new hire
 * @export
 * @interface NewHiresGetById200ResponseProvisioning
 */
export interface NewHiresGetById200ResponseProvisioning {
    /**
     * The list of provisioning items selected for this New Hire
     * @type {Array<NewHiresGetById200ResponseProvisioningProvisioningItemsInner>}
     * @memberof NewHiresGetById200ResponseProvisioning
     */
    'provisioningItems'?: Array<NewHiresGetById200ResponseProvisioningProvisioningItemsInner>;
    /**
     * These emails receive updates about this new hire\'s provisioning items
     * @type {Array<string>}
     * @memberof NewHiresGetById200ResponseProvisioning
     */
    'summaryEmailRecipients'?: Array<string>;
}

