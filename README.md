# 🖥 WebGenie

<img src="https://user-images.githubusercontent.com/83770081/174787857-8d0a3ce2-dd8b-48a1-8480-5d946e4ab6f6.png" alt="brand logo" width=130 height=130/>

웹사이트를 만들고 싶지만 만드는 과정이 복잡하고 어려워 고민하고 계시나요?
손쉽게 웹사이트를 만들 수 있는 웹 에디터 서비스, **WebGenie**입니다!

WebGenie를 통해 몇 번의 클릭과 Drag and Drop으로 멋진 웹사이트를 만들 수 있습니다.
또한, 웹사이트를 만든 후 배포하게 되면 고유한 주소를 갖게 되어 친구들과 주변사람들에게 공유할 수 있습니다.

`# No Coding` `# Beginner Friendly`

<br>

## 🗂 Contents

- [🖥 WebGenie](#-webgenie)
- [📎 Link](#-link)
- [🔍 Preview](#-preview)
- [🔑 Getting Started](#-getting-started)
- [💡 Motivation](#-motivation)
- [🌈 Features](#-features)
- [🛠 Tech Stacks](#-tech-stacks)
- [🗓 Planning](#-planning)
- [📝 Technical Log](#-technical-log)
- [🔥 개발자 소개](#-참여한-개발자-소개)

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

### 🔑 Getting Started

- **_Frontend(React)_**

1. 프로젝트를 다운 받은 후 프로젝트 폴더 내에서 명령어를 실행합니다.

```
npm install
npm start
```

2. 환경변수 파일(.env)을 생성하고 아래와 같이 입력해야 합니다.

```
REACT_APP_API_KEY=<FIREBASE_API_KEY>
REACT_APP_AUTH_DOMAIN=<FIREBASE_AUTH_DOMAIN>
REACT_APP_PROJECT_ID=<FIREBASE_PROJECT_ID>
REACT_APP_FIREBASE_STORAGEBUCKET=<FIREBASE_STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGINGSENDERID=<FIREBASE_MESSAGING_SENDER_ID>
REACT_APP_ID=<FIREBASE_APP_ID>
REACT_APP_FIREBASE_MEASUREMENTID=<FIREBASE_MEASUREMENT_ID>
REACT_APP_API_ENDPOINT_URL=<BASE_URL>
```

- **_Backend(Express)_**

1.  프로젝트를 다운 받은 후 프로젝트 폴더 내에서 명령어를 실행합니다.

```
npm install
npm start
```

2.  환경변수 파일(.env)을 생성하고 아래와 같이 입력해야 합니다.

```
TYPE=<FIREBASE_TYPE>
PROJECT_ID=<FIREBASE_PROJECT_ID>
PRIVATE_KEY_ID=<FIREBASE_KEY_ID>
PRIVATE_KEY=<FIREBASE_PRIVATE_KEY>
CLIENT_EMAIL=<FIREBASE_CLIENT_EMAIL>
CLIENT_ID=<FIREBASE_CLIENT_ID>
AUTH_URI=<FIREBASE_AUTH_URI>
TOKEN_URI=<FIREBASE_TOKEN_URI>
AUTH_PROVIDER_X509_CERT_URL=<FIREBASE_AUTH_PROVIDER_CERT_URL>
CLIENT_X509_CERT_URL=<FIREBASE_CLIENT_CERT_URL>
MONGO_URI=<MONGO_URI>
```

  <br>

## 💡 Motivation

사용자로서 당연하게 여기며 사용해왔던 것들을 우리가 가진 기술로 구현해보는 것이 어떨까? 라는 생각에서 출발하였습니다. 과거에 웹사이트를 만들 일이 생기면 제일 먼저 전문지식이 많지 않아도 간단하게 만들 수 있는 플랫폼을 찾아보았고 그 플랫폼을 통해 좋은 경험을 했었습니다. 이런 좋은 경험을 우리가 서비스 해본다면 어떨지에 대해 의논해 보았고, 지금까지 무심코 사용해왔던 Drag and Drop과 Resizing과 같은 기능들을 구현해보면 좋겠다는 생각이 들어 이를 구체화시켜 보았습니다.

사용자는 편리하게 웹 사이트를 만들 수 있고 저희는 DOM, Javascript, React에 대해 깊게 고민하고 공부할 수 있을 것 같아 WebGenie를 만들게 되었습니다.

<br>

## 🌈 Features

- **_Drag and Drop_**

https://user-images.githubusercontent.com/83874298/174587981-67191f49-f0d9-43f5-9d8c-d43a02624973.mov

```
템플릿에 올려놓은 font, image, button을 drag and drop을 이용하여 자유자재로 이동시킬 수 있습니다.
```

<br>

- **_Resizing_**

https://user-images.githubusercontent.com/83874298/174588209-b25bb9b6-0d0e-47d7-9863-b5a5173fe1cc.mov

```
템플릿에 올려놓은 font, image, button을 클릭하여, Mouse Down 된 상태에서 마우스를 왼쪽으로 이동시키면, 크기를 감소시키고 오른쪽으로 이동시키면 크기를 증가시킵니다.

```

<br>

- **_Font, Image, Button, Background change_**

https://user-images.githubusercontent.com/83874298/174590723-0e6029e8-4bd1-4f04-af36-75388161cc1c.mov

https://user-images.githubusercontent.com/83874298/174588727-0c680b81-cd71-4278-9b84-24485a0f930d.mov

```
글꼴, 글자 크기, 글자 색상, 글자 정렬, 글자 스타일을 바꿀 수 있습니다.

이미지를 컴퓨터에서, URL을 통해 넣을 수 있고 이미지 투명도, 밝기, blur를 조절할 수 있습니다.

템플릿 배경의 색상을 변경할 수 있습니다.
```

<br>

- **_Version Log_**

https://user-images.githubusercontent.com/83874298/174588843-cead772e-bedd-4e05-87c1-35fb0e34b660.mov

```
saved version log 버튼을 누르면 사용자가 저장했던 시점의 기록이 나타나며 최근 시점부터 과거로 이어지게 됩니다.

특정 시점을 클릭하게 되면 그때 사용자가 저장했던 템플릿으로 돌아가게 됩니다.
```

<br>

- **_Keypress Event_**

https://user-images.githubusercontent.com/83874298/174589140-168a0093-8f5a-40ad-a43e-c83c1a47baf6.mov

```
버튼과 이미지, 글자를 클릭한 후 Ctrl + C를 하면 복사, Ctrl + V를 하면 붙여넣기, Ctrl + Z를 누르면 이전 시점으로 돌아가게 됩니다.
```

<br>

- **_Deploy_**

https://user-images.githubusercontent.com/83874298/174589248-77c93c3e-049b-4520-ad1f-82ae39c180ec.mov

```
사용자가 publish 버튼을 누르면 고유한 URL을 생성해주며 다른 사람들에게 자신의 웹사이트 주소를 공유할 수 있습니다.
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

<br>

## 🗓 Planning

**_프로젝트 기간_**

**2022년 5월 30일 ~ 6월 16일**

- 5월 30일 ~ 6월 2일 : 아이디어 기획, 목업 작성, 애자일 스프린트 플랜 작성
- 6월 3일 ~ 6월 17일 : 개발 진행, 배포, 테스트 작성

<br>

## 📝 Technical Log

### React + DOM Manipulation

이번 프로젝트의 핵심 기능인 Drag and Drop과 Resizing 기능 모두 DOM 조작을 필요로했습니다. 조사 해본 결과 HTML Drag and Drop API를 알게 되었고 이것을 사용해서 사용자가 자유롭게 드래그하여 수정할 요소들을 에디터 화면에 올려둘 수 있는 기능 구현을 하였습니다. 에디터 화면 내부에 올려진 요소들의 위치를 마우스 이벤트와 클릭한 요소의 DOMRect를 이용하여 실시간으로 변경하였습니다.

### 충돌하는 DOM Elements

Drag and Drop을 통해 조작되는 요소 간의 충돌이 있었습니다. HTML 요소들은 document의 흐름에 따라야 했기 때문에 각 엘리먼트만의 block이 존재했습니다. 하지만 이 문제를 CSS `position:absolute` 속성을 적용함으로써 엘리먼트들을 일반적인 document 흐름에서 제거하는 것으로 해결할 수 있었고, 자유로운 Drag and Drop을 구현할 수 있었습니다. 이후 엘리먼트들이 위아래로 중첩되어 있어도 추가적인 문제는 발생하지 않았습니다.

### Code Injection 방지

사용자가 작업한 HTML 코드를 저장해주는 로직을 기반으로 기능을 구현하였기 때문에 저장된 코드를 다시 불러오는 과정에서 _Code Injection_ 이 가능할 것으로 판단하였습니다. 사용자의 저장된 코드를 다시 DOM에 그려주는 과정에서 악성코드를 방지하기 위해 dompurify라는 라이브러리를 사용하게 되었습니다. 사용자의 코드를 DOM에 그려주기 전에 악성코드를 필터링해주고 그려주는 작업을 거침으로써 악성코드가 없는 HTML 코드가 사용자 Editor에 적용됩니다.

### Drag and Drop 이용한 요소들의 위치 모든 화면 크기 대응

사용자가 마우스로 조작한 요소들의 위치를 잡아주는 것은 마우스 이벤트가 제공하는 좌표 기준으로 계산하여 px 단위로 적용하였습니다. 하지만 구현한 Editor 크기와 비율이 일반적인 화면과 달랐기 때문에 화면의 크기에 따라 엘리먼트들의 위치가 지속적으로 변하는 문제가 있었습니다. 이 문제를 극복하기 위해서는 화면의 크기와 비율에 따라 위치를 잡아줄 필요가 있었습니다.

최종적으로 결정한 해결방법은 해당 엘리먼트의 부모 width, height 기준으로 퍼센트를 이용하는 것이었습니다. 하단의 로직으로 엘리먼트의 left와 top을 이용하여 최종으로 위치시켜줄 때 percentage를 적용했습니다. 그 결과 엘리먼트들은 부모의 크기 기반으로 위치하게 됩니다.

```
...
const parentContainerWidth = parentRef.current.getBoundingClientRect().width;
const parentContainerHeight = parentRef.current.getBoundingClientRect().height;

targetRef.current.style.left = `${(coordinates.x / parentContainerWidth) * 100}%`;
targetRef.current.style.top = `${(coordinates.y / parentContainerHeight) * 100}%`;
...
```

<br>

## 🔥 참여한 개발자 소개

<p align="center">

<img alt="개발자 소개 이미지" text-align="center" height=320 width=720 src="https://user-images.githubusercontent.com/83874298/182524556-40680d02-d6be-4d5a-bda7-c5599035eba5.png">
</p>
