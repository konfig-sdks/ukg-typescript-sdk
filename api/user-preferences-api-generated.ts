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
import { UserPreferencesDetails } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UserPreferencesApi - axios parameter creator
 * @export
 */
export const UserPreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Personnel Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get User Preferences Details
         * @param {string} [userID] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPreferencesDetails: async (userID?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/user-preferences`;
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
            if (userID !== undefined) {
                localVarQueryParameter['userID'] = userID;
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
                pathTemplate: '/personnel/v1/user-preferences',
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
 * UserPreferencesApi - functional programming interface
 * @export
 */
export const UserPreferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserPreferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Personnel Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get User Preferences Details
         * @param {UserPreferencesApiGetUserPreferencesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserPreferencesDetails(requestParameters: UserPreferencesApiGetUserPreferencesDetailsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserPreferencesDetails>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserPreferencesDetails(requestParameters.userID, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserPreferencesApi - factory interface
 * @export
 */
export const UserPreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserPreferencesApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Personnel Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get User Preferences Details
         * @param {UserPreferencesApiGetUserPreferencesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPreferencesDetails(requestParameters: UserPreferencesApiGetUserPreferencesDetailsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<UserPreferencesDetails>> {
            return localVarFp.getUserPreferencesDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUserPreferencesDetails operation in UserPreferencesApi.
 * @export
 * @interface UserPreferencesApiGetUserPreferencesDetailsRequest
 */
export type UserPreferencesApiGetUserPreferencesDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof UserPreferencesApiGetUserPreferencesDetails
    */
    readonly userID?: string
    
    /**
    * 
    * @type {number}
    * @memberof UserPreferencesApiGetUserPreferencesDetails
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof UserPreferencesApiGetUserPreferencesDetails
    */
    readonly perPage?: number
    
}

/**
 * UserPreferencesApiGenerated - object-oriented interface
 * @export
 * @class UserPreferencesApiGenerated
 * @extends {BaseAPI}
 */
export class UserPreferencesApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Personnel Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
     * @summary Get User Preferences Details
     * @param {UserPreferencesApiGetUserPreferencesDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserPreferencesApiGenerated
     */
    public getUserPreferencesDetails(requestParameters: UserPreferencesApiGetUserPreferencesDetailsRequest = {}, options?: AxiosRequestConfig) {
        return UserPreferencesApiFp(this.configuration).getUserPreferencesDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
