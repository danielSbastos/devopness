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


import { ActionRelation } from './action-relation';
import { NetworkRuleProtocol } from './network-rule-protocol';
import { NetworkRuleType } from './network-rule-type';

/**
 * 
 * @export
 * @interface NetworkRuleRelation
 */
export interface NetworkRuleRelation {
    /**
     * The ID of the given network rule
     * @type {number}
     * @memberof NetworkRuleRelation
     */
    id: number;
    /**
     * The rule\'s name/description/reminder
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleType}
     * @memberof NetworkRuleRelation
     */
    type: NetworkRuleType;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRuleRelation
     */
    protocol: NetworkRuleProtocol;
    /**
     * Starting range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRuleRelation
     */
    port_from: number;
    /**
     * Ending range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRuleRelation
     */
    port_to: number;
    /**
     * Starting range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    ip_address_from: string | null;
    /**
     * Ending range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    ip_address_to: string | null;
    /**
     * Indicates if the network rule was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof NetworkRuleRelation
     */
    auto_generated: boolean;
    /**
     * 
     * @type {ActionRelation}
     * @memberof NetworkRuleRelation
     */
    last_action: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    updated_at: string;
}

