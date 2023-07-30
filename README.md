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
