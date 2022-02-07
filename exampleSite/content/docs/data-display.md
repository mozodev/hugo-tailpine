---
title: "Data Display"
date: 2022-02-07T00:27:42+09:00
---

# Column views

- https://developer.apple.com/design/human-interface-guidelines/macos/windows-and-views/column-views/
- https://www.archives.go.kr/next/search/viewDescClassCategory.do

{{< readfile file="components/data-display/column-view.html" highlight=html >}}

- https://tailwindui.com/

{{< rawhtml tailwind_ui >}}
<div id="dev-column-view" x-data="{ data: data, active: []}" class="grid overflow-hidden grid-cols-1 md:grid-cols-3 gap-2 not-prose">
	<div class="box">
    <template x-for="item in Object.keys(data)">
      <p @click="active=[item];" class="p-1 border-b-2" x-text="item"></p>
    </template>
  </div>
	<div class="box">
    <template x-if="!data[active[0]]">
      <span>none</span>
    </template>
    <template x-if="data[active[0]]">
      <template x-for="item in Object.keys(data[active[0]])">
        <p @click="active[1]=$event.target.outerText;" class="p-1 border-b-2" x-text="item"></p>
      </template>
    </template>
  </div>
	<div class="box">
    <template x-if="!active[1]">
      <span>none</span>
    </template>
    <template x-if="active[1] && data[active[0]][active[1]]">
      <template x-for="item in data[active[0]][active[1]]">
        <p class="p-1 border-b-2" x-text="item"></p>
      </template>
    </template>
  </div>
</div>
{{< /rawhtml >}}
