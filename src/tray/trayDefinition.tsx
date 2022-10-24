import {
    AbstractTrayArt,
    Authors,
    declareModule,
    ITrayDynamicDefinition,
    makeArtModule,
    makeDynamicTrayModule,
} from '@collboard/modules-sdk';
import hejny from '../../assets/icons/hejny.svg';
import { repository, version } from '../../package.json';
import { HeduItemsGenerator } from './HeduItems';


export const trayDefinition: ITrayDynamicDefinition = {
    className: 'HeduModule',
    getItems: HeduItemsGenerator.items.bind(HeduItemsGenerator),
    getToolbarItems: HeduItemsGenerator.toolbar.bind(HeduItemsGenerator),
};
