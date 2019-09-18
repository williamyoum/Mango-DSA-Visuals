import React from 'react';

const startColor = {
    r: 189,
    g: 255,
    b: 202
}

const endColor = {
    r: 255,
    g: 142,
    b: 36
}

function getBarColor(index, totalElements) {
    const r = startColor.r + Math.floor(index * (endColor.r - startColor.r) / totalElements)
    const g = startColor.g + Math.floor(index * (endColor.g - startColor.g) / totalElements)
    const b = startColor.b + Math.floor(index * (endColor.b - startColor.b) / totalElements)

    return '#' + rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
    const rHex = Number(r).toString(16);
    const gHex = Number(g).toString(16);
    const bHex = Number(b).toString(16);

    return rHex + gHex + bHex;
}

function Bar(props) {
    const widthValue = 100 / props.totalElements;
    const heightValue = props.value * 100 / props.totalElements;
    const style = {
        height: heightValue + '%',
        width: widthValue + '%',
        backgroundColor: getBarColor(props.value, props.totalElements)
    }

    return (
        <div style={style} />
    );

}
export default Bar;
