import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    console.log("props", props);
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color}/>
            </Sparklines>
             {/* <td>
                <Sparklines height={120} width={180} data={temp}>
                    <SparklinesLine color="red"/>
                </Sparklines>
            </td>
            <td>
                <Sparklines height={120} width={180} data={pressure}>
                    <SparklinesLine color="red"/>
                </Sparklines>
            </td>
            <td>
                <Sparklines height={120} width={180} data={humidity}>
                    <SparklinesLine color="red"/>
                </Sparklines>
            </td> */}
        </div>
    )
}