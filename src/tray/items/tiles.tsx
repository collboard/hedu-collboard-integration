import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { heduOutline } from '../heduFilters';

export function itemsTiles(): ITrayDynamicItemList {
    return {
        tileCorner: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileCorner90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileCorner180: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileCorner270: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileMono: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
        tileDuo: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.yellow,
            filters: [heduOutline],
        },
        tileDuo90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.yellow,
            filters: [heduOutline],
        },
        tileFlash: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="60" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileFlashReverse: {
            content: (
                <g>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileFlash90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileFlashReverse90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="60"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileFour: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
        tileL: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                    <rect width="30" height="30" x="30" y="60"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileL90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileL180: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="60"></rect>
                    <rect width="30" height="30" x="0" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileL270: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="60" y="30"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileLReverse: {
            content: (
                <g>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="60"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileLReverse90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="60" y="30"></rect>
                    <rect width="30" height="30" x="0" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileLReverse180: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileLReverse270: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                    <rect width="30" height="30" x="60" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.red,
            filters: [heduOutline],
        },
        tileI4: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                    <rect width="30" height="30" x="0" y="90"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.yellow,
            filters: [heduOutline],
        },
        tileI490: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                    <rect width="30" height="30" x="90" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.yellow,
            filters: [heduOutline],
        },
        tileI3: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileI390: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
            filters: [heduOutline],
        },
        tileSteamboat: {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="60" y="30"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
        tileSteamboat90: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                    <rect width="30" height="30" x="0" y="60"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
        tileSteamboat180: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="60" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
        tileSteamboat270: {
            // Rotated item
            content: (
                <g>
                    <rect width="30" height="30" x="30" y="0"></rect>
                    <rect width="30" height="30" x="30" y="30"></rect>
                    <rect width="30" height="30" x="30" y="60"></rect>
                    <rect width="30" height="30" x="0" y="30"></rect>
                </g>
            ),
            defaultColor: heduDrawingColors.green,
            filters: [heduOutline],
        },
    };
}

export function toolbarTiles(): ITrayDynamicToolbarGroup {
    return [{ title: <Translate name={`Hedu / tiles`}>Parkety</Translate>, itemIds: Object.keys(itemsTiles()) }];
}
