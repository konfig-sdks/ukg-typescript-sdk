/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SkillProficiencyLevel
 */
export interface SkillProficiencyLevel {
    /**
     * The id of a standard proficiency level.
     * @type {string}
     * @memberof SkillProficiencyLevel
     */
    'id'?: string;
    /**
     * The proficiency level name in all available languages. 
     * @type {object}
     * @memberof SkillProficiencyLevel
     */
    'name'?: object;
    /**
     * A numerical equivalent of proficiency_level.name:  1 – Novice  2 – Some Knowledge  3 – Intermediate  4 – Advanced  5 – Expert 
     * @type {number}
     * @memberof SkillProficiencyLevel
     */
    'ordinal_value'?: number;
}

