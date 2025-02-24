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
import { MultiStatusResponse } from '../models';
// @ts-ignore
import { OrgLevels } from '../models';
// @ts-ignore
import { OrgLevelsBodyInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ViewOrCreateOrganizationLevelsApi - axios parameter creator
 * @export
 */
export const ViewOrCreateOrganizationLevelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new UltiPro org-level configuration, Array of objects is permitted for multi-records support. Permissions - Ultipro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create org-level configuration
         * @param {Array<OrgLevelsBodyInner>} orgLevelsBodyInner The org-level to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrgLevelConfig: async (orgLevelsBodyInner: Array<OrgLevelsBodyInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgLevelsBodyInner' is not null or undefined
            assertParamExists('createOrgLevelConfig', 'orgLevelsBodyInner', orgLevelsBodyInner)
            const localVarPath = `/configuration/v1/org-levels`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: orgLevelsBodyInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/org-levels',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(orgLevelsBodyInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns information about the UltiPro org-level configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get all org-levels
         * @param {string} [levelDescription] Description of the org-level.
         * @param {string} [code] Organization code.
         * @param {string} [budgetGroup] Organizational budget group.
         * @param {string} [reportingCategory] Reporting category.
         * @param {boolean} [isActive] Active status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllOrgLevels: async (levelDescription?: string, code?: string, budgetGroup?: string, reportingCategory?: string, isActive?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/org-levels`;
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
            if (levelDescription !== undefined) {
                localVarQueryParameter['levelDescription'] = levelDescription;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (budgetGroup !== undefined) {
                localVarQueryParameter['budgetGroup'] = budgetGroup;
            }

            if (reportingCategory !== undefined) {
                localVarQueryParameter['reportingCategory'] = reportingCategory;
            }

            if (isActive !== undefined) {
                localVarQueryParameter['isActive'] = isActive;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/org-levels',
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
 * ViewOrCreateOrganizationLevelsApi - functional programming interface
 * @export
 */
export const ViewOrCreateOrganizationLevelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ViewOrCreateOrganizationLevelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new UltiPro org-level configuration, Array of objects is permitted for multi-records support. Permissions - Ultipro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create org-level configuration
         * @param {ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrgLevelConfig(requestParameters: ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiStatusResponse>> {
            const orgLevelsBodyInner: Array<OrgLevelsBodyInner> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrgLevelConfig(orgLevelsBodyInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns information about the UltiPro org-level configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get all org-levels
         * @param {ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllOrgLevels(requestParameters: ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OrgLevels>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllOrgLevels(requestParameters.levelDescription, requestParameters.code, requestParameters.budgetGroup, requestParameters.reportingCategory, requestParameters.isActive, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ViewOrCreateOrganizationLevelsApi - factory interface
 * @export
 */
export const ViewOrCreateOrganizationLevelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ViewOrCreateOrganizationLevelsApiFp(configuration)
    return {
        /**
         * Creates a new UltiPro org-level configuration, Array of objects is permitted for multi-records support. Permissions - Ultipro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create org-level configuration
         * @param {ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrgLevelConfig(requestParameters: ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest, options?: AxiosRequestConfig): AxiosPromise<MultiStatusResponse> {
            return localVarFp.createOrgLevelConfig(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns information about the UltiPro org-level configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get all org-levels
         * @param {ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllOrgLevels(requestParameters: ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<OrgLevels>> {
            return localVarFp.getAllOrgLevels(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createOrgLevelConfig operation in ViewOrCreateOrganizationLevelsApi.
 * @export
 * @interface ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest
 */
export type ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest = Array<OrgLevelsBodyInner>

/**
 * Request parameters for getAllOrgLevels operation in ViewOrCreateOrganizationLevelsApi.
 * @export
 * @interface ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest
 */
export type ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest = {
    
    /**
    * Description of the org-level.
    * @type {string}
    * @memberof ViewOrCreateOrganizationLevelsApiGetAllOrgLevels
    */
    readonly levelDescription?: string
    
    /**
    * Organization code.
    * @type {string}
    * @memberof ViewOrCreateOrganizationLevelsApiGetAllOrgLevels
    */
    readonly code?: string
    
    /**
    * Organizational budget group.
    * @type {string}
    * @memberof ViewOrCreateOrganizationLevelsApiGetAllOrgLevels
    */
    readonly budgetGroup?: string
    
    /**
    * Reporting category.
    * @type {string}
    * @memberof ViewOrCreateOrganizationLevelsApiGetAllOrgLevels
    */
    readonly reportingCategory?: string
    
    /**
    * Active status.
    * @type {boolean}
    * @memberof ViewOrCreateOrganizationLevelsApiGetAllOrgLevels
    */
    readonly isActive?: boolean
    
}

/**
 * ViewOrCreateOrganizationLevelsApiGenerated - object-oriented interface
 * @export
 * @class ViewOrCreateOrganizationLevelsApiGenerated
 * @extends {BaseAPI}
 */
export class ViewOrCreateOrganizationLevelsApiGenerated extends BaseAPI {
    /**
     * Creates a new UltiPro org-level configuration, Array of objects is permitted for multi-records support. Permissions - Ultipro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Create org-level configuration
     * @param {ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewOrCreateOrganizationLevelsApiGenerated
     */
    public createOrgLevelConfig(requestParameters: ViewOrCreateOrganizationLevelsApiCreateOrgLevelConfigRequest, options?: AxiosRequestConfig) {
        return ViewOrCreateOrganizationLevelsApiFp(this.configuration).createOrgLevelConfig(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns information about the UltiPro org-level configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get all org-levels
     * @param {ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewOrCreateOrganizationLevelsApiGenerated
     */
    public getAllOrgLevels(requestParameters: ViewOrCreateOrganizationLevelsApiGetAllOrgLevelsRequest = {}, options?: AxiosRequestConfig) {
        return ViewOrCreateOrganizationLevelsApiFp(this.configuration).getAllOrgLevels(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
