import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Home from "../pages/Home/Home";
import {Layout} from "../pages";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Home">
        <Home/>
      </ComponentPreview>
      <ComponentPreview path="/Layout">
        <Layout/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;