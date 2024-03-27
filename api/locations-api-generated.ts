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
import { Locations } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The locations endpoint returns information about the UltiPro locations configuration. The unique identifier for a locations configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single location configuration
         * @param {string} code location code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getConfiguration', 'code', code)
            const localVarPath = `/locations/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code !== undefined ? code : `-code-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/locations/{code}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The locations endpoint returns information about the UltiPro locations configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all locations configurations
         * @param {string} [countryCode] location country code.
         * @param {boolean} [isActive] Active status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations: async (countryCode?: string, isActive?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/locations`;
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
            if (countryCode !== undefined) {
                localVarQueryParameter['countryCode'] = countryCode;
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
                pathTemplate: '/locations',
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
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationsApiAxiosParamCreator(configuration)
    return {
        /**
         * The locations endpoint returns information about the UltiPro locations configuration. The unique identifier for a locations configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single location configuration
         * @param {LocationsApiGetConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfiguration(requestParameters: LocationsApiGetConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Locations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The locations endpoint returns information about the UltiPro locations configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all locations configurations
         * @param {LocationsApiGetConfigurationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurations(requestParameters: LocationsApiGetConfigurationsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Locations>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurations(requestParameters.countryCode, requestParameters.isActive, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationsApiFp(configuration)
    return {
        /**
         * The locations endpoint returns information about the UltiPro locations configuration. The unique identifier for a locations configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single location configuration
         * @param {LocationsApiGetConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration(requestParameters: LocationsApiGetConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<Locations> {
            return localVarFp.getConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * The locations endpoint returns information about the UltiPro locations configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all locations configurations
         * @param {LocationsApiGetConfigurationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations(requestParameters: LocationsApiGetConfigurationsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Locations>> {
            return localVarFp.getConfigurations(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getConfiguration operation in LocationsApi.
 * @export
 * @interface LocationsApiGetConfigurationRequest
 */
export type LocationsApiGetConfigurationRequest = {
    
    /**
    * location code.
    * @type {string}
    * @memberof LocationsApiGetConfiguration
    */
    readonly code: string
    
}

/**
 * Request parameters for getConfigurations operation in LocationsApi.
 * @export
 * @interface LocationsApiGetConfigurationsRequest
 */
export type LocationsApiGetConfigurationsRequest = {
    
    /**
    * location country code.
    * @type {string}
    * @memberof LocationsApiGetConfigurations
    */
    readonly countryCode?: string
    
    /**
    * Active status.
    * @type {boolean}
    * @memberof LocationsApiGetConfigurations
    */
    readonly isActive?: boolean
    
}

/**
 * LocationsApiGenerated - object-oriented interface
 * @export
 * @class LocationsApiGenerated
 * @extends {BaseAPI}
 */
export class LocationsApiGenerated extends BaseAPI {
    /**
     * The locations endpoint returns information about the UltiPro locations configuration. The unique identifier for a locations configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Retrieve a single location configuration
     * @param {LocationsApiGetConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public getConfiguration(requestParameters: LocationsApiGetConfigurationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The locations endpoint returns information about the UltiPro locations configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Retrieve all locations configurations
     * @param {LocationsApiGetConfigurationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public getConfigurations(requestParameters: LocationsApiGetConfigurationsRequest = {}, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getConfigurations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}