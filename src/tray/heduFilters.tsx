import React from 'react';

export function heduOutline(source: JSX.Element): JSX.Element {
    // TODO: optimize (maybe filter `source` for the outline?)
    return (
        <>
            <g style={{ strokeWidth: 6 }}>{source}</g>
            <g style={{ strokeWidth: 2 }}>{source}</g>
        </>
    );
}
