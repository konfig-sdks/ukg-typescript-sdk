/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Organization level
 * @export
 * @interface NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner
 */
export interface NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner {
    /**
     * Description of a organization that the new hire is associated with.
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner
     */
    'description'?: string;
    /**
     * Identifier of the organization level
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner
     */
    'id'?: string;
    /**
     * Level of the organization level
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner
     */
    'level'?: NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInnerLevelEnum;
    /**
     * Unique code of a organization that the new hire is associated with
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInner
     */
    'code'?: string;
}

type NewHiresCreateSingleNewHire201ResponseOrganizationLevelsInnerLevelEnum = 'Level 1 = 1' | 'Level 2 = 2' | 'Level 3 = 3' | 'Level 4 = 4'

