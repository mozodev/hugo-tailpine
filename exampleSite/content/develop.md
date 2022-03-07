---
title: "development"
date: 2022-01-10T15:54:12+09:00
layout: dev
assets:
  remote:
    smoothscroll: https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.js
partials:
- "brand/contact-card"
- "brand/identity"

---

휴고 `asset` 디렉토리에 `components` 디렉토리를 만들고 프론트엔드 컴포넌트들을 쌓아본다.    
템플릿 파일은 `layouts`에 있지만 `assets/components`에 있어도 휴고 템플릿으로 출력할 수 있다.

```
# 백엔드 vs 프론트엔드
layouts => 백엔드 template, views 
assets/components => 프론트엔드 components
```

아래는 alpinejs compoents를  `assets/components/base`에 넣고 각각 코드와 실제 템플릿을 휴고에서 출력한 예시이다.

## [Alpinejs {components|patterns}](https://alpinejs.dev/components)

### [Modal](https://alpinejs.dev/pattern/modal)

{{< readfile file=components/base/modal.html highlight=html >}}
{{< component template=base/modal.html >}}

### [Dropdown](https://alpinejs.dev/pattern/dropdown)

{{< readfile file=components/base/dropdown.html highlight=html >}}
{{< component template=base/dropdown.html >}}

### [Accordion](https://alpinejs.dev/pattern/accordion)

{{< readfile file=components/base/accordion.html highlight=html >}}
{{< component template=base/accordion.html >}}

### [Carousel](https://alpinejs.dev/pattern/carousel)

{{< readfile file=components/base/carousel.html highlight=html >}}
{{< component template=base/carousel.html >}}

## Assets (kb)

{{< directoryindex path="public/assets" pathURL="/assets" >}}
