/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillProficiencyLevel } from './skill-proficiency-level';
import { SkillSkill } from './skill-skill';

/**
 * An array containing candidate’s skills.
 * @export
 * @interface Skill
 */
export interface Skill {
    /**
     * The id of the candidate’s skill/proficiency level record 
     * @type {string}
     * @memberof Skill
     */
    'id'?: string;
    /**
     * 
     * @type {SkillSkill}
     * @memberof Skill
     */
    'skill'?: SkillSkill;
    /**
     * 
     * @type {SkillProficiencyLevel}
     * @memberof Skill
     */
    'proficiency_level'?: SkillProficiencyLevel;
}

