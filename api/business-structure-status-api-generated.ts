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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BusinessStructureStatusApi - axios parameter creator
 * @export
 */
export const BusinessStructureStatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}) . 
         * @summary Gets a list of Employees for which there is a change in business structure
         * @param {string} modifiedAfterDateTime 
         * @param {string} companyId 
         * @param {string} [effectiveDate] 
         * @param {string} [employeeId] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEmployeesChangeBusinessStructure: async (modifiedAfterDateTime: string, companyId: string, effectiveDate?: string, employeeId?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modifiedAfterDateTime' is not null or undefined
            assertParamExists('listEmployeesChangeBusinessStructure', 'modifiedAfterDateTime', modifiedAfterDateTime)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listEmployeesChangeBusinessStructure', 'companyId', companyId)
            const localVarPath = `/personnel/v1/integration/kronos/business-structure-status`;
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
            if (modifiedAfterDateTime !== undefined) {
                localVarQueryParameter['modifiedAfterDateTime'] = (modifiedAfterDateTime as any instanceof Date) ?
                    (modifiedAfterDateTime as any).toISOString() :
                    modifiedAfterDateTime;
            }

            if (companyId !== undefined) {
                localVarQueryParameter['companyId'] = companyId;
            }

            if (effectiveDate !== undefined) {
                localVarQueryParameter['effectiveDate'] = (effectiveDate as any instanceof Date) ?
                    (effectiveDate as any).toISOString() :
                    effectiveDate;
            }

            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
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
                pathTemplate: '/personnel/v1/integration/kronos/business-structure-status',
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
 * BusinessStructureStatusApi - functional programming interface
 * @export
 */
export const BusinessStructureStatusApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BusinessStructureStatusApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}) . 
         * @summary Gets a list of Employees for which there is a change in business structure
         * @param {BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEmployeesChangeBusinessStructure(requestParameters: BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEmployeesChangeBusinessStructure(requestParameters.modifiedAfterDateTime, requestParameters.companyId, requestParameters.effectiveDate, requestParameters.employeeId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BusinessStructureStatusApi - factory interface
 * @export
 */
export const BusinessStructureStatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BusinessStructureStatusApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}) . 
         * @summary Gets a list of Employees for which there is a change in business structure
         * @param {BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEmployeesChangeBusinessStructure(requestParameters: BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest, options?: AxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.listEmployeesChangeBusinessStructure(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listEmployeesChangeBusinessStructure operation in BusinessStructureStatusApi.
 * @export
 * @interface BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest
 */
export type BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly modifiedAfterDateTime: string
    
    /**
    * 
    * @type {string}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly companyId: string
    
    /**
    * 
    * @type {string}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly effectiveDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {number}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof BusinessStructureStatusApiListEmployeesChangeBusinessStructure
    */
    readonly perPage?: number
    
}

/**
 * BusinessStructureStatusApiGenerated - object-oriented interface
 * @export
 * @class BusinessStructureStatusApiGenerated
 * @extends {BaseAPI}
 */
export class BusinessStructureStatusApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}) . 
     * @summary Gets a list of Employees for which there is a change in business structure
     * @param {BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessStructureStatusApiGenerated
     */
    public listEmployeesChangeBusinessStructure(requestParameters: BusinessStructureStatusApiListEmployeesChangeBusinessStructureRequest, options?: AxiosRequestConfig) {
        return BusinessStructureStatusApiFp(this.configuration).listEmployeesChangeBusinessStructure(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}