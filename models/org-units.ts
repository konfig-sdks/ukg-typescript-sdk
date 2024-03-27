/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrgUnitsOrgLevel } from './org-units-org-level';

/**
 * 
 * @export
 * @interface OrgUnits
 */
export interface OrgUnits {
    /**
     * The id of organizational unit associated with the position the candidate has been hired for
     * @type {string}
     * @memberof OrgUnits
     */
    'id'?: string;
    /**
     * The organizational unit’s code in the core HR system
     * @type {string}
     * @memberof OrgUnits
     */
    'code'?: string;
    /**
     * 
     * @type {OrgUnitsOrgLevel}
     * @memberof OrgUnits
     */
    'org_level'?: OrgUnitsOrgLevel;
}

