# 💟 React 프로젝트 폴더구조

## 1. Presentation Component - Container Component ↔ Custom hook ↔ Atomic를 비교해보자!

### ▶ Presentation Component - Container Component

**Container Component에서 데이터를 처리하고 Presentation Component에서 데이터를 출력하는 형태**

#### Presentation Component

- 오직 뷰 만을 담당하는 컴포넌트
- 데이터 처리 X
- DOM 마크업과 style 담당
- 데이터 및 데이터와 관련된 콜백은 상위 Component의 props를 통해서 받는다.
- UI 상태값 이외에 대체로 다른 상태값을 가지고 있지 않는다.

#### Container Component

- 데이터 처리
- 앱 상태나 로직 제어
- 렌더링 되어야 할 데이터를 Presentation Component로 전달
- 다른 Presentation Component나 Container Component 관리

### ▶ Custom hook

- 공통 로직을 hook으로 관리하는 것.
- <span style="text-decoration: underline">UI 재사용</span>도 가능하고, 데이터 처리도 재사용이 가능하다.
- 보통 src 안에 hooks 폴더를 따로 만들어 커스텀 훅만 정리한다.
- `use`라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성한다.

### ▶ Atomic

뷰를 Atoms -> Molecules -> Organisms -> Templates -> Pages 순으로 작은 것들을 만들고, 결합해 좀 더 큰 단위의 뷰를 만들어 나가는 디자인 시스템

#### Atoms

- 해당 설계의 최소 단위
- ex) form, input, button 같은 HTML 태그나 최소 기능을 가진 커스텀 태그 컴포넌트

#### Molecules

- Atom들을 최소의 역할 수행 단위로 합한 그룹
- ex) 입력을 받기 위한 form + label + input

#### Organisms

- 배치를 위한 layout 단위로 하나의 인터페이스 형성
- ex) header, navigation

#### Templates

- 실제 Organisms들의 레이아웃이나 데이터 흐름 연결
- ex) 객체 설계, 페이지 설계

#### Pages

- 정의된 Template에 데이터를 넣어 뷰 완성

장점

1. 재사용 가능한 설계 시스템
2. 디자인 쉽게 수정 가능

단점

1. 설계에 드는 시간비용 증가
2. 일관성이 떨어지는 결과 발생 위험성

---

## 2. 어떤 방식을 언제 택해야 좋은 것일까?

정말 내 생각 대로만 작성해보자면,

공통된 로직이 별로 없는 경우
-> Presentation Component - Container Component

공통된 로직이 많은 경우 (데이터 처리 및 UI 재사용)
-> Custom Hooks

UI 재사용이 매우 잦고, 데이터 처리가 단순한 경우 ( props drilling issue 발생 때문에 )
-> Atomic

공부한 설명만으로는 이렇게 생각이 든다.

그러나 우선 협업하는 사람들과의 의견 공유가 중요한 것 같다.
어떤 것을 우선순위에 두고 방향성을 잡을지, 또 우리가 맡은 프로젝트는 어떤 구조를 가지는 것이 가장 적합할지, 그리고 팀원들과의 의견 공유에 따라 여러 개의 디자인 패턴을 적절히 섞어 사용할 수도 있겠다!

---

## 3. 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

디자인 패턴이란 이전부터 소프트웨어 개발 과정에서 사용되고 발견한 설계 패턴들을 정의한 것이다.

데이터 처리와 뷰(UI) 두 가지를 관리해야 하는 만큼 제각각 유지보수가 용이해야 한다. 또, 분리됨과 동시에 연결되는 인터페이스도 복잡하지 않도록 구현해야 한다.

반복되는 데이터 처리 패턴과 UI 패턴을 최대한 효율적으로 재사용 가능하게 함으로써 유지보수는 물론 비용을 아낄 수 있는 것 같다.

또, 혼자 개발하는 것이 아니라 우리는 **협업**을 하고 있으니, 서로의 로직을 사용하는 일도 있을 수 있다. 그것이 보다 쉬울 수 있도록 객체지향 프로그래밍에서 디자인 패턴을 선택하는 것은 중요하겠다는 생각이 든다.
