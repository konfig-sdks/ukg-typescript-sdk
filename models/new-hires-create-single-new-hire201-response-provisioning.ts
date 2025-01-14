/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHire201ResponseProvisioningProvisioningItemsInner } from './new-hires-create-single-new-hire201-response-provisioning-provisioning-items-inner';

/**
 * Provisioning for the new hire
 * @export
 * @interface NewHiresCreateSingleNewHire201ResponseProvisioning
 */
export interface NewHiresCreateSingleNewHire201ResponseProvisioning {
    /**
     * The list of provisioning items selected for this New Hire
     * @type {Array<NewHiresCreateSingleNewHire201ResponseProvisioningProvisioningItemsInner>}
     * @memberof NewHiresCreateSingleNewHire201ResponseProvisioning
     */
    'provisioningItems'?: Array<NewHiresCreateSingleNewHire201ResponseProvisioningProvisioningItemsInner>;
    /**
     * These emails receive updates about this new hire\'s provisioning items
     * @type {Array<string>}
     * @memberof NewHiresCreateSingleNewHire201ResponseProvisioning
     */
    'summaryEmailRecipients'?: Array<string>;
}

