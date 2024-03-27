/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorDetails } from './error-details';
import { MultiStatusResponseMultistatusInner } from './multi-status-response-multistatus-inner';

/**
 * 
 * @export
 * @interface MultiStatusResponse
 */
export interface MultiStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof MultiStatusResponse
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiStatusResponse
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiStatusResponse
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof MultiStatusResponse
     */
    'errorCount'?: number;
    /**
     * 
     * @type {Array<MultiStatusResponseMultistatusInner>}
     * @memberof MultiStatusResponse
     */
    'multistatus'?: Array<MultiStatusResponseMultistatusInner>;
    /**
     * 
     * @type {number}
     * @memberof MultiStatusResponse
     */
    'success_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof MultiStatusResponse
     */
    'error_count'?: number;
    /**
     * 
     * @type {Array<ErrorDetails>}
     * @memberof MultiStatusResponse
     */
    'errors'?: Array<ErrorDetails>;
}
