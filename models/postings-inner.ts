/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostingsInnerBehaviorCriteriaInner } from './postings-inner-behavior-criteria-inner';
import { PostingsInnerCompany } from './postings-inner-company';
import { PostingsInnerDefaultLocale } from './postings-inner-default-locale';
import { PostingsInnerDescription } from './postings-inner-description';
import { PostingsInnerEducationCriteriaInner } from './postings-inner-education-criteria-inner';
import { PostingsInnerJobFamily } from './postings-inner-job-family';
import { PostingsInnerLicenseCriteriaInner } from './postings-inner-license-criteria-inner';
import { PostingsInnerLinksInner } from './postings-inner-links-inner';
import { PostingsInnerLocalesInner } from './postings-inner-locales-inner';
import { PostingsInnerLocationsInner } from './postings-inner-locations-inner';
import { PostingsInnerMotivationCriteriaInner } from './postings-inner-motivation-criteria-inner';
import { PostingsInnerOpportunity } from './postings-inner-opportunity';
import { PostingsInnerSkillCriteriaInner } from './postings-inner-skill-criteria-inner';
import { PostingsInnerTenant } from './postings-inner-tenant';
import { PostingsInnerWorkExperienceCriteriaInner } from './postings-inner-work-experience-criteria-inner';
import { Translations } from './translations';

/**
 * 
 * @export
 * @interface PostingsInner
 */
export interface PostingsInner {
    /**
     * 
     * @type {Translations}
     * @memberof PostingsInner
     */
    'title'?: Translations;
    /**
     * 
     * @type {PostingsInnerDescription}
     * @memberof PostingsInner
     */
    'description'?: PostingsInnerDescription;
    /**
     * The unique Job Posting Id (GUID).
     * @type {string}
     * @memberof PostingsInner
     */
    'id'?: string;
    /**
     * 
     * @type {PostingsInnerTenant}
     * @memberof PostingsInner
     */
    'tenant'?: PostingsInnerTenant;
    /**
     * 
     * @type {PostingsInnerOpportunity}
     * @memberof PostingsInner
     */
    'opportunity'?: PostingsInnerOpportunity;
    /**
     * Time stamp of last update to posting
     * @type {string}
     * @memberof PostingsInner
     */
    'updated_at'?: string;
    /**
     * Time stamp of posting creation
     * @type {string}
     * @memberof PostingsInner
     */
    'created_at'?: string;
    /**
     * The customer-defined number associated with the Job Opportunity.
     * @type {string}
     * @memberof PostingsInner
     */
    'requisition_number'?: string;
    /**
     * 
     * @type {PostingsInnerDefaultLocale}
     * @memberof PostingsInner
     */
    'default_locale'?: PostingsInnerDefaultLocale;
    /**
     * Job Posting compensation details.
     * @type {string}
     * @memberof PostingsInner
     */
    'compensation'?: string;
    /**
     * 
     * @type {PostingsInnerJobFamily}
     * @memberof PostingsInner
     */
    'job_family'?: PostingsInnerJobFamily;
    /**
     * 
     * @type {Array<PostingsInnerLocationsInner>}
     * @memberof PostingsInner
     */
    'locations'?: Array<PostingsInnerLocationsInner>;
    /**
     * The list of available locations delimited by semi-colon. The location fields within each location are delimited by comma. 
     * @type {string}
     * @memberof PostingsInner
     */
    'locations_summary'?: string;
    /**
     * 
     * @type {PostingsInnerCompany}
     * @memberof PostingsInner
     */
    'company'?: PostingsInnerCompany;
    /**
     * Indicates if the Job Posting is published as a featured job on an UltiPro Recruiting job board.
     * @type {boolean}
     * @memberof PostingsInner
     */
    'is_featured'?: boolean;
    /**
     * 
     * @type {Array<PostingsInnerSkillCriteriaInner>}
     * @memberof PostingsInner
     */
    'skill_criteria'?: Array<PostingsInnerSkillCriteriaInner>;
    /**
     * 
     * @type {Array<PostingsInnerWorkExperienceCriteriaInner>}
     * @memberof PostingsInner
     */
    'work_experience_criteria'?: Array<PostingsInnerWorkExperienceCriteriaInner>;
    /**
     * 
     * @type {Array<PostingsInnerEducationCriteriaInner>}
     * @memberof PostingsInner
     */
    'education_criteria'?: Array<PostingsInnerEducationCriteriaInner>;
    /**
     * 
     * @type {Array<PostingsInnerLicenseCriteriaInner>}
     * @memberof PostingsInner
     */
    'license_criteria'?: Array<PostingsInnerLicenseCriteriaInner>;
    /**
     * 
     * @type {Array<PostingsInnerBehaviorCriteriaInner>}
     * @memberof PostingsInner
     */
    'behavior_criteria'?: Array<PostingsInnerBehaviorCriteriaInner>;
    /**
     * 
     * @type {Array<PostingsInnerMotivationCriteriaInner>}
     * @memberof PostingsInner
     */
    'motivation_criteria'?: Array<PostingsInnerMotivationCriteriaInner>;
    /**
     * Date in which posting was published
     * @type {string}
     * @memberof PostingsInner
     */
    'publish_date'?: string;
    /**
     * 
     * @type {Array<PostingsInnerLocalesInner>}
     * @memberof PostingsInner
     */
    'locales'?: Array<PostingsInnerLocalesInner>;
    /**
     * The URL to the full job description on the UltiPro Recruiting job board. Should be mapped to the Job URL in the partner’s XML feed
     * @type {string}
     * @memberof PostingsInner
     */
    'recruiting_apply_url'?: string;
    /**
     * 
     * @type {Array<PostingsInnerLinksInner>}
     * @memberof PostingsInner
     */
    'links'?: Array<PostingsInnerLinksInner>;
}

