# 템플릿하우스 템플릿
# 기본 구성
## [index.html]
- 컴포넌트 리스트
- 템플릿 리스트
## [components]
- 컴포넌트 HTML
- 컴포넌트 리소스[resources]
## [templates]
- 템플릿별 폴더

# [templates] 구성
## [index.html]
- 페이지 리스트
## [components]
- 페이지 HTML
## [resources]
- 템플릿 리소스

# [templates > resources] 구성
## [css]
### `plugin.css`
- 외부 CDN URL
- @import 방식으로 추가
- URL에서 'http:', 'https:' 제거
```html
@import url('//cdnjs.cloudflare.com/ajax/libs/Swiper/10.0.3/swiper-bundle.css');
```
### `block.css`
- 블록 스타일
- 주석으로 블록 구분
- compact 방식으로 코드 정렬
- 모든 CSS 선언의 선택자는 '.template-N0'로 시작
```html
.template-N1 .header-container { ... }
```
## [js]
### `plugin.js`
- 외부 스크립트 코드 전체 통으로 붙여넣기
- 최대한 압축본(min)으로 붙여넣기
- 'sourceMappingURL' 관련 코드 삭제
```html
//# sourceMappingURL=swiper-bundle.js.map
```
### `template.js`
- 변수
- 공통 스크립트
- 컴포넌트 스크립트
- Vanilla Javascript 사용
### `block.js`
- 블록 스크립트
- 주석으로 블록 구분
- 블록 번호 순서대로 정렬(스크립트 없는 블록은 건너뜀)
- 블록 별로 즉시실행함수로 감쌀 것
```html
(function () { ... })();
```
- jquery 구문 사용시 jquery($) 선언할 것
```html
$(function () { ... });
```
## [images]
### `일반적인 이미지 파일(jpg, png)`
- jpg : 사진형 이미지
- png : 일러스트형 이미지
## [icons]
### `아이콘형 이미지 파일(svg)`
- XD에서 '에셋 내보내기' 시 파일크기 '최적화(축소)' 체크
- 1000px 이하의 jpg, png 이미지는 2배 사이즈로 추출
## [videos]
### `비디오 파일(mp4)`
- mp4 파일만 사용
# 퍼블리싱 규칙
- 기본적인 웹표준을 준수한 블록 단위 퍼블리싱
- HTML, CSS, JS : 블록 단위 주석 표시
- 블록의 최상위 요소 클래스 : .template-N0
- CSS 단위: rem (특별한 경우만 px 사용)
- template.css에 공통 변수 선언 후 사용 권장
- 헤더와 푸터는 헤더모음과 푸터모음 코드를 활용
- HTML 이미지 상대경로
```html
src="../resources/images/img_logo_white.png"
```
- CSS 이미지 상대경로
- ```html
url('../icons/ico_downarrow_white.svg')
```
