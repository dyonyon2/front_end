# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
<!-- # 개수에 따라 h1~h6로 제목 중요도 -->

# 문장(Paragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
<!-- p태그로 생각하면 됨 -->

# 줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세
<!-- <br/> 태그를 넣거나 띄어쓰기 연속 두개면 줄바꿈 처리 됨 -->

# 강조(Emphasis)
_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  

# 목록(List)
1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록

# 링크(Links)
[Google](https://google.com)  
[Google](https://naver.com "Naver로 이동!")  
<!-- [텍스트](URL) -->

# 이미지 
![이미지!](https://heropy.blog/css/images/logo.png)
<!-- 링크에 맨 앞쪽에 느낌표(!) 하나 붙이면 이미지 -->

[![이미지!](https://heropy.blog/css/images/logo.png)](https://heropy.blog)
<!-- 이미지 링크 -->

# 인용문(BolckQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.(네이버 국어 사전)
>> 중첩된 인용문
>>> 중중첩된 인용문

# 인라인(inline) 코드 강조
CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.
<!-- ` 백틱 사용 -->

# 블록(block) 코드 강조
```html
<a href="https://www.google.co.kr/">GOOGLE</a>
```
```css
.list > li {
    position: absolute;
    top:40px;
}
```
```javascript
function func() {
    var a = 'AAA';
    return a;
}
```
```bash
$ git commit -m 'Study Markdown'
```
```plaintext
<a href="https://www.google.co.kr/">GOOGLE</a>
```

# 표 (Table)
position 속성  
값 | 의미 | 기본값
--|:--:|--
static | 기준없음 | o
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X
<!-- 왼쪽 정렬      -- 
     중앙 정렬     :--: 
     오른쪽 정렬    --: 
-->
  
# 원시 HTML(Raw HTML)

동해물과 <u>백두산</u>이 마르고 닳도록<br/>
하느님이 <span style="text-decoration: underline;">보우하사</span> 우리나라 만세
<!-- a태그의 target과 img의 width와 같은 Markdown에 없는 속성들을 사용해야 할 때 사용 -->

# 수평선(Horizontal Rule)

---
***
___
<!-- -와 *와 _를 세번씩 사용 -->