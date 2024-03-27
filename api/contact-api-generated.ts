/* tslint:disable */
/* eslint-disable */
/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Contact } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ContactApi - axios parameter creator
 * @export
 */
export const ContactApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all details for a single person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a single person assigned to an employee as a contact
         * @param {string} contactId 
         * @param {string} [employeeId] 
         * @param {string} [isActive] 
         * @param {string} [relationshipCode] 
         * @param {string} [contactId2] 
         * @param {string} [countryCode] 
         * @param {string} [cobraIsActive] 
         * @param {string} [cobraStatus] 
         * @param {string} [isBeneficiary] 
         * @param {string} [isDependent] 
         * @param {string} [dateOfCobraEvent] Used to find date of COBRA event less than, greater than, equal to, or between passed date(s)
         * @param {string} [statusAsOfDate] Used to find contact status as of date less than, greater than, equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersonnelContactDetails: async (contactId: string, employeeId?: string, isActive?: string, relationshipCode?: string, contactId2?: string, countryCode?: string, cobraIsActive?: string, cobraStatus?: string, isBeneficiary?: string, isDependent?: string, dateOfCobraEvent?: string, statusAsOfDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contactId' is not null or undefined
            assertParamExists('getPersonnelContactDetails', 'contactId', contactId)
            const localVarPath = `/personnel/v1/contacts/{contactId}`
                .replace(`{${"contactId"}}`, encodeURIComponent(String(contactId !== undefined ? contactId : `-contactId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)
            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (isActive !== undefined) {
                localVarQueryParameter['isActive'] = isActive;
            }

            if (relationshipCode !== undefined) {
                localVarQueryParameter['relationshipCode'] = relationshipCode;
            }

            if (contactId2 !== undefined) {
                localVarQueryParameter['contactId'] = contactId2;
            }

            if (countryCode !== undefined) {
                localVarQueryParameter['countryCode'] = countryCode;
            }

            if (cobraIsActive !== undefined) {
                localVarQueryParameter['cobraIsActive'] = cobraIsActive;
            }

            if (cobraStatus !== undefined) {
                localVarQueryParameter['cobraStatus'] = cobraStatus;
            }

            if (isBeneficiary !== undefined) {
                localVarQueryParameter['isBeneficiary'] = isBeneficiary;
            }

            if (isDependent !== undefined) {
                localVarQueryParameter['isDependent'] = isDependent;
            }

            if (dateOfCobraEvent !== undefined) {
                localVarQueryParameter['dateOfCobraEvent'] = dateOfCobraEvent;
            }

            if (statusAsOfDate !== undefined) {
                localVarQueryParameter['statusAsOfDate'] = statusAsOfDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_Page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/contacts/{contactId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all details for a person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a person assigned to an employee as a contact
         * @param {string} [employeeId] 
         * @param {string} [isActive] 
         * @param {string} [relationshipCode] 
         * @param {string} [contactId] 
         * @param {string} [countryCode] 
         * @param {string} [cobraIsActive] 
         * @param {string} [cobraStatus] 
         * @param {string} [isBeneficiary] 
         * @param {string} [isDependent] 
         * @param {string} [dateOfCobraEvent] Used to find date of COBRA event less than, greater than, equal to, or between passed date(s)
         * @param {string} [statusAsOfDate] Used to find contact status as of date less than, greater than,equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersonnelDetails: async (employeeId?: string, isActive?: string, relationshipCode?: string, contactId?: string, countryCode?: string, cobraIsActive?: string, cobraStatus?: string, isBeneficiary?: string, isDependent?: string, dateOfCobraEvent?: string, statusAsOfDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)
            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (isActive !== undefined) {
                localVarQueryParameter['isActive'] = isActive;
            }

            if (relationshipCode !== undefined) {
                localVarQueryParameter['relationshipCode'] = relationshipCode;
            }

            if (contactId !== undefined) {
                localVarQueryParameter['contactId'] = contactId;
            }

            if (countryCode !== undefined) {
                localVarQueryParameter['countryCode'] = countryCode;
            }

            if (cobraIsActive !== undefined) {
                localVarQueryParameter['cobraIsActive'] = cobraIsActive;
            }

            if (cobraStatus !== undefined) {
                localVarQueryParameter['cobraStatus'] = cobraStatus;
            }

            if (isBeneficiary !== undefined) {
                localVarQueryParameter['isBeneficiary'] = isBeneficiary;
            }

            if (isDependent !== undefined) {
                localVarQueryParameter['isDependent'] = isDependent;
            }

            if (dateOfCobraEvent !== undefined) {
                localVarQueryParameter['dateOfCobraEvent'] = dateOfCobraEvent;
            }

            if (statusAsOfDate !== undefined) {
                localVarQueryParameter['statusAsOfDate'] = statusAsOfDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_Page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/contacts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactApi - functional programming interface
 * @export
 */
export const ContactApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all details for a single person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a single person assigned to an employee as a contact
         * @param {ContactApiGetPersonnelContactDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPersonnelContactDetails(requestParameters: ContactApiGetPersonnelContactDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPersonnelContactDetails(requestParameters.contactId, requestParameters.employeeId, requestParameters.isActive, requestParameters.relationshipCode, requestParameters.contactId2, requestParameters.countryCode, requestParameters.cobraIsActive, requestParameters.cobraStatus, requestParameters.isBeneficiary, requestParameters.isDependent, requestParameters.dateOfCobraEvent, requestParameters.statusAsOfDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all details for a person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a person assigned to an employee as a contact
         * @param {ContactApiGetPersonnelDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPersonnelDetails(requestParameters: ContactApiGetPersonnelDetailsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPersonnelDetails(requestParameters.employeeId, requestParameters.isActive, requestParameters.relationshipCode, requestParameters.contactId, requestParameters.countryCode, requestParameters.cobraIsActive, requestParameters.cobraStatus, requestParameters.isBeneficiary, requestParameters.isDependent, requestParameters.dateOfCobraEvent, requestParameters.statusAsOfDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContactApi - factory interface
 * @export
 */
export const ContactApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactApiFp(configuration)
    return {
        /**
         * Get all details for a single person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a single person assigned to an employee as a contact
         * @param {ContactApiGetPersonnelContactDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersonnelContactDetails(requestParameters: ContactApiGetPersonnelContactDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Contact> {
            return localVarFp.getPersonnelContactDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all details for a person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all details for a person assigned to an employee as a contact
         * @param {ContactApiGetPersonnelDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersonnelDetails(requestParameters: ContactApiGetPersonnelDetailsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Contact> {
            return localVarFp.getPersonnelDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPersonnelContactDetails operation in ContactApi.
 * @export
 * @interface ContactApiGetPersonnelContactDetailsRequest
 */
export type ContactApiGetPersonnelContactDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly contactId: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly isActive?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly relationshipCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly contactId2?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly countryCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly cobraIsActive?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly cobraStatus?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly isBeneficiary?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly isDependent?: string
    
    /**
    * Used to find date of COBRA event less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly dateOfCobraEvent?: string
    
    /**
    * Used to find contact status as of date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly statusAsOfDate?: string
    
    /**
    * 
    * @type {number}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof ContactApiGetPersonnelContactDetails
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for getPersonnelDetails operation in ContactApi.
 * @export
 * @interface ContactApiGetPersonnelDetailsRequest
 */
export type ContactApiGetPersonnelDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly isActive?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly relationshipCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly contactId?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly countryCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly cobraIsActive?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly cobraStatus?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly isBeneficiary?: string
    
    /**
    * 
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly isDependent?: string
    
    /**
    * Used to find date of COBRA event less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly dateOfCobraEvent?: string
    
    /**
    * Used to find contact status as of date less than, greater than,equal to, or between passed date(s)
    * @type {string}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly statusAsOfDate?: string
    
    /**
    * 
    * @type {number}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof ContactApiGetPersonnelDetails
    */
    readonly perPage?: number
    
}

/**
 * ContactApiGenerated - object-oriented interface
 * @export
 * @class ContactApiGenerated
 * @extends {BaseAPI}
 */
export class ContactApiGenerated extends BaseAPI {
    /**
     * Get all details for a single person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts/{contactId}?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts/{contactId}?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get all details for a single person assigned to an employee as a contact
     * @param {ContactApiGetPersonnelContactDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApiGenerated
     */
    public getPersonnelContactDetails(requestParameters: ContactApiGetPersonnelContactDetailsRequest, options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).getPersonnelContactDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all details for a person assigned to an employee as a contact.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /contacts?statusAsOfDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /contacts?statusAsOfDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /contacts?statusAsOfDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /contacts?statusAsOfDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get all details for a person assigned to an employee as a contact
     * @param {ContactApiGetPersonnelDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApiGenerated
     */
    public getPersonnelDetails(requestParameters: ContactApiGetPersonnelDetailsRequest = {}, options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).getPersonnelDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}