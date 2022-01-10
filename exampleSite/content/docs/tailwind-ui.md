---
title: "Tailwind UI"
date: 2022-01-04T15:38:17+09:00
---

from <https://tailwindui.com/>

Tailwindcss 커뮤니티는 다양한 화면 요소를 크게 마케팅, 앱, 전자상거래 3개 분류로 정리했다.
뭔가 목적별 테마같은 느낌이다. 웹사이트는 목적에 따라 여러 요소들을 뒤섞일 수 있으니 이렇게 가는거 인식하기 쉬운거 같다.
다만 분리가 잘 안되는 경우도 있을 듯 하지만 어떻게든 정리해야겠다.
아마도 실제 코드를 쌓기 시작해서 많아지면 아래 처럼 정리해도 괜찮을 듯?

```
- team-durumi/hugo-theme-marketing
- team-durumi/hugo-theme-app
- team-durumi/hugo-theme-commerce (shop)
- team-durumi/hugo-theme-record
- team-durumi/hugo-theme-exhibition (marketing이라고 생각할 수도...)
```

이런 식으로 주제별로 테마를 정리한 후에 프로젝트에서 
```
# module.yml
imports:
- path: github.com/team-durumi/hugo-theme-app
- path: github.com/team-durumi/hugo-theme-marketing
- path: github.com/team-durumi/hugo-theme-record
```
이런 식으로 사용하면 partial 디렉토리에 파일 경로가 동일한 경우는 덮어쓰여져서,
사실 아직 순서를 잘 모르겠는데 위에 있는 게 우선이었던 듯.
뒤로 덮어쓴다고 하면 해당 경로를 기준 마지막 테마의 템플릿을 사용하게 되어야...

hugo `virtual union file system`

그러면 partial 디렉토리 밑에 주제별 디렉토리를 추가하고 하위에 모든 템플릿 파일을 정리해야...

```
- partials/app/
- partials/marketing/
- partials/record/
```

<!-- https://gohugo.io/templates/files/#readfile-example-add-a-project-file-to-content -->
{{< readfile file=data/tailwind_ui.yml highlight=yml >}}

사실 `mount` 옵션을 사용하면 꼭 `layout/partials` 아래 있을 필요도 없...
