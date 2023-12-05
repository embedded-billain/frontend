#### raspberrypi frontend

#### 2023.11.22
- google cloud vision (OCR) api 연동 및 기능 구현
- ChatGPT api 연동 및 기능 구현

#### 2023.11.23
- 라즈베리파이 버튼, 카메라 소스 파일 생성
- ocr, gpt 소스 파일(.py) + 라즈베리파이(버튼, 카메라) 연동 성공
- gpt 결과 Spring Boot(Backend)로 전송 (RESTful API)
  
#### 2023.11.27
- 팀별 현황 page 생성
- Card, Select box, Dataframe, Footer, Logo 생성
  
#### 2023.11.29
- api 데이터 차트와 연결 완료
- csv파일로 seoul 테이블 생성
- bill, seoul 테이블 조인 후 view_data 뷰 테이블 생성  

#### To-Do
- 라즈베리파이 실행 파일 ex) .exe 생성 -> shell script 작성
- 라즈베리파이에서 팀 번호 키보드로 입력받을까?
- api연동 후 차트 그리기
- 뷰테이블 api받아서 데이터프레임 시각화 해주기
- 메인화면 추가 요소 고민
- selectbox ui 고민
- navbar의 로고 클리시 callback 함수로 navigate("/") 되는지 확인 -> (2023.12.01 완료)
- 라즈베리파이에서 생성된 영수증은 DB의 team_id값 특정값으로 고정시키기
  
- 12/05(월) 목표
- aws배포
- 메인페이지 메인그래프 추가
- 팀별페이지 팀선택 ui개선, 데이터프레임 api수정

#### Problem
- ec2에서 git clone 후 npm run build시 index.html 생성 안됨 -> local에서 build 후 FTP 이용해서 build 파일 ec2로 전송함

#### Testing
- 구겨긴 영수증

view 테이블 데이터 건수  11253
bill 테이블 데이터 건수 26000
