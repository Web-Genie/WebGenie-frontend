import React, { useState } from "react";
import styled from "styled-components";

import testImg from "../assets/test.jpg"; //테스트 이미지 추후 삭제 요망

function EditorTemplate({
  imageOpacity,
  imageBrightness,
  imageBlur,
  buttonOpacity,
}) {
  return (
    <EditorTemplateBody>
      <Image
        src={testImg}
        width={500}
        imageBrightness={imageBrightness}
        imageOpacity={imageOpacity}
        imageBlur={imageBlur}
      />
      <Button>Test Button</Button>
    </EditorTemplateBody>
  );
}
const Image = styled.img`
  opacity: ${(props) => `${props.imageOpacity}`};
  filter: brightness(${(props) => `${props.imageBrightness}`})
    blur(${(props) => `${props.imageBlur}`}px);
`;

const Button = styled.button`
  padding: 30px 50px;
  font-size: 50px;
  opacity: ${(props) => `${props.buttonOpacity}`};
  border-radius: 10px;
  background-color: red;
`;

const EditorTemplateBody = styled.div`
  height: 78vh;
  width: 65%;
  overflow-y: scroll;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

export default EditorTemplate;
