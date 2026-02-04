
import { ManualSection, FormField, ButtonConfig, TableConfig, UIPreview } from './types';

export const MANUAL_DATA: ManualSection[] = [
  {
    id: '1',
    title: '1. 프로그램 실행 및 로그인',
    level: 1,
    children: [
      {
        id: '1.1',
        title: '1.1 SMES 실행',
        level: 2,
        content: [
          { type: 'text', value: '(1) 프로그램 실행' },
          { type: 'image', value: '/Image/1.1.1.png', caption: '프로그램 실행 화면' },
          { type: 'list', value: [
            '최초 설치 시 "SMES Launcher.exe" 클릭하면 설치 및 업데이트가 자동 진행됩니다. 설치가 완료되면 로그인 창이 출력됩니다.',
            '설치가 완료되면 바탕화면에 "SMES.Launcher" 바로가기가 생성됩니다.',
            '프로그램을 실행할 때 마다 업데이트 내용이 있는지 확인하고 업데이트 사항이 있을 경우 업데이트가 자동으로 진행됩니다.'
          ]},
          { type: 'text', value: '(2) 사용자 신청' },
          { type: 'note', value: '사용자를 등록하기 위해서는 사용자신청을 진행하고 관리자가 사용승인이 처리한 후 프로그램 사용권한이 활성화 됩니다.' },
          { type: 'image', value: '/Image/1.1.2.png', caption: '로그인 화면 - 하단 "사용자 신청" 버튼(①) 클릭' },
          { type: 'list', value: [
            '로그인 창 우측 하단 "사용자신청"(①)을 클릭합니다.',
            '사용자신청 창에서 구분, 신청 ID, 비밀번호, 이름을 입력하고 확인을 클릭하면 사용자 신청이 완료됩니다.',
            '* 배경이 노란색으로 표현되는 부분은 필수입력 사항으로 해당 사항 미 입력 시 메시지를 출력하고 사용자 신청이 처리되지 않습니다.'
          ]},
          { type: 'text', value: '(3) 로그인' },
          { type: 'image', value: '/Image/1.1.3.png', caption: '로그인 화면' },
          { type: 'list', value: [
            '사용자 ID 및 비밀번호를 입력하고 로그인 버튼을 클릭하면 로그인을 시도합니다.',
            '로그인에 성공하면 로그인 창이 닫히고 SLM 메인 창으로 전환됩니다.',
            '로그인 창에서 "자동로그인"(②)을 체크하고 로그인 할 경우 다음 프로그램 실행 시 입력했던 사용자로 자동 로그인 됩니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '2',
    title: '2. 공사등록관리',
    level: 1,
    children: [
      {
        id: '2.1',
        title: '2.1 신규 현장 등록',
        level: 2,
        content: [
          { type: 'image', value: '/Image/2.1.1.png', caption: '공사등록관리 화면' },
          { type: 'list', value: [
            '"공사등록관리" 메뉴에서 조회(①)를 클릭하여 기존 등록된 내역을 조회합니다.',
            '"추가"(②) 버튼을 클릭하면 새로운 행이 추가됩니다.',
            '"공사코드", "공사명"은 필수입력 내용으로 해당 내용을 기입한 후 "저장"(③) 버튼을 클릭하면 공사현장이 등록됩니다.',
            '"수정"(④) 버튼을 클릭하면 "공사코드"를 제외한 나머지 내용을 수정할 수 있습니다.'
          ]}
        ]
      },
      {
        id: '2.2',
        title: '2.2 협력업체 설정',
        level: 2,
        content: [
          { type: 'text', value: '좌측하단 "협력업체관리"(⑤) 버튼을 클릭하면 해당 현장에 대해 접근가능 한 협력사를 설정할 수 있습니다.' },
          { type: 'image', value: '/Image/2.2.1.png', caption: '협력업체관리 화면' },
          { type: 'list', value: [
            '"협력업체관리" 창 아래 "추가" 버튼을 클릭하면 새로운 행이 추가됩니다.',
            '"협력업체" 등록된 업체 리스트를 선택하여 "저장" 버튼을 클릭하여 내용을 저장합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '3',
    title: '3. BOM 관리',
    level: 1,
    children: [
      {
        id: '3.1',
        title: '3.1 BOM 등록',
        level: 2,
        content: [
          { type: 'text', value: '(1) BOM 등록' },
          { type: 'image', value: '/Image/3.1.1.png', caption: 'BOM 관리 화면' },
          { type: 'list', value: [
            'BOM 관리 메뉴에서 등록된 "공사"를 선택하고 "조회"버튼을 클릭합니다.',
            '"추가" 버튼을 클릭하면 BOM 등록 창이 출력됩니다. (* 기존 BOM 이 등록된 내역이 있을 경우 부재 추가 등록으로 진행됩니다.)'
          ]},
          { type: 'image', value: '/Image/3.1.2.png', caption: 'BOM 등록 창' },
          { type: 'list', value: [
            '상단 Check List, BOM List 에서 각 "파일열기" 버튼을 클릭한 후 엑셀파일을 선택하면 엑셀 내용을 불러옵니다.',
            '등록에 성공하면 "BOM 등록" 창이 닫히고 자동으로 BOM 을 조회합니다.'
          ]},
          { type: 'image', value: '/Image/3.1.3.png', caption: 'BOM 조회 화면' },
          { type: 'text', value: '(2) 설계변경 - 추가' },
          { type: 'image', value: '/Image/3.1.4.png', caption: 'BOM 추가 화면' },
          { type: 'list', value: [
            '최초 BOM 등록 후 [추가] 버튼 클릭 시 등록되는 부재는 신규 추가되는 부재로 인식됩니다.',
            'BOM 업로드 시 [메세지 전송] 기능을 통해 일부 사용자에게 설계변경이 발생했다는 메시지 알림을 전송 할 수 있습니다.'
          ]},
          { type: 'text', value: '(3) 설계변경 – 부재 수정' },
          { type: 'image', value: '/Image/3.1.5.png', caption: 'BOM 수정 화면' },
          { type: 'list', value: [
            '[BOM 관리] 상단 [수정] 버튼을 클릭하면 일부 부재 정보를 수정할 수 있습니다.',
            '수정 후 저장을 클릭하면 [메세지 전송] 기능을 통해 일부 사용자에게 설계변경이 발생했다는 메시지 알림을 전송 할 수 있습니다.'
          ]}
        ]
      },
      {
        id: '3.2',
        title: '3.2 컷팅플랜',
        level: 2,
        content: [
          { type: 'text', value: '(1) 자재소요량 계산' },
          { type: 'image', value: '/Image/3.2.1.png', caption: '컷팅플랜 화면' },
          { type: 'image', value: '/Image/3.2.2.png', caption: '컷팅플랜 데이터 테이블' },
          { type: 'list', value: [
            '공사 선택 후 조회합니다.',
            '조회된 단품 리스트에서 CP 할 품목을 선택하고 "절단옵션"을 클릭하여 절단옵션을 설정합니다.',
            '"절단옵션" – "저장" 클릭하여 내용을 저장하고 "자재소요량 계산"을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/3.2.3.png', caption: '자재소요량 계산 결과' },
          { type: 'list', value: [
            '자재소요량 결과에서 만들어진 원자재를 선택한 후 메뉴 좌측하단 "구매요청서 생성" 또는 "구매발주서 생성"을 클릭하여 요청서 또는 발주서를 생성할 수 있습니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '4',
    title: '4. 자재발주관리',
    level: 1,
    children: [
      { 
        id: '4.1', 
        title: '4.1 구매요청서작성', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/4.1.1.png', caption: '구매요청서 작성 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '구매요청번호 검색 창에서 구매요청리스트 중 조회할 구매요청서 선택 후 "조회"버튼 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 수정' },
          { type: 'list', value: [
            '구매요청서 조회 후 수정버튼을 클릭하면 수정 가능한 내용 활성화됩니다.',
            '결재진행 상태가 "진행" 또는 "승인"일 경우 수정버튼 비활성화됩니다.'
          ]},
          { type: 'text', value: '(3) 추가' },
          { type: 'list', value: [
            '위 메시지가 뜨고 "Yes"를 클릭하면 새로운 구매요청번호가 생성되고 사용자가 내용을 입력할 수 있도록 기존 내용이 초기화됩니다.'
          ]},
          { type: 'image', value: '/Image/4.1.2.png', caption: '추가 화면' },
          { type: 'text', value: '(4) 저장' },
          { type: 'list', value: [
            '수정 또는 추가한 요청서의 내용을 저장합니다.'
          ]},
          { type: 'text', value: '(5) 컷팅정보보기' },
          { type: 'list', value: [
            '"컷팅플랜"에서 생성한 부재의 정보를 확인하여 컷팅플랜 정보를 보여줍니다.'
          ]},
          { type: 'image', value: '/Image/4.1.3.png', caption: '컷팅정보보기 화면' },
          { type: 'text', value: '(6) 첨부파일' },
          { type: 'list', value: [
            '참고할 이미지, 도면 등을 업로드할 수 있습니다.'
          ]},
          { type: 'text', value: '(7) 결재진행' },
          { type: 'list', value: [
            '전자결재관리 시스템을 이용하여 결재 진행하고 결재 최종승인이 될 경우 발주서로 작성 가능합니다.'
          ]}
        ]
      },
      { 
        id: '4.2', 
        title: '4.2 구매요청관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/4.2.1.png', caption: '구매요청관리 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '공사, 진행상태, 작성기간을 선택하고 조회를 클릭하면 조건에 맞는 구매요청 리스트가 출력됩니다.'
          ]},
          { type: 'text', value: '(2) 발주서 작성' },
          { type: 'list', value: [
            '승인상태가 "승인완료"일 경우 해당 요청서의 내용을 기반으로 발주서 작성합니다.'
          ]}
        ]
      },
      { 
        id: '4.3', 
        title: '4.3 구매발주서 작성', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/4.3.1.png', caption: '구매발주서 작성 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '발주번호 검색 창에서 발주리스트 중 조회할 발주서를 선택 후 "조회"버튼 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 수정' },
          { type: 'list', value: [
            '발주서 조회 후 수정버튼을 클릭하면 수정 가능한 내용 활성화됩니다.',
            '결재진행 상태가 "진행" 또는 "승인"일 경우 수정버튼 비활성화됩니다.'
          ]},
          { type: 'text', value: '(3) 추가' },
          { type: 'list', value: [
            '위 메시지가 뜨고 "Yes"를 클릭하면 새로운 발주번호가 생성되고 사용자가 내용을 입력할 수 있도록 기존 내용이 초기화됩니다.'
          ]},
          { type: 'image', value: '/Image/4.3.2.png', caption: '추가 화면' },
          { type: 'text', value: '(4) 저장' },
          { type: 'list', value: [
            '수정 또는 추가한 발주서의 내용을 저장합니다.'
          ]},
          { type: 'text', value: '(5) 컷팅정보보기' },
          { type: 'list', value: [
            '"컷팅플랜"에서 생성한 부재의 정보를 확인하여 컷팅플랜 정보를 보여줍니다.'
          ]},
          { type: 'image', value: '/Image/4.3.3.png', caption: '컷팅정보보기 화면' },
          { type: 'text', value: '(6) 첨부파일' },
          { type: 'list', value: [
            '참고할 이미지, 도면 등을 업로드할 수 있습니다.'
          ]},
          { type: 'text', value: '(7) 결재진행' },
          { type: 'list', value: [
            '전자결재관리 시스템을 이용하여 결재 진행하고 결재 최종승인이 될 경우 발주서로 작성 가능합니다.'
          ]},
          { type: 'text', value: '(8) 발주확정' },
          { type: 'list', value: [
            '결재진행(승인) 상태가 되고 최종 내용 확인 후 "발주확정"을 클릭하여 발주확정 상태로 변경합니다.',
            '발주확정상태가 된 발주서의 자재들은 "자재입고등록"에서 입고처리 가능합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '5',
    title: '5. 입고관리',
    level: 1,
    children: [
      { 
        id: '5.1', 
        title: '5.1 자재입고등록', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/5.1.1.png', caption: '자재입고등록 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '공사, 발주기간, 매입처, 착지 내용을 입력하고 "조회" 버튼을 클릭하면 조건에 맞는 발주리스트가 출력됩니다.'
          ]},
          { type: 'text', value: '(2) 선택항목 입고처리' },
          { type: 'list', value: [
            '발주서를 선택하고 "선택항목 입고처리"를 클릭하면 "자재입고등록"창이 출력됩니다.',
            '해당 창에서 활성화되는 항목(파란색)내용을 기입하고 "입고등록"하면 입고처리됩니다.'
          ]},
          { type: 'image', value: '/Image/5.1.2.png', caption: '선택항목 입고처리 화면' }
        ]
      }
    ]
  },
  {
    id: '6',
    title: '6. 현장구조물설정',
    level: 1,
    children: [
      { 
        id: '6.1', 
        title: '6.1 공통사항', 
        level: 2,
        content: [
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"공사"를 선택하고 "조회" 버튼을 클릭하여 내용을 조회합니다.'
          ]},
          { type: 'image', value: '/Image/6.1.1.png', caption: '공통사항 조회 화면' },
          { type: 'text', value: '(2) 기능 설명' },
          { type: 'image', value: '/Image/6.1.2.png', caption: '기능 설명 화면' },
          { type: 'list', value: [
            '① 행을 추가합니다.',
            '② 선택한 행을 삭제합니다.',
            '③ 정렬순서 변경'
          ]},
          { type: 'text', value: '(3) 기타' },
          { type: 'list', value: [
            '① BOM관리 BOM을 등록할 때 BOM내용을 확인해서 절주, 공구, 부재타입은 자동으로 추가합니다.'
          ]}
        ]
      },
      { 
        id: '6.2', 
        title: '6.2 공정설정', 
        level: 2,
        content: [
          { type: 'text', value: '(1) 주요기능' },
          { type: 'list', value: [
            '"공정설정"에서 실적을 등록할 공정을 추가, 삭제, 수정 할 수 있습니다.',
            '"공정명"은 사용자가 정의를 하고, 공정타입은 "생산", "검사", "출하", "설치" 4개 중 하나를 선택할 수 있습니다.',
            '공정타입에 따라서 실적 입력 시 "생산관리", "검사관리", "출하관리" , "설치관리"에서 실적관리가 됩니다.',
            '설정된 색상은 3D 모델 조회 시 선택된 출력 색상 옵션에 적용됩니다.'
          ]}
        ]
      },
      { 
        id: '6.3', 
        title: '6.3 공정흐름 설정', 
        level: 2,
        content: [
          { type: 'text', value: '(1) 주요기능' },
          { type: 'list', value: [
            '각 부재 별 또는 담당 업체 별로 공정, 진행 순서가 다를 수 있어 사용자가 공정흐름을 추가하고 해당 공정흐름의 공정 진행 순서를 설정 할 수 있습니다.'
          ]},
          { type: 'text', value: '(2) 추가 및 공정설정' },
          { type: 'list', value: [
            '"추가" 버튼을 클릭하고 명칭을 입력한 후 "저장" 버튼을 클릭하여 내용을 저장합니다.',
            '"수정" 버튼을 클릭하고 "설정"에서 설정할 공정흐름을 선택합니다.'
          ]},
          { type: 'image', value: '/Image/6.3.1.png', caption: '공정흐름 설정 화면' },
          { type: 'list', value: [
            '"공정흐름 설정" 창에서 "추가" 버튼을 클릭하여 행을 추가하고 추가된 행에서는 "공정 설정"에서 정의한 공정 리스트를 선택할 수 있습니다.',
            '공정의 진행 순서는 "우선순위" 순서에 따라 진행됩니다.',
            '정렬 순서 버튼(상, 하)를 이용하여 우선순위를 변경할 수 있습니다.',
            '"저장" 버튼을 클릭하여 내용을 저장합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '7',
    title: '7. 제품관리',
    level: 1,
    children: [
      { 
        id: '7.1', 
        title: '7.1 부재속성편집', 
        level: 2,
        content: [
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"부재속성편집" 메뉴를 선택하고 "공사"를 선택한 후 "조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 수정' },
          { type: 'image', value: '/Image/7.1.1.png', caption: '부재속성편집 수정 화면' },
          { type: 'list', value: [
            '"수정" 버튼을 클릭합니다.',
            '수정가능 한 내용은 바탕색상 변경되어 표현됩니다.',
            '"공정흐름"에서 각 부재 별 공정흐름을 입력해줍니다.',
            '"저장"버튼을 클릭하여 내용을 저장합니다.'
          ]}
        ]
      },
      { 
        id: '7.2', 
        title: '7.2 부재공정계획설정', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/7.2.1.png', caption: '부재공정계획설정 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '공사와 공정흐름을 선택하고 "조회"클릭 합니다.'
          ]},
          { type: 'text', value: '(2) 수정' },
          { type: 'list', value: [
            '공정 별 계획일을 입력할 수 있도록 활성화 됩니다.'
          ]},
          { type: 'text', value: '(3) 저장' },
          { type: 'list', value: [
            '입력한 내용을 저장합니다.'
          ]}
        ]
      },
      { 
        id: '7.3', 
        title: '7.3 QR코드 출력', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/7.3.1.png', caption: 'QR코드 출력 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '① "공사", "공정흐름"을 선택하고 "조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) QR출력' },
          { type: 'list', value: [
            '① 조회된 리스트에서 출력할 부재를 선택하고 "QR코드 출력"(②) 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/7.3.2.png', caption: 'QR코드 출력 화면' },
          { type: 'list', value: [
            '② 출력물을 확인하고 "인쇄" 버튼을 클릭하여 인쇄물을 출력합니다.',
            '* 출력 시 바코드 프린터로 설정하여 출력해야 합니다.'
          ]}
        ]
      },
      { 
        id: '7.4', 
        title: '7.4 도면관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/7.4.1.png', caption: '도면관리 화면' },
          { type: 'list', value: [
            '"폴더"트리에서 현장 별 조립도, 설치도, 단품도를 선택하면 업로드 된 도면리스트가 출력됩니다.',
            '상단 "추가"버튼을 클릭하면 현재 조회된 트리에 도면을 등록할 수 있습니다.',
            '조립도와 설치도는 도면파일 등록할 시 파일이름을 확인하여 현재 등록된 부재가 있는지 체크하여 자동으로 매칭하는 기능이 있습니다',
            '* 필요에 따라 사용자가 부재명 수정 가능.',
            '도면 리비전이 있는 경우 우측 마우스 클릭하여 도면비교 기능을 이용하여 수정사항을 체크할 수 있습니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '8',
    title: '8. 1차가공관리',
    level: 1,
    children: [
      { 
        id: '8.1', 
        title: '8.1 1차가공실적등록', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/8.1.1.png', caption: '1차가공실적등록 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '공사를 선택하고 조회를 클릭하면 등록된 가공실적 내역을 조회합니다.'
          ]},
          { type: 'text', value: '(2) 수정' },
          { type: 'list', value: [
            '1차 가공내역 정보를 수정할 수 있습니다.'
          ]},
          { type: 'text', value: '(3) 추가' },
          { type: 'list', value: [
            '새로운 행이 추가됩니다.'
          ]},
          { type: 'text', value: '(4) 저장' },
          { type: 'list', value: [
            '입력한 내용을 저장합니다.'
          ]},
          { type: 'text', value: '(5) 엑셀 양식 출력' },
          { type: 'list', value: [
            '"엑셀 업로드"하여 엑셀 등록하기 위한 양식을 다운로드 받습니다.'
          ]},
          { type: 'text', value: '(6) 엑셀 업로드' },
          { type: 'list', value: [
            '엑셀 데이터를 이용하여 1차 가공 내역을 등록합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '9',
    title: '9. 실적관리',
    level: 1,
    children: [
      { 
        id: '9.1', 
        title: '9.1 생산관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/9.1.1.png', caption: '생산관리 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"공사", "기간", "공정흐름", "공정"을 선택하고 "조회" 버튼 또는 "전체조회", "금일조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 실적등록' },
          { type: 'list', value: [
            '"공사"를 선택하고 조회한 후 "추가" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.1.2.png', caption: '실적등록 화면' },
          { type: 'list', value: [
            '"공정흐름"과 "진행공정"(①)을 선택합니다.',
            '"추가" 버튼을 클릭하면 "부재조회"(②)창이 출력됩니다. "부재조회"창에서는 선택된 진행공정에 등록 가능한 부재리스트가 출력됩니다.',
            '실적등록 할 부재를 선택하고 "선택항목 등록" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.1.3.png', caption: '부재 선택 화면' },
          { type: 'list', value: [
            '"등록일" 내용을 확인하여 수정하고 "저장" 버튼을 클릭하여 실적 등록합니다.'
          ]}
        ]
      },
      { 
        id: '9.2', 
        title: '9.2 검사관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/9.2.1.png', caption: '검사관리 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"공사", "기간" 선택하고 "조회" 버튼 또는 "전체조회", "금일조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 검사요청 등록' },
          { type: 'list', value: [
            '"공사"를 선택하고 조회를 클릭한 다음 "추가" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.2.2.png', caption: '검사요청 등록 화면' },
          { type: 'image', value: '/Image/9.2.3.png', caption: '검사요청서 작성 화면' },
          { type: 'list', value: [
            '"검사요청서 작성" 창에서 "공정흐름"과 "진행공정"을 선택하고 "추가"버튼을 클릭합니다. "부재조회"창에서는 선택된 진행공정에 등록 가능한 부재리스트가 출력됩니다.',
            '부재를 선택하고 "선택항목 등록" 버튼을 클릭합니다.',
            '"신청일", "요구일시", "담당자", "검사일시", "검사자"를 기입하고 "저장" 버튼을 클릭하여 검사요청서를 등록합니다.'
          ]},
          { type: 'text', value: '(3) 검사실적 처리' },
          { type: 'image', value: '/Image/9.2.4.png', caption: '검사실적 처리 화면' },
          { type: 'list', value: [
            '조회된 "검사리스트"에서 검사요청서를 선택합니다.',
            '아래 "부재리스트" 우측 상단 "수정"(①) 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.2.5.png', caption: '부재리스트 수정 화면' },
          { type: 'list', value: [
            '"검사결과"에서 "검사요청", "합격", "불합격" 상태를 선택합니다.',
            '* 검사요청 -> 기본 값, 합격 -> 다음 실적 진행가능, 불합격 ->요청서 리스트에서 삭제',
            '"저장"(②) 버튼을 클릭하여 내용을 저장합니다.'
          ]}
        ]
      },
      { 
        id: '9.3', 
        title: '9.3 출하관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/9.3.1.png', caption: '출하관리 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"공사", "기간" 선택하고 "조회" 버튼 또는 "전체조회", "금일조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 출하송장 등록' },
          { type: 'image', value: '/Image/9.3.2.png', caption: '출하송장 등록 화면' },
          { type: 'list', value: [
            '"공사"를 선택하고 조회를 클릭한 다음 "추가" 버튼을 클릭합니다.',
            '"추가"버튼을 클릭하여 출하가능 한 부재를 조회합니다.',
            '"부재조회" 창에서 출하할 부재를 선택하고 "선택항목 등록" 버튼을 클릭합니다.',
            '나머지 내용(②)을 기입하고 "저장" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(3) 출하실적 처리' },
          { type: 'image', value: '/Image/9.3.3.png', caption: '출하실적 처리 화면' },
          { type: 'list', value: [
            '조회된 "송장리스트"에서 출하송장을 선택합니다',
            '"부재리스트" 우측 상단 "수정"(①) 버튼을 클릭합니다.',
            '"전채 부재 출하"(②) 버튼 또는 "출하상태"에서 출하완료를 선택합니다',
            '"저장"(③) 버튼을 클릭하여 내용을 저장합니다.'
          ]}
        ]
      },
      { 
        id: '9.4', 
        title: '9.4 설치관리', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/9.4.1.png', caption: '설치관리 화면' },
          { type: 'text', value: '(1) 조회' },
          { type: 'list', value: [
            '"공사", "기간", "공정흐름", "공정"을 선택하고 "조회" 버튼 또는 "전체조회", "금일조회" 버튼을 클릭합니다.'
          ]},
          { type: 'text', value: '(2) 실적등록' },
          { type: 'list', value: [
            '"공사"를 선택하고 조회한 후 "추가" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.4.2.png', caption: '실적등록 화면' },
          { type: 'list', value: [
            '"공정흐름"과 "진행공정"(①)을 선택합니다.',
            '"추가" 버튼을 클릭하면 "부재조회"(②)창이 출력됩니다. "부재조회"창에서는 선택된 진행공정에 등록 가능한 부재리스트가 출력됩니다.',
            '실적등록 할 부재를 선택하고 "선택항목 등록" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/9.4.3.png', caption: '부재 선택 화면' },
          { type: 'list', value: [
            '"등록일" 내용을 확인하여 수정하고 "저장" 버튼을 클릭하여 실적 등록합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '10',
    title: '10. IFC 업로드',
    level: 1,
    children: [
      { 
        id: '10.1', 
        title: '10.1 프로그램 실행 및 로그인', 
        level: 2,
        content: [
          { type: 'list', value: [
            '프로그램 우측 하단 "Tekla Addon" 버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/10.1.1.png', caption: 'Tekla Addon 버튼' },
          { type: 'list', value: [
            'ID와 비밀번호를 입력하고 "로그인" 버튼을 클릭합니다.',
            '로그인에 성공하면 "공사선택"창으로 전환됩니다.'
          ]}
        ]
      },
      { 
        id: '10.2', 
        title: '10.2 모델등록', 
        level: 2,
        content: [
          { type: 'text', value: '(1) 공사선택' },
          { type: 'image', value: '/Image/10.2.1.png', caption: '공사선택 화면' },
          { type: 'list', value: [
            '"공사선택" 창에서 모델을 등록할 현장을 선택하고 더블 클릭하거나 "접속" 버튼을 클릭합니다.',
            '공사접속에 성공하면 등록된 모델을 조회하는 창으로 전환됩니다.'
          ]},
          { type: 'text', value: '(2) 테크라 모델 업로드' },
          { type: 'image', value: '/Image/10.2.2.png', caption: '테크라 모델 업로드 화면' },
          { type: 'list', value: [
            '테크라 프로그램을 실행하고 모델을 엽니다.',
            '테크라 3D Viewer에서 부재를 선택하고 "Tekla 모델 내보내기" 창에서 추가버튼을 클릭합니다.'
          ]},
          { type: 'image', value: '/Image/10.2.3.png', caption: 'Tekla 모델 내보내기 화면' },
          { type: 'list', value: [
            '모델 정보를 읽어들이는 데 성공하면 "Tekla 모델 추가하기" 창이 출력되고 불러들인 부재정보를 확인할 수 있습니다.',
            '"모델명"을 기입하고 "등록" 버튼을 클릭하면 선택한 모델을 서버에 업로드 합니다.'
          ]}
        ]
      }
    ]
  },
  {
    id: '11',
    title: '11. 시스템 관리',
    level: 1,
    children: [
      { 
        id: '11.1', 
        title: '11.1 사용자승인', 
        level: 2,
        content: [
          { type: 'image', value: '/Image/11.1.1.png', caption: '사용자승인 화면' },
          { type: 'list', value: [
            '(1) 승인대기, 승인, 미승인된 사용자 정보를 조회하고 사용자의 권한 등을 수정할 수 있습니다.',
            '(2) 사용자승인 처리할 때 사번, 부서, 사용권한을 입력해야 합니다.'
          ]}
        ]
      }
    ]
  }
];
