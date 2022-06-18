# 🖥 WebGenie

웹사이트를 만들고 싶지만 만드는 과정이 복잡하고 어려워 고민하고 계시나요?

손 쉽게 웹사이트를 만들 수 있는 웹 에디터 서비스, WebGenie입니다!

WebGenie를 통해 몇 번의 클릭과 Drag and Drop으로 멋진 웹사이트를 만들 수 있습니다.

https://user-images.githubusercontent.com/83770081/174348067-990a70fe-b2d2-4fbf-a981-a8ced8ef0ba7.mp4


## 🗂 Contents

🖥 WebGenie

📎 Link

🔍 Preview

🔑 Getting Started

‼️ Motivation

🌈 Features

🛠 Tech Stacks

🗓 Planning

📝 Technical Log

## 📎 Link

**Deploy**

**Git Repository**

- [Frontend](https://github.com/Web-Genie/WebGenie-webgenie-frontend)
- [Backend](https://github.com/Web-Genie/WebGenie-webgenie-backend)

### 🔍 Preview

### 🔑 Getting Started

### ‼️ Motivation

웹사이트를 만들 일이 생기면 제일 먼저 하는 일은 전문지식이 많지 않아도 간단하게 만들 수 있는 플랫폼을 찾는 일이었습니다. 과거에 사용자로써 당연하게 여기며 사용해왔던 것들을 우리가 가진 기술로 구현해보는 것이 어떨가?라는 생각에서 출발하였습니다.

### 🌈 Features

- **_Drag and Drop_**

  ```
  템플릿에 올려놓은 font, image, button을 drag and drop을 이용하여 자유자재로 이동시킬 수 있습니다.

  ```

- **_Resizing_**

  ```
  템플릿에 올려놓은 font, image, button을 클릭하여 오른쪽, 왼쪽으로 당기면 크기를 조절할 수 있습니다.

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
  버튼과 이미지, 글자를 클릭 한 후 Ctrl + c를 하면 복사, Ctrl + v를 하면 붙여넣기, Ctrl + z를 누르면 이전 시점으로 돌아가게 됩니다.
  ```

- **_Deploy_**
  ```jsx
  사용자가 publish버튼을 누르면 고유한 url을 생성해주며 다른 사람들에게 자신의 웹사이트 주소를 공유할 수 있습니다.
  ```

### 🛠 Tech Stacks

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

### 🗓 Planning

**_프로젝트 기간_**

**2022년 5월 30일 ~ 6월 16일**

- 5월 30일 ~ 6월 2일 : 아이디어 기획, 목업 작성, 애자일 스프린트 플랜 작성
- 6월 3일 ~ 6월 16일 : 개발 진행, 배포, 테스트 작성

### 📝 Technical Log
