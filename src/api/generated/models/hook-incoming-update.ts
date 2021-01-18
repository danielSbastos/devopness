/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface HookIncomingUpdate
 */
export interface HookIncomingUpdate {
    /**
     * Unique ID of the hook to be updated
     * @type {string}
     * @memberof HookIncomingUpdate
     */
    id: string;
    /**
     * The name given to incoming hook
     * @type {string}
     * @memberof HookIncomingUpdate
     */
    name: string;
    /**
     * Determines if the hook requires a secret to be triggered
     * @type {boolean}
     * @memberof HookIncomingUpdate
     */
    requires_secret: boolean;
    /**
     * The hash algorithm used to check payload integrity of the request
     * @type {string}
     * @memberof HookIncomingUpdate
     */
    secret_algorithm?: string;
    /**
     * The request header used to give the secret to Devopness
     * @type {string}
     * @memberof HookIncomingUpdate
     */
    secret_header_name?: string;
}
