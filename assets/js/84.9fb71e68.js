(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{685:function(t,a,e){"use strict";e.r(a);var l=e(1),o=Object(l.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"grid-网格组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-网格组件","aria-hidden":"true"}},[t._v("#")]),t._v(" Grid 网格组件")]),t._v(" "),e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo1"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div class="grid-demo-wrapper">\n    <a-row>\n      <a-col :span="12">col-12</a-col>\n      <a-col :span="12">col-12</a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="8">col-8</a-col>\n      <a-col :span="8">col-8</a-col>\n      <a-col :span="8">col-8</a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n    </a-row>\n  </div>\n</template>\n<style>\n.grid-demo-wrapper .col {\n  color: #fff;\n}\n.grid-demo-wrapper h3 {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.grid-demo-wrapper .col:nth-child(2n) {\n  background: #00a0e9;\n}\n.grid-demo-wrapper .col:nth-child(2n + 1) {\n  background: rgba(0, 160, 233, 0.7);\n}\n</style>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"区块间隔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区块间隔","aria-hidden":"true"}},[t._v("#")]),t._v(" 区块间隔")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo2"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div class="grid-demo-wrapper">\n    <a-row :gutter="24">\n      <a-col :span="12">col-12</a-col>\n      <a-col :span="12">col-12</a-col>\n    </a-row>\n    <a-row :gutter="24">\n      <a-col :span="8">col-8</a-col>\n      <a-col :span="8">col-8</a-col>\n      <a-col :span="8">col-8</a-col>\n    </a-row>\n    <a-row :gutter="24">\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n      <a-col :span="6">col-6</a-col>\n    </a-row>\n  </div>\n</template>\n<style>\n.grid-demo-wrapper .col {\n  color: #fff;\n}\n.grid-demo-wrapper h3 {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.grid-demo-wrapper .gutter-box {\n  padding: 5px 0;\n}\n.grid-demo-wrapper .col:nth-child(2n) {\n  background: #00a0e9;\n}\n.grid-demo-wrapper .col:nth-child(2n + 1) {\n  background: rgba(0, 160, 233, 0.7);\n}\n</style>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"左右偏移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#左右偏移","aria-hidden":"true"}},[t._v("#")]),t._v(" 左右偏移")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo3"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div class="grid-demo-wrapper">\n    <a-row>\n      <a-col :span="8">col-8</a-col>\n      <a-col :span="8" :offset="8">col-8 col-offset-8</a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>\n      <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="12" :offset="6">col-12 col-offset-6</a-col>\n    </a-row>\n  </div>\n</template>\n<style>\n.grid-demo-wrapper .col {\n  color: #fff;\n}\n.grid-demo-wrapper h3 {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.grid-demo-wrapper .col:nth-child(2n) {\n  background: #00a0e9;\n}\n.grid-demo-wrapper .col:nth-child(2n + 1) {\n  background: rgba(0, 160, 233, 0.7);\n}\n</style>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"flex-水平对齐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-水平对齐","aria-hidden":"true"}},[t._v("#")]),t._v(" flex 水平对齐")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo4"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div class="grid-demo-wrapper">\n    <p>子元素左对齐</p>\n    <a-row type="flex" justify="flex-start">\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n    </a-row>\n    <p>子元素居中</p>\n    <a-row type="flex" justify="center">\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n    </a-row>\n    <p>子元素右对齐</p>\n    <a-row type="flex" justify="flex-end">\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n    </a-row>\n    <p>子元素两端对齐，子元素之间的间隔都相等</p>\n    <a-row type="flex" justify="space-between">\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n    </a-row>\n    <p>子元素两侧的间隔相等，子元素之间的间隔比子元素与边框的间隔大一倍</p>\n    <a-row type="flex" justify="space-around">\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n      <a-col :span="4">col-4</a-col>\n    </a-row>\n  </div>\n</template>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"flex-垂直对齐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-垂直对齐","aria-hidden":"true"}},[t._v("#")]),t._v(" flex 垂直对齐")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo5"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div class="grid-demo-wrapper-5">\n    <p>Align: flex-start</p>\n    <a-row type="flex" align="flex-start" justify="center">\n      <a-col :span="4">\n        <p class="height-100">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-80">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-120">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-50">col-4</p>\n      </a-col>\n    </a-row>\n    <p>Align: center</p>\n    <a-row type="flex" align="center" justify="space-around">\n      <a-col :span="4">\n        <p class="height-100">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-80">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-120">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-50">col-4</p>\n      </a-col>\n    </a-row>\n    <p>Align: flex-end</p>\n    <a-row type="flex" align="flex-end" justify="space-between">\n      <a-col :span="4">\n        <p class="height-100">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-80">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-120">col-4</p>\n      </a-col>\n      <a-col :span="4">\n        <p class="height-50">col-4</p>\n      </a-col>\n    </a-row>\n  </div>\n</template>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"flex-排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-排序","aria-hidden":"true"}},[t._v("#")]),t._v(" flex 排序")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("grid-demo6"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-row type="flex">\n      <a-col :span="6" :order="4">1 col-order-4</a-col>\n      <a-col :span="6" :order="3">2 col-order-3</a-col>\n      <a-col :span="6" :order="2">3 col-order-2</a-col>\n      <a-col :span="6" :order="1">4 col-order-1</a-col>\n    </a-row>\n  </div>\n</template>\n')])])])],1),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("与 flex 相关的属性："),e("code",[t._v("justify")]),t._v("、"),e("code",[t._v("align")]),t._v("、"),e("code",[t._v("order")]),t._v(" 分别对应原生 CSS 的 "),e("code",[t._v("flex")]),t._v(" 布局中的 "),e("code",[t._v("justify-content")]),t._v("、"),e("code",[t._v("align-items")]),t._v("、"),e("code",[t._v("order")]),t._v(" 属性，其属性值也保持一致。")]),t._v(" "),e("p",[t._v("不熟悉 "),e("code",[t._v("flex")]),t._v(" 的同学可以参考："),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 布局教程：语法篇 - 阮一峰"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"row"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#row","aria-hidden":"true"}},[t._v("#")]),t._v(" Row")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("gutter")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栅格间隔")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("布局模式，可选 "),e("code",[t._v("flex")]),t._v("，现代浏览器 下有效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("justify")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("flex")]),t._v(" 布局下的水平排列方式："),e("code",[t._v("flex-start")]),t._v(" "),e("code",[t._v("flex-end")]),t._v(" "),e("code",[t._v("center")]),t._v(" "),e("code",[t._v("space-between")]),t._v(" "),e("code",[t._v("space-around")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("flex-start")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("align")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("flex")]),t._v(" 布局下的垂直对齐方式："),e("code",[t._v("flex-start")]),t._v(" "),e("code",[t._v("flex-end")]),t._v(" "),e("code",[t._v("center")]),t._v(" "),e("code",[t._v("baseline")]),t._v(" "),e("code",[t._v("stretch")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("stretch")])])])])]),t._v(" "),e("h3",{attrs:{id:"col"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#col","aria-hidden":"true"}},[t._v("#")]),t._v(" Col")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("span")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栅格占位格数，为 0 时相当于 "),e("code",[t._v("display: none")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("offset")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栅格左侧的间隔格数，间隔内不可以有栅格")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("order")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栅格顺序，"),e("code",[t._v("flex")]),t._v(" 布局模式下有效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])])],1)},[],!1,null,null,null);a.default=o.exports}}]);