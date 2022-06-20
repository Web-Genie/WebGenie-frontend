# 🖥 WebGenie

웹사이트를 만들고 싶지만 만드는 과정이 복잡하고 어려워 고민하고 계시나요?

손 쉽게 웹사이트를 만들 수 있는 웹 에디터 서비스, WebGenie입니다!

WebGenie를 통해 몇 번의 클릭과 Drag and Drop으로 멋진 웹사이트를 만들 수 있습니다.

`# No Coding` `# Beginner Friendly`

<br>

## 🗂 Contents

- [🖥 WebGenie](#-webgenie)
- [📎 Link](#-link)
- [🔍 Preview](#-preview)
- [🔑 Getting Started](#-getting-started)
- [‼️ Motivation](#️-motivation)
- [🌈 Features](#-features)
- [🛠 Tech Stacks](#-tech-stacks)
- [🗓 Planning](#-planning)
- [📝 Technical Log](#-technical-log)

<br>

## 📎 Link

**Deploy**

- [WebGenie](https://webgenie.online)

<br>

**Git Repository**

- [Frontend](https://github.com/Web-Genie/WebGenie-webgenie-frontend)
- [Backend](https://github.com/Web-Genie/WebGenie-webgenie-backend)

<br>

## 🔍 Preview

https://user-images.githubusercontent.com/83770081/174348067-990a70fe-b2d2-4fbf-a981-a8ced8ef0ba7.mp4

<br>

## 🔑 Getting Started

<br>

## ‼️ Motivation

웹사이트를 만들 일이 생기면 제일 먼저 하는 일은 전문지식이 많지 않아도 간단하게 만들 수 있는 플랫폼을 찾는 일이었습니다. 과거에 사용자로써 당연하게 여기며 사용해왔던 것들을 우리가 가진 기술로 구현해보는 것이 어떨가?라는 생각에서 출발하였습니다.

<br>

## 🌈 Features

- **_Drag and Drop_**

  ```
  템플릿에 올려놓은 font, image, button을 drag and drop을 이용하여 자유자재로 이동시킬 수 있습니다.
  ```

- **_Resizing_**

  ```
  템플릿에 올려놓은 font, image, button을 클릭하여, Mouse Down 된 상태에서 마우스가 왼쪽으로 가면, 
  
  크기를 감소시켜주고 오른쪽으로 가면 크기를 증가시켜줍니다.
  ```

- **_Font, Image, Button, Background change_**

  ```
  글꼴, 글자 크기, 글자 색상, 글자 정렬, 글자 스타일을 바꿀 수 있습니다.

  이미지를 컴퓨터에서, url을 통해 넣을 수 있고 이미지 투명도, 밝기, blur를 조절할 수 있습니다.

  템플릿 배경의 색깔을 변경할 수 있습니다.
  ```

- **_Version Log_**

  ```jsx
  saved version log버튼을 누르면 사용자가 저장했던 시점의 기록이 나타나며 최근 시점부터 과거로 이어지게 됩니다.
  
  특정 시점을 클릭하게 되면 그 때 사용자가 저장했던 템플릿으로 돌아가게 됩니다.
  ```

- **_Keypress Event_**

  ```jsx
  버튼과 이미지, 글자를 클릭 한 후 Ctrl + C를 하면 복사, Ctrl + V를 하면 붙여넣기, Ctrl + Z를 누르면 이전 시점으로 돌아가게 됩니다.
  ```

- **_Deploy_**
  ```jsx
  사용자가 publish버튼을 누르면 고유한 url을 생성해주며 다른 사람들에게 자신의 웹사이트 주소를 공유할 수 있습니다.
  ```

<br>

## 🛠 Tech Stacks

**_Frontend_**

- React
- React-router-dom
- styled-components
- Prop-Types

**_Backend_**

- Node.js
- Express
- MongoDB
- Mongoose

**_Testing_**

- Jest
- React Testing Library
- Mocha, Chai, Supertest

**_Deployment_**

- Netlify
- AWS Elastic Beanstalk

## 🗓 Planning

**_프로젝트 기간_**

**2022년 5월 30일 ~ 6월 16일**

- 5월 30일 ~ 6월 2일 : 아이디어 기획, 목업 작성, 애자일 스프린트 플랜 작성
- 6월 3일 ~ 6월 16일 : 개발 진행, 배포, 테스트 작성

## 📝 Technical Log

### React + DOM Manipulation

이번 프로젝트의 핵심 기능인 Drag and Drop이랑 Resizing 기능 모두 DOM 조작이 필요했습니다. 조사를 해본 결과 HTML Drag and Drop API를 알게 되었고 이것을 사용해서 사용자가 자유롭게 드래그해서 수정할 요소들을 도화지에 올려둘 수 있는 기능을 구현을 해봤습니다. 도화지 내부에 올려진 요소들은 Mouse 이벤트와 클릭한 요소의 DOMRect를 이용해서 마우스가 움직일 때마다 위치를 계속 변경시켜줬습니다.

### 충돌하는 DOM Elements

Drag And Drop을 이용해서 조작되는 요소 간의 충돌이 있었습니다. 이유는 조작되는 HTML 요소들은 문서의 흐름에 따라야 했기 때문에 각 요소만의 block이 존재했습니다. 하지만 이 문제는 CSS `position:absolute`를 적용해줌으로써 요소를 일반적인 문서 흐름에서 제거하고, 자유로운 drag and drop을 구현할 수 있었습니다. `position absolute`를 적용하고 요소들이 위아래 중첩 돼도 문제는 없었습니다.

### Code Injection 방지

사용자가 작업한 HTML 코드를 저장해주는 저의 시스템상, 저장된 코드를 다시 불러와 주는 과정에서 **Code Injection**이 가능했습니다. 저희는 사용자의 저장된 코드를 다시 DOM에 그려주는 과정에서 악성코드를 방지하기 위해서 dompurify라는 라이브러리를 사용하게 되었습니다. 사용자의 코드를 DOM에 그려주기 전에 악성코드를 필터링해주고 그려주는 작업을 거침으로써 악성코드가 없는 HTML 코드가 사용자 Editor에 적용됩니다.

### Drag and Drop 이용한 요소들의 위치 모든 화면 크기 대응

사용자가 마우스로 조작한 요소들의 위치를 잡아주는 것은 마우스 이벤트가 주는 좌표 기준으로 계산해서 PX 단위로 적용을 시켜줬습니다. 하지만 저희 Editor 자체가 보통 화면 크기보다 작다 보니깐 실제로 화면 크기가 커지거나 작아지면 요소들의 위치는 계속 바뀌는 문제가 있었습니다. 이 문제를 극복하기 위해서는 responsive 하게 위치를 잡아줄 필요가 있었습니다. 최종적으로 저희가 결론 내린 방법은, 해당 요소의 부모 width, height 기준으로 퍼센트를 주는 것이었습니다. 아래 로직으로 요소의 left와 top을 최종 위치시켜줄 때 percentage로 적용했습니다. 이렇게 함으로써 부모의 크기 기반으로 요소들은 위치가 됩니다.

```
    const parentContainerWidth = parentRef.current.getBoundingClientRect().width;
    const parentContainerHeight = parentRef.current.getBoundingClientRect().height;

    targetRef.current.style.left = `${(coordinates.x / parentContainerWidth) * 100}%`;
    targetRef.current.style.top = `${(coordinates.y / parentContainerHeight) * 100}%`;
```

