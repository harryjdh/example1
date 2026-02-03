const { createApp } = Vue;

createApp({
  data() {
    return {
      screens: [
        {
          id: "home",
          title: "다마코치",
          back: false,
          cta: "로그인",
          hero:
            "data:image/svg+xml,%3Csvg%20width%3D%22160%22%20height%3D%22200%22%20viewBox%3D%220%200%20160%20200%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20x%3D%2230%22%20y%3D%2230%22%20width%3D%22100%22%20height%3D%22140%22%20rx%3D%2250%22%20fill%3D%22%23FAD9C4%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2280%22%20r%3D%228%22%20fill%3D%22%236D4B3D%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2280%22%20r%3D%228%22%20fill%3D%22%236D4B3D%22/%3E%3Cpath%20d%3D%22M60%20100%20C70%20110%2090%20110%20100%20100%22%20stroke%3D%22%236D4B3D%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%3Ccircle%20cx%3D%2248%22%20cy%3D%22105%22%20r%3D%2210%22%20fill%3D%22%23F5B9A6%22/%3E%3Ccircle%20cx%3D%22112%22%20cy%3D%22105%22%20r%3D%2210%22%20fill%3D%22%23F5B9A6%22/%3E%3Cpath%20d%3D%22M40%20140%20C60%20165%20100%20165%20120%20140%22%20stroke%3D%22%23F0BFA5%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
          tag: "나만의 친구",
        },
        {
          id: "login",
          title: "로그인",
          back: true,
          cta: "로그인",
          hero:
            "data:image/svg+xml,%3Csvg%20width%3D%22140%22%20height%3D%22140%22%20viewBox%3D%220%200%20140%20140%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2270%22%20r%3D%2250%22%20fill%3D%22%23FFE2C6%22/%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2265%22%20r%3D%226%22%20fill%3D%22%236D4B3D%22/%3E%3Ccircle%20cx%3D%2285%22%20cy%3D%2265%22%20r%3D%226%22%20fill%3D%22%236D4B3D%22/%3E%3Cpath%20d%3D%22M55%2085%20C65%2095%2075%2095%2085%2085%22%20stroke%3D%22%236D4B3D%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%3Ccircle%20cx%3D%2245%22%20cy%3D%2285%22%20r%3D%227%22%20fill%3D%22%23F5B9A6%22/%3E%3Ccircle%20cx%3D%2295%22%20cy%3D%2285%22%20r%3D%227%22%20fill%3D%22%23F5B9A6%22/%3E%3C/svg%3E",
          tag: "다마코치",
          form: ["이메일", "비밀번호"],
        },
        {
          id: "analysis",
          title: "성향 분석",
          back: true,
          cta: "시작",
          hero:
            "data:image/svg+xml,%3Csvg%20width%3D%22140%22%20height%3D%22140%22%20viewBox%3D%220%200%20140%20140%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2270%22%20r%3D%2248%22%20fill%3D%22%23D4E6F8%22/%3E%3Cpath%20d%3D%22M50%2070%20C60%2060%2080%2060%2090%2070%22%20stroke%3D%22%232B3A55%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%3Ccircle%20cx%3D%2258%22%20cy%3D%2260%22%20r%3D%226%22%20fill%3D%22%232B3A55%22/%3E%3Ccircle%20cx%3D%2282%22%20cy%3D%2260%22%20r%3D%226%22%20fill%3D%22%232B3A55%22/%3E%3Cpath%20d%3D%22M50%2095%20C60%20105%2080%20105%2090%2095%22%20stroke%3D%22%232B3A55%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
          tag: "성향 분석 시작하기",
        },
        {
          id: "input",
          title: "성향 분석 입력",
          back: true,
          cta: "다음",
          chips: ["YouTube에서 내 취향을 알려요", "취향 테스트", "나만의 기록"],
        },
        {
          id: "profile",
          title: "성향 분석 입력",
          back: true,
          cta: "다음",
          form: ["이름", "나이", "취미", "음악 취향", "MBTI"],
        },
        {
          id: "survey",
          title: "성향 분석 입력",
          back: true,
          cta: "완료",
          tall: true,
          progress: [
            { label: "1. 취향 키워드", dots: Array(7).fill("dot") },
            { label: "2. 선호 장르", dots: Array(7).fill("dot") },
            { label: "3. 감성 지수", dots: Array(7).fill("dot") },
            { label: "4. 에너지 레벨", dots: Array(7).fill("dot") },
            { label: "5. 성장 목표", dots: Array(7).fill("dot") },
            { label: "6. 일상 루틴", dots: Array(7).fill("dot") },
            { label: "7. 몰입 환경", dots: Array(7).fill("dot") },
            { label: "8. 관계 성향", dots: Array(7).fill("dot") },
            { label: "9. 휴식 방식", dots: Array(7).fill("dot") },
            { label: "10. 가치관", dots: Array(7).fill("dot") },
          ],
        },
        {
          id: "result",
          title: "성향 분석 결과",
          back: true,
          cta: "저장",
          hero:
            "data:image/svg+xml,%3Csvg%20width%3D%22140%22%20height%3D%22140%22%20viewBox%3D%220%200%20140%20140%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2270%22%20r%3D%2248%22%20fill%3D%22%23FFEFE7%22/%3E%3Ccircle%20cx%3D%2256%22%20cy%3D%2265%22%20r%3D%226%22%20fill%3D%22%236D4B3D%22/%3E%3Ccircle%20cx%3D%2284%22%20cy%3D%2265%22%20r%3D%226%22%20fill%3D%22%236D4B3D%22/%3E%3Cpath%20d%3D%22M56%2085%20C66%2095%2074%2095%2084%2085%22%20stroke%3D%22%236D4B3D%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%2285%22%20r%3D%227%22%20fill%3D%22%23F5B9A6%22/%3E%3Ccircle%20cx%3D%2294%22%20cy%3D%2285%22%20r%3D%227%22%20fill%3D%22%23F5B9A6%22/%3E%3C/svg%3E",
          tag: "온화한 토끼형",
          list: ["성향 분석", "취향 분석", "육성 가이드", "나의 기록"],
        },
        {
          id: "quest",
          title: "퀘스트",
          back: true,
          cta: "참여",
          chips: ["신규", "일일", "주간"],
          list: [
            "미션을 완료하고 포인트 받기",
            "친구와 교류하며 레벨업",
            "나만의 기록 추가하기",
          ],
        },
        {
          id: "calendar",
          title: "퀘스트 히스토리",
          back: true,
          cta: "보기",
          form: ["캘린더", "상세 기록", "보상 내역"],
        },
      ],
    };
  },
}).mount("#app");
