import { ITrayDynamicItemList, ITrayDynamicToolbarItems, NOT_CONSTRUCTABLE, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { itemsArrowGraphs, toolbarArrowGraphs } from './items/arrowGraphs';
import { itemsBus, toolbarBus } from './items/bus';
import { itemsClocks, toolbarClocks } from './items/clocks';
import { itemsCoins, toolbarCoins } from './items/coins';
import { itemsCubes, toolbarCubes } from './items/cubes';
import { itemsDice, toolbarDice } from './items/dice';
import { itemsGrids, toolbarGrids } from './items/grids';
import { itemsIndianMultiplication, toolbarIndianMultiplication } from './items/indianMultiplication';
import { itemsLeson, toolbarLeson } from './items/leson';
import { itemsMultiplicationSquares, toolbarMultiplicationSquares } from './items/multiplicationSquares';
import { itemsOperators } from './items/operators';
import { itemsPark, toolbarPark } from './items/park';
import { itemsScales, toolbarScales } from './items/scales';
import { itemsShapes, toolbarShapes } from './items/shapes';
import { itemsSnakes, toolbarSnakes } from './items/snakes';
import { itemsStepping, toolbarStepping } from './items/stepping';
import { itemsSticks, toolbarSticks } from './items/sticks';
import { itemsSumTriangles, toolbarSumTriangles } from './items/sumTriangles';
import { itemsTiles, toolbarTiles } from './items/tiles';
import { itemsTrains, toolbarTrains } from './items/trains';
import { itemsWebs, toolbarWebs } from './items/webs';

export class HeduItemsGenerator {
    public static readonly [NOT_CONSTRUCTABLE] = true;

    private constructor() {
        throw new Error(`HeduItemsGenerator is a static class which is not constructable.`);
    }

    static privateItems: ITrayDynamicItemList;
    static privateToolbar: ITrayDynamicToolbarItems;

    public static items(): ITrayDynamicItemList {
        if (!this.privateItems) {
            this.privateItems = HeduItemsGenerator.createItems();
        }

        return this.privateItems;
    }

    public static toolbar(): ITrayDynamicToolbarItems {
        if (!this.privateToolbar) {
            this.privateToolbar = HeduItemsGenerator.createToolbar();
        }

        return this.privateToolbar;
    }

    private static createItems(): ITrayDynamicItemList {
        return {
            ...itemsArrowGraphs(),
            ...itemsCubes(),
            ...itemsGrids(),
            ...itemsLeson(),
            ...itemsMultiplicationSquares(),
            ...itemsScales(),
            ...itemsShapes(),
            ...itemsSnakes(),
            ...itemsSticks(),
            ...itemsSumTriangles(),
            ...itemsTiles(),
            ...itemsTrains(),
            ...itemsOperators(),
            ...itemsWebs(),
            ...itemsStepping(),
            ...itemsIndianMultiplication(),
            ...itemsBus(),
            ...itemsClocks(),
            ...itemsCoins(),
            ...itemsPark(),
            ...itemsDice(),
        };
    }

    private static createToolbar(): ITrayDynamicToolbarItems {
        return [
            {
                title: <Translate name={`Hedu / tiles`}>Parkety</Translate>,
                scale: 0.8,
                icon: 'tiles.svg',
                items: toolbarTiles(),
            },
            {
                title: <Translate name={`Hedu / grids`}>Mřížky</Translate>,
                scale: 0.5,
                icon: 'grids.svg',
                items: toolbarGrids(),
            },
            {
                title: <Translate name={`Hedu / trains`}>Vláčky</Translate>,
                scale: 0.8,
                icon: 'trains.svg',
                items: toolbarTrains(),
            },
            {
                title: <Translate name={`Hedu / sticks`}>Dřívka</Translate>,
                scale: 0.7,
                icon: 'sticks.svg',
                items: toolbarSticks(),
            },
            {
                title: <Translate name={`Hedu / cubes`}>Krychle</Translate>,
                scale: 1,
                icon: 'cubes.svg',
                items: toolbarCubes(),
            },
            {
                title: <Translate name={`Hedu / shapes`}>Tvary</Translate>,
                scale: 1,
                icon: 'shapes.svg',
                items: toolbarShapes(),
            },
            {
                title: <Translate name={`Hedu / sum triangles`}>Součtové trojúhelníky</Translate>,
                scale: 0.35,
                icon: 'sumTriangles.svg',
                items: toolbarSumTriangles(),
            },
            {
                title: <Translate name={`Hedu / multiplication squares`}>Násobilkové čtverce</Translate>,
                scale: 0.35,
                icon: 'multiplicationSquares.svg',
                items: toolbarMultiplicationSquares(),
            },
            {
                title: <Translate name={`Hedu / arrow graphs`}>Šipkové grafy a pavučiny</Translate>,
                scale: 0.35,
                icon: 'arrowGraphs.svg',
                items: [...toolbarArrowGraphs(), ...toolbarWebs()],
            },
            {
                title: <Translate name={`Hedu / snakes`}>Hadi</Translate>,
                scale: 0.7,
                icon: 'snakes.svg',
                items: toolbarSnakes(),
            },
            {
                title: <Translate name={`Hedu / leson`}>Zvířátka dědy Lesoně</Translate>,
                scale: 1,
                icon: 'leson.svg',
                items: toolbarLeson(),
            },
            {
                title: <Translate name={`Hedu / scales`}>Váhy</Translate>,
                scale: 1,
                icon: 'scales.svg',
                items: toolbarScales(),
            },
            {
                title: <Translate name={`Hedu / stepping`}>Krokování a šipkový zápis v mříži</Translate>,
                scale: 1,
                icon: 'stepping.svg',
                items: toolbarStepping(),
            },
            {
                title: <Translate name={`Hedu / indian multiplication`}>Indické násobení</Translate>,
                scale: 0.35,
                icon: 'indianMultiplication.svg',
                items: toolbarIndianMultiplication(),
            },
            {
                title: <Translate name={`Hedu / bus`}>Autobus</Translate>,
                scale: 0.35,
                icon: 'bus.svg',
                items: toolbarBus(),
            },
            {
                title: <Translate name={`Hedu / clocks`}>Ciferníky</Translate>,
                scale: 0.35,
                icon: 'clocks.svg',
                items: toolbarClocks(),
            },
            {
                title: <Translate name={`Hedu / coins`}>Mince</Translate>,
                scale: 1,
                icon: 'coins.svg',
                items: toolbarCoins(),
            },
            {
                title: <Translate name={`Hedu / park`}>Dětský park</Translate>,
                scale: 0.5,
                icon: 'park.svg',
                items: toolbarPark(),
            },
            {
                title: <Translate name={`Hedu / dice`}>Stěny kostky</Translate>,
                scale: 1,
                icon: 'dice.svg',
                items: toolbarDice(),
            },
        ];
    }
}
