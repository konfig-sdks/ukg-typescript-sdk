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
import { UltimateSoftwareFoundationServicesApiUltiProConfigurationPlatformConfigurationModelsPcFieldSchema } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PlatformConfigurationCustomFieldsSchemaApi - axios parameter creator
 * @export
 */
export const PlatformConfigurationCustomFieldsSchemaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets Platform Configuration standard classes custom fields schema info from the MetaDocument table. <br /> UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service.
         * @summary Gets Platform Configuration standard classes custom fields schema
         * @param {string} [className] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsSchema: async (className?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/platform-configuration/custom-fields-schema`;
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
            if (className !== undefined) {
                localVarQueryParameter['className'] = className;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/platform-configuration/custom-fields-schema',
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
 * PlatformConfigurationCustomFieldsSchemaApi - functional programming interface
 * @export
 */
export const PlatformConfigurationCustomFieldsSchemaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlatformConfigurationCustomFieldsSchemaApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets Platform Configuration standard classes custom fields schema info from the MetaDocument table. <br /> UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service.
         * @summary Gets Platform Configuration standard classes custom fields schema
         * @param {PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFieldsSchema(requestParameters: PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UltimateSoftwareFoundationServicesApiUltiProConfigurationPlatformConfigurationModelsPcFieldSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFieldsSchema(requestParameters.className, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlatformConfigurationCustomFieldsSchemaApi - factory interface
 * @export
 */
export const PlatformConfigurationCustomFieldsSchemaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlatformConfigurationCustomFieldsSchemaApiFp(configuration)
    return {
        /**
         * Gets Platform Configuration standard classes custom fields schema info from the MetaDocument table. <br /> UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service.
         * @summary Gets Platform Configuration standard classes custom fields schema
         * @param {PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFieldsSchema(requestParameters: PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UltimateSoftwareFoundationServicesApiUltiProConfigurationPlatformConfigurationModelsPcFieldSchema> {
            return localVarFp.getFieldsSchema(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFieldsSchema operation in PlatformConfigurationCustomFieldsSchemaApi.
 * @export
 * @interface PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest
 */
export type PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchema
    */
    readonly className?: string
    
}

/**
 * PlatformConfigurationCustomFieldsSchemaApiGenerated - object-oriented interface
 * @export
 * @class PlatformConfigurationCustomFieldsSchemaApiGenerated
 * @extends {BaseAPI}
 */
export class PlatformConfigurationCustomFieldsSchemaApiGenerated extends BaseAPI {
    /**
     * Gets Platform Configuration standard classes custom fields schema info from the MetaDocument table. <br /> UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service.
     * @summary Gets Platform Configuration standard classes custom fields schema
     * @param {PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlatformConfigurationCustomFieldsSchemaApiGenerated
     */
    public getFieldsSchema(requestParameters: PlatformConfigurationCustomFieldsSchemaApiGetFieldsSchemaRequest = {}, options?: AxiosRequestConfig) {
        return PlatformConfigurationCustomFieldsSchemaApiFp(this.configuration).getFieldsSchema(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}