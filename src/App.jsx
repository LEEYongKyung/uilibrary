import React, { useEffect, useMemo, useState } from "react"
import { Sidebar } from "./components/Sidebar.jsx"
import { Gallery } from "./components/Gallery.jsx"
import { registryButton } from "./data/registryButton.jsx"
import { registryCard } from "./data/registryCard.jsx"
import { registryInputForm } from "./data/registryInputForm.jsx"
import { registryLoader } from "./data/registryLoader.jsx"
import { registryTextEffect } from "./data/registryTextEffect.jsx"

export default function App() {
  const items = [registryButton, registryCard, registryInputForm, registryLoader, registryTextEffect]// 사이드바와 갤러리가 사용항 데모 목록
  // 현재 선택된 데모의 id를 상태로 관리 
  // location.hash?slice(1) 는 #을 제거해서 순수 id만 얻는 트릭
  // #가 없다면 위 사이드바 목록의 첫번째 아이디 가져옴. 
  const [activeId, setActiveId] = useState(() => (location.hash?.slice(1) || items[0]?.id))

  // 선택 상태와 주소창 해시를 동기화 하기 위한 훅
  // keep URL hash in sync with selection
  useEffect(() => {
    const onHash = () => setActiveId(location.hash?.slice(1) || items[0]?.id) // location은 window.location으로 전체 url을 다루는 api
    window.addEventListener("hashchange", onHash)// 브라우저에서 # 부분이 바뀔 때 hashchange 콜백을 연결 
    // addEventListener는 브라우저 내에 특정 이벤트가 발생했을 때 콜백해는 주는 함수 . hashchange는 브라우저가 정의한 내장 이벤트. #뒤가 바뀔때 마다 동작 
    return () => window.removeEventListener("hashchange", onHash) // 컴포넌트 언마운트 시 리스너 정리 (메모리 누수 방지)
  }, [items])

   // 현재 activeId에 해당하는 아이템 객체를 찾아 메모이제이션, 못찾으면 첫 아이템으로 폴백 
  const active = useMemo(() => items.find(i => i.id === activeId) || items[0], [items, activeId])
 // 사이드바에서  항목을 선택했을 때 호출할 핸들러. 
  const handleSelect = (id) => {
    if (!id) return// id가 없으면 무시 
    if (id !== activeId) { // 같은 걸 누르면 무시 
      location.hash = id // 주소창 해시를 바꿔서 브라우저 히스토리 / 뒤로가기와 연동되게 함. 
      setActiveId(id) //즉시 UI를 반응시키기 위해 상태도 바로 변경
    }
  }

  /**
   * UseEffect 랜더 결과가 실제 DOM에 반영된 후 실행되는 부수효과  . 데이터 패치, 이벤트 리스너 등록, 타이버 설정 증 
   * 랜더 과정 외부와 상호작용할 때 사용 
   * 
   * Usememo : 주어진 의존성 배열이 변경되지 않는 한 계산 결과를 그대로 재사용하는 값 메모제이션 , 포스잇 같은거 
   * 큰 숫자의 계산이나, 객체 , 배열, 생성으로 인한 불필요한 리랜더링 줄일 때 사용. 
   */

  return (
    <div className="app">
      <Sidebar items={items} activeId={active?.id} onSelect={handleSelect} />
      <main className="main">
        <header className="main__header">
          <h1 className="main__title">{active?.label}</h1>
          <p className="main__desc">Variants for <code>{active?.id}</code>. Replace the demo content with your own code in the files under <code>src/data</code>.</p>
        </header>

        <Gallery component={active} />
      </main>
    </div>
  )
}
