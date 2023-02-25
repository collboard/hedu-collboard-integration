import {
  ITrayDynamicDefinition
} from '@collboard/modules-sdk';
import { HeduItemsGenerator } from './HeduItems';


export const trayDefinition: ITrayDynamicDefinition = {
    className: 'HeduModule',
    getItems: HeduItemsGenerator.items.bind(HeduItemsGenerator),
    getToolbarItems: HeduItemsGenerator.toolbar.bind(HeduItemsGenerator),
};
