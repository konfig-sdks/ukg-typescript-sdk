/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostingsInnerLocationsInnerCountry } from './postings-inner-locations-inner-country';
import { PostingsInnerLocationsInnerState } from './postings-inner-locations-inner-state';

/**
 * 
 * @export
 * @interface PostingsInnerLocationsInner
 */
export interface PostingsInnerLocationsInner {
    /**
     * The unique location id (GUID).
     * @type {string}
     * @memberof PostingsInnerLocationsInner
     */
    'id'?: string;
    /**
     * The location name. Even though it’s required, the “Not Specified” value may be returned.
     * @type {string}
     * @memberof PostingsInnerLocationsInner
     */
    'name'?: string;
    /**
     * The location’s city.
     * @type {string}
     * @memberof PostingsInnerLocationsInner
     */
    'city'?: string;
    /**
     * 
     * @type {PostingsInnerLocationsInnerState}
     * @memberof PostingsInnerLocationsInner
     */
    'state'?: PostingsInnerLocationsInnerState;
    /**
     * 
     * @type {PostingsInnerLocationsInnerCountry}
     * @memberof PostingsInnerLocationsInner
     */
    'country'?: PostingsInnerLocationsInnerCountry;
    /**
     * The location’s postal code.
     * @type {string}
     * @memberof PostingsInnerLocationsInner
     */
    'postal_code'?: string;
}

