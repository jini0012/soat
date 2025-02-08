"use client";

import { useState, useEffect } from "react";
import Button from "@/components/controls/Button";
import { TextInput } from "@/components/controls/Inputs";

export default function Designs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="p-4 flex flex-col space-y-4">
      <h1 className="font-bold text-xl">디자인 데모</h1>
      <p>
        이 페이지는 쏘앳에 쓰일 디자인 컴포넌트들의 예시를 보여주는
        페이지입니다.
      </p>
      <h2 className="font-bold text-lg">1. 버튼</h2>
      <h3 className="font-bold text-md">1.1. 일반 버튼</h3>
      <ul className="flex flex-row space-x-4">
        <li>
          <Button>일반 버튼</Button>
        </li>
        <li>
          <Button highlight>하이라이트 버튼</Button>
        </li>
        <li>
          <Button disabled>비활성화 버튼</Button>
        </li>
      </ul>
      <p>일반적으로 쓰일 버튼입니다.</p>
      <h3 className="font-bold text-md">1.2. 작은 크기의 버튼</h3>
      <ul className="flex flex-row space-x-4">
        <li>
          <Button size="small">작은 버튼</Button>
        </li>
        <li>
          <Button highlight size="small">
            하이라이트 작은 버튼
          </Button>
        </li>
        <li>
          <Button disabled size="small">
            비활성화 작은 버튼
          </Button>
        </li>
      </ul>
      <p>
        작은 크기의 버튼입니다. 인증 번호 발송과 같은 보조 기능을 위해 이 버튼이
        쓰일 수 있습니다.
      </p>
      <h3 className="font-bold text-md">1.3. 전체 너비 버튼</h3>
      <ul className="flex flex-col gap-y-2">
        <li>
          <Button size="full">전체 너비 버튼</Button>
        </li>
        <li>
          <Button highlight size="full">
            하이라이트 전체 너비 버튼
          </Button>
        </li>
        <li>
          <Button disabled size="full">
            비활성화 전체 너비 버튼
          </Button>
        </li>
      </ul>
      <p>
        전체 너비 버튼은 컨테이너의 너비에 따라 결정됩니다. 따라서, 다음과 같은
        레이아웃 또한 구성할 수 있습니다.
      </p>
      <ul className="flex w-full flex-row gap-x-2">
        <li className="flex-1">
          <Button size="full">아니오</Button>
        </li>
        <li className="flex-1">
          <Button size="full" highlight>
            예
          </Button>
        </li>
      </ul>
      <p>
        추가 예정: 버튼에 마우스를 hover와 active했을 때 색이 변하도록 만들
        예정입니다.
      </p>
      <h2 className="font-bold text-lg">2. 텍스트 Input</h2>
      <p>
        텍스트를 입력할 수 있는 input입니다. 텍스트 박스에 커서를 위치했을 때
        표시되는 아웃라인은 스타일링을 위해 브라우저 기본 아웃라인을
        비활성화하였고, 대신 Tailwind CSS의 <code>ring</code> 옵션을
        사용했습니다.
      </p>
      <h3 className="font-bold text-md">2.1. 텍스트 Input</h3>
      <TextInput
        label="수직 레이블의 텍스트 박스"
        value={name}
        onChange={setName}
      />
      <TextInput
        label="수평 레이블의 텍스트 박스"
        align="h"
        value={name}
        onChange={setName}
      />
      <TextInput
        placeholder="플레이스홀더가 있는 텍스트 박스"
        value={name}
        onChange={setName}
      />
      <p>
        텍스트 Input 내부에 보조 버튼을 추가할 수 있습니다. 보조 버튼을 추가하는
        경우 보조 버튼과 <code>input</code> 태그를 포함하는 컨테이너가
        추가되므로, 마크업이 달라집니다.
      </p>
      <TextInput
        label="이메일"
        value={email}
        onChange={setEmail}
        type="email"
        align="h"
      >
        <Button size="small" onClick={() => alert("버튼이 작동했습니다!")}>
          인증 번호 발송
        </Button>
      </TextInput>
      <TextInput
        label="이메일"
        value={email}
        onChange={setEmail}
        type="email"
        align="v"
      >
        <Button size="small" onClick={() => alert("버튼이 작동했습니다!")}>
          인증 번호 발송
        </Button>
      </TextInput>
      <TextInput
        value={email}
        onChange={setEmail}
        type="email"
        align="h"
        placeholder="이메일"
      >
        <Button size="small" onClick={() => alert("버튼이 작동했습니다!")}>
          인증 번호 발송
        </Button>
      </TextInput>
    </main>
  );
}
