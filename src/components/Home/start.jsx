import React from 'react';
import { Busqueda } from '../input';
import { useSelector, useDispatch } from "react-redux";
import { memo, useEffect, useState } from "react";
import { changeStateTool, deleteTool } from '../../store/toolSlider/toolSlice';

export const Start=({tools, busqueda})=>{
    const dispatch=useDispatch()
    const similitudes = tools.filter((tool, index) => {
        const toolLowerCase = tool.tool.toLowerCase();
        const searchLowerCase = busqueda.toLowerCase();
        const results = toolLowerCase.includes(searchLowerCase);
        return results;
  });
  return (
    <div >
      <ul
        style={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {busqueda.length === 0
          ? tools.map((tool, index) => {
              const styleSubrayed = tool.finish ? "line-through" : "none";
              return (
                <div
                  key={index}
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    textDecorationLine: styleSubrayed,
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const { finish } = tools[index];
                      dispatch(changeStateTool({ index, finish: !finish }));
                    }}
                  >
                    &#10003;{" "}
                  </span>
                  <li
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    {tool.tool}
                  </li>
                  <span
                    onClick={() => {
                      dispatch(deleteTool({ index }));
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })
          : similitudes.map((tool, index) => {
              const styleSubrayed = tool.finish ? "line-through" : "none";
              return (
                <div
                  key={index}
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    textDecorationLine: styleSubrayed,
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const { finish } = tools[index];
                      dispatch(changeStateTool({ index, finish: !finish }));
                    }}
                  >
                    &#10003;{" "}
                  </span>
                  <li
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    {tool.tool}
                  </li>
                  <span
                    onClick={() => {
                      dispatch(deleteTool({ index }));
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
      </ul>
    </div>
  );




}