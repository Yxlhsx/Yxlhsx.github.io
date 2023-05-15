export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){return {data:{"content-query-BtUpABbW8q":{_path:"\u002Farticles\u002F0006",_dir:"articles",_draft:V,_partial:V,_locale:p,_empty:V,title:"NuxtJs Seo 国际化",description:"NuxtJs配置搜索引擎优化与国际化",tags:["NuxtJs","I18n"],keywords:"nuxt seo i18n",createTime:"2022-06-18",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"nuxtjs-实现网站内容国际化以及-seo-国际化"},children:[{type:c,value:"NuxtJs 实现网站内容国际化以及 seo 国际化"}]},{type:a,tag:B,props:{id:ag},children:[{type:c,value:ah}]},{type:a,tag:k,props:{code:"yarn create nuxt-app 项目名称\r\n# 或者npm\r\nnpm init nuxt-app 项目名称\n",language:ai,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"yarn create nuxt-app 项目名称\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:aj}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"npm init nuxt-app 项目名称"}]}]}]}]}]},{type:a,tag:x,props:{},children:[{type:c,value:"NuxtJs 创建项目的选项"},{type:a,tag:"a",props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app\u002Fblob\u002Fmaster\u002FREADME.md",rel:["nofollow"]},children:[{type:c,value:"说明文档"}]},{type:c,value:"。\r\n创建完项目能运行即可。"}]},{type:a,tag:B,props:{id:I},children:[{type:c,value:I}]},{type:a,tag:x,props:{},children:[{type:c,value:"这里选用 NuxtJs 官方集成的 Vuei18n 插件。（网上各种自己集成的的真鸡儿麻烦）"}]},{type:a,tag:k,props:{code:"yarn add @nuxtjs\u002Fi18n\r\n# 或者npm\r\nnpm install @nuxtjs\u002Fi18n\n",language:ai,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"yarn add "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:ak}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"\u002Fi18n\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:aj}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"npm install "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:ak}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"\u002Fi18n"}]}]}]}]}]},{type:a,tag:x,props:{},children:[{type:c,value:"安装完之后修改"},{type:a,tag:al,props:{},children:[{type:c,value:am}]},{type:c,value:an}]},{type:a,tag:k,props:{code:"\u002F\u002F nuxt.config.js\r\nexport default {\r\n    \u002F\u002F ...其他Nuxt配置...\r\n    modules: ['@nuxtjs\u002Fi18n'],\r\n    i18n: {\r\n        \u002F\u002F 域名，这里填写生产环境的域名即可\r\n        baseUrl: 'https:\u002F\u002Fmy-nuxt-app.com',\r\n        \u002F\u002F 语种，酌情配置即可\r\n        locales: [\r\n            {\r\n                code: 'en',\r\n                iso: 'en-US'\r\n            },\r\n            {\r\n                code: 'zh',\r\n                iso: 'zh-CN'\r\n            }\r\n        ],\r\n        \u002F\u002F 默认语种\r\n        defaultLocale: 'en',\r\n        \u002F\u002F 浏览器语言检测\r\n        detectBrowserLanguage: {\r\n            \u002F\u002F 记录浏览器语言使用cookie保存，这里false则表明，每次进入页面都会重新获取浏览器语言\r\n            useCookie: false\r\n        },\r\n        \u002F\u002F 国际化内容配置\r\n        vueI18n: {\r\n            \u002F\u002F 回退的语种\r\n            fallbackLocale: 'en',\r\n            \u002F\u002F 国际化的内容\r\n            messages: {\r\n                en: {\r\n                    title: 'page title',\r\n                    welcome: 'Welcome'\r\n                },\r\n                zh: {\r\n                    title: '网页标题',\r\n                    welcome: '欢迎'\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n",language:C,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ao}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:E}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:ap}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"modules:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" ["}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'@nuxtjs\u002Fi18n'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"],\n"}]}]},{type:a,tag:b,props:{class:e,line:F},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"i18n:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:G},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 域名，这里填写生产环境的域名即可\n"}]}]},{type:a,tag:b,props:{class:e,line:J},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"baseUrl:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'https:\u002F\u002Fmy-nuxt-app.com'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:K},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 语种，酌情配置即可\n"}]}]},{type:a,tag:b,props:{class:e,line:L},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"locales:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" [\n"}]}]},{type:a,tag:b,props:{class:e,line:W},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aq}]}]},{type:a,tag:b,props:{class:e,line:X},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:ar}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:Y}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:as},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:at}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'en-US'\n"}]}]},{type:a,tag:b,props:{class:e,line:au},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"            },\n"}]}]},{type:a,tag:b,props:{class:e,line:14},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aq}]}]},{type:a,tag:b,props:{class:e,line:15},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:ar}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'zh'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:16},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:at}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'zh-CN'\n"}]}]},{type:a,tag:b,props:{class:e,line:17},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:av}]}]},{type:a,tag:b,props:{class:e,line:18},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        ],\n"}]}]},{type:a,tag:b,props:{class:e,line:19},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 默认语种\n"}]}]},{type:a,tag:b,props:{class:e,line:20},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"defaultLocale:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:Y}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:21},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 浏览器语言检测\n"}]}]},{type:a,tag:b,props:{class:e,line:22},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"detectBrowserLanguage:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:23},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 记录浏览器语言使用cookie保存，这里false则表明，每次进入页面都会重新获取浏览器语言\n"}]}]},{type:a,tag:b,props:{class:e,line:24},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"useCookie:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:"false\n"}]}]},{type:a,tag:b,props:{class:e,line:25},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        },\n"}]}]},{type:a,tag:b,props:{class:e,line:26},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 国际化内容配置\n"}]}]},{type:a,tag:b,props:{class:e,line:27},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"vueI18n:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:28},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 回退的语种\n"}]}]},{type:a,tag:b,props:{class:e,line:29},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"fallbackLocale:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:Y}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:30},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 国际化的内容\n"}]}]},{type:a,tag:b,props:{class:e,line:31},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:A}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"messages:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:32},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"en:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:33},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'page title'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:34},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'Welcome'\n"}]}]},{type:a,tag:b,props:{class:e,line:35},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                },\n"}]}]},{type:a,tag:b,props:{class:e,line:36},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:z}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"zh:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:37},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'网页标题'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:38},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'欢迎'\n"}]}]},{type:a,tag:b,props:{class:e,line:39},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                }\n"}]}]},{type:a,tag:b,props:{class:e,line:40},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:av}]}]},{type:a,tag:b,props:{class:e,line:41},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        }\n"}]}]},{type:a,tag:b,props:{class:e,line:42},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aw}]}]},{type:a,tag:b,props:{class:e,line:43},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:ax}]}]}]}]}]},{type:a,tag:B,props:{id:P},children:[{type:c,value:P}]},{type:a,tag:k,props:{code:"\u003C!-- 使用 $t(\"你的内容key\") 语法即可 --\u003E\r\n\u003Ctemplate\u003E\r\n    \u003Cdiv\u003E{{ $t(\"welcome\") }}\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftemplate\u003E\r\n\r\n\u003C!-- 根据浏览器语言不通，这里会显示 “欢迎” 或者 “Welcome” --\u003E\n",language:"html",meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u003C!-- 使用 $t(\"你的内容key\") 语法即可 --\u003E\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:w},children:[{type:c,value:ay}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:az}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:ay}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:aA}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:"\u003E"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"{{ $t(\"welcome\") }}"}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:aB}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:aA}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:w},children:[{type:c,value:aB}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:az}]},{type:a,tag:b,props:{class:w},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:F},children:[{type:a,tag:b,props:{},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:G},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u003C!-- 根据浏览器语言不通，这里会显示 “欢迎” 或者 “Welcome” --\u003E"}]}]}]}]}]},{type:a,tag:B,props:{id:aC},children:[{type:c,value:aD}]},{type:a,tag:x,props:{},children:[{type:c,value:"修改"},{type:a,tag:al,props:{},children:[{type:c,value:am}]},{type:c,value:an}]},{type:a,tag:k,props:{code:"\u002F\u002F nuxt.config.js\r\nexport default {\r\n    \u002F\u002F ...其他Nuxt配置...\r\n    head() {\r\n        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })\r\n        i18nHead.title = this.$t('title')\r\n        return i18nHead\r\n    }\r\n}\n",language:C,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ao}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:E}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:ap}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:_},children:[{type:c,value:"head"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"() {\n"}]}]},{type:a,tag:b,props:{class:e,line:F},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:"const"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:"ct-4931d8"},children:[{type:c,value:aE}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:aF}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:aG}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]},{type:a,tag:b,props:{class:_},children:[{type:c,value:"$nuxtI18nHead"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"({ "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"addSeoAttributes:"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:"true"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" })\n"}]}]},{type:a,tag:b,props:{class:e,line:G},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:aE}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"title"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:aF}]},{type:a,tag:b,props:{class:r},children:[{type:c,value:aG}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]},{type:a,tag:b,props:{class:_},children:[{type:c,value:"$t"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"("}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'title'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:")\n"}]}]},{type:a,tag:b,props:{class:e,line:J},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:"return"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"i18nHead\n"}]}]},{type:a,tag:b,props:{class:e,line:K},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aw}]}]},{type:a,tag:b,props:{class:e,line:L},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:ax}]}]}]}]}]},{type:a,tag:x,props:{},children:[{type:c,value:"根据浏览器语言不同，标题会发生相对于的变化，其他 seo 属性酌情配置即可。"}]},{type:a,tag:B,props:{id:R},children:[{type:c,value:R}]},{type:a,tag:x,props:{},children:[{type:c,value:"在根目录下创建 i18n 文件夹，且分别创建语种翻译 js 文件与 index.js 文件。"}]},{type:a,tag:aa,props:{},children:[{type:a,tag:H,props:{},children:[{type:c,value:"根目录"},{type:a,tag:aa,props:{},children:[{type:a,tag:H,props:{},children:[{type:c,value:S},{type:a,tag:aa,props:{},children:[{type:a,tag:H,props:{},children:[{type:c,value:ab}]},{type:a,tag:H,props:{},children:[{type:c,value:"zh.js"}]},{type:a,tag:H,props:{},children:[{type:c,value:"en.js"}]}]}]}]}]}]},{type:a,tag:ac,props:{id:aH},children:[{type:c,value:ab}]},{type:a,tag:k,props:{code:"import en from '.\u002Fen'\r\nimport zh from '.\u002Fzh'\r\n\r\nexport default { en, zh }\n",language:C,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:ad}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:aI}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:ae}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'.\u002Fen'\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:ad}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:aJ}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:ae}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"'.\u002Fzh'\n"}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:E}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" { "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:aI}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:", "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:aJ}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" }"}]}]}]}]}]},{type:a,tag:ac,props:{id:aK},children:[{type:c,value:aL}]},{type:a,tag:k,props:{code:"\u002F\u002F en.js\r\nexport default {\r\n  title: \"page title\",\r\n  welcome: \"Welcome\",\r\n};\r\n\r\n\u002F\u002F zh.js\r\nexport default {\r\n  title: \"网页标题\",\r\n  welcome: \"你好\",\r\n};\n",language:C,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F en.js\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:E}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\"page title\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\"Welcome\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:F},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"};\n"}]}]},{type:a,tag:b,props:{class:e,line:G},children:[{type:a,tag:b,props:{},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:J},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F zh.js\n"}]}]},{type:a,tag:b,props:{class:e,line:K},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:E}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:q}]}]},{type:a,tag:b,props:{class:e,line:L},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\"网页标题\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:W},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:T}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:O}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\"你好\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:X},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"};"}]}]}]}]}]},{type:a,tag:ac,props:{id:aM},children:[{type:c,value:aN}]},{type:a,tag:k,props:{code:"\u002F\u002F 引入外部语种翻译\r\nimport i18n from \".\u002Fi18n\"\r\n\r\ni18n: {\r\n    \u002F\u002F 省略中间部分\r\n    vueI18n: {\r\n      fallbackLocale: \"en\",\r\n      messages: {\r\n        ...i18n,\u002F\u002F 使用外部语种翻译\r\n      },\r\n    },\r\n  },\r\n\n",language:C,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:k,props:{__ignoreMap:p},children:[{type:a,tag:b,props:{class:e,line:u},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 引入外部语种翻译\n"}]}]},{type:a,tag:b,props:{class:e,line:l},children:[{type:a,tag:b,props:{class:j},children:[{type:c,value:ad}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:S}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:j},children:[{type:c,value:ae}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:g}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\".\u002Fi18n\"\n"}]}]},{type:a,tag:b,props:{class:e,line:o},children:[{type:a,tag:b,props:{},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:y},children:[{type:a,tag:b,props:{class:U},children:[{type:c,value:S}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:af}]}]},{type:a,tag:b,props:{class:e,line:F},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 省略中间部分\n"}]}]},{type:a,tag:b,props:{class:e,line:G},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:U},children:[{type:c,value:"vueI18n"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:af}]}]},{type:a,tag:b,props:{class:e,line:J},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aO}]},{type:a,tag:b,props:{class:U},children:[{type:c,value:"fallbackLocale"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:": "}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\"en\""}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:n}]}]},{type:a,tag:b,props:{class:e,line:K},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aO}]},{type:a,tag:b,props:{class:U},children:[{type:c,value:"messages"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:af}]}]},{type:a,tag:b,props:{class:e,line:L},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        ..."}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:S}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:","}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"\u002F\u002F 使用外部语种翻译\n"}]}]},{type:a,tag:b,props:{class:e,line:W},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"      },\n"}]}]},{type:a,tag:b,props:{class:e,line:X},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"    },\n"}]}]},{type:a,tag:b,props:{class:e,line:as},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  },\n"}]}]},{type:a,tag:b,props:{class:e,line:au},children:[]}]}]}]},{type:a,tag:"style",children:[{type:c,value:".ct-382afd{color:#C8C8C8}\n.ct-4931d8{color:#4FC1FF}\n.ct-ee763f{color:#DCDCAA}\n.ct-ed287d{color:#808080}\n.ct-8267d5{color:#569CD6}\n.ct-db95c7{color:#CE9178}\n.ct-f57e82{color:#C586C0}\n.ct-a7d0f6{color:#9CDCFE}\n.ct-2fafff{color:#6A9955}\n.ct-c5423b{color:#D4D4D4}"}]}],toc:{title:p,searchDepth:l,depth:l,links:[{id:ag,depth:l,text:ah},{id:I,depth:l,text:I},{id:P,depth:l,text:P},{id:aC,depth:l,text:aD},{id:R,depth:l,text:R,children:[{id:aH,depth:o,text:ab},{id:aK,depth:o,text:aL},{id:aM,depth:o,text:aN}]}]}},_type:"markdown",_id:"content:articles:0006.md",_source:"content",_file:"articles\u002F0006.md",_extension:"md"}},prerenderedAt:1684161108744}}("element","span","text","ct-c5423b","line","ct-a7d0f6"," ","ct-2fafff","ct-db95c7","ct-f57e82","code",2,"        ",",\n",3,""," {\n","ct-8267d5",null,"pre",1,"    ","ct-ed287d","p",4,"                ","            ","h2","javascript","export","default",5,6,"li","安装国际化插件",7,8,9,"                    ","title:","welcome:","内容国际化","\n","将翻译内容抽出配置","i18n","  ","ct-382afd",false,10,11,"'en'","\u003E\n","ct-ee763f",".","ul","index.js","h3","import","from",": {\n","创建-nuxtjs-项目","创建 NuxtJs 项目","powershell","# 或者npm\n","@nuxtjs","strong","nuxt.config.js","配置文件。","\u002F\u002F nuxt.config.js\n","\u002F\u002F ...其他Nuxt配置...\n","            {\n","code:",12,"iso:",13,"            }\n","    }\n","}","\u003C","template","div","\u003C\u002F","seo-国际化","seo 国际化","i18nHead"," = ","this","indexjs","en","zh","enjs-zhjs","en.js 、 zh.js","配置-nuxtconfigjs","配置 nuxt.config.js","      "))