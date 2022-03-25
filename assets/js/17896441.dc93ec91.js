"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27918],{61554:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(93106),l=a(26679),r=a(12527),s=a(85160);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,o({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s.Z,o({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var c=a(90353),d=a(34353),m=a(38716),u=a(16454);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}const b={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=b[e.versionMetadata.banner];return n.createElement(t,p({},e))}function f({versionLabel:e,to:t,onClick:a}){return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:t,onClick:a},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h({className:e,versionMetadata:t}){const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:r}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,u.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:i}=(0,m.Jo)(r),d=null!=o?o:(p=i).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(e,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:i.label,to:d.path,onClick:()=>s(i.name)})))}function g({className:e}){const t=(0,u.E6)();return t.banner?n.createElement(h,{className:e,versionMetadata:t}):null}function E({className:e}){const t=(0,u.E6)();return t.badge?n.createElement("span",{className:(0,l.Z)(e,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function N({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function y({lastUpdatedBy:e}){return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function L({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(N,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(y,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(41453),_=a(59660),Z="lastUpdated_E28V";function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},O.apply(this,arguments)}function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,O({},e))))}function U({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:a,formattedLastUpdatedAt:r}){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(k.Z,{editUrl:e})),n.createElement("div",{className:(0,l.Z)("col",Z)},(t||a)&&n.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:a})))}function w(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:c}=a,d=c.length>0,m=!!(r||s||i);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:c}),m&&n.createElement(U,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var T=a(87091),A="tocCollapsible_WPTA",M="tocCollapsibleButton_uHNe",x="tocCollapsibleContent_U4LV",j="tocCollapsibleExpanded_j8gt",H=a(69641);function P({toc:e,className:t,minHeadingLevel:a,maxHeadingLevel:s}){const{collapsed:o,toggleCollapsed:i}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(A,!o&&j,t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:i},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:o},n.createElement(H.Z,{toc:e,minHeadingLevel:a,maxHeadingLevel:s})))}var B=a(65993),S="docItemContainer_Q9Xk",I="docItemCol_K3hq",V="tocMobile_ks27",D={breadcrumbsContainer:"breadcrumbsContainer_bsZM"},F=a(67490);function R({children:e,href:t}){const a="breadcrumbs__link";return t?n.createElement(d.Z,{className:a,href:t,itemProp:"item"},n.createElement("span",{itemProp:"name"},e)):n.createElement("span",{className:a,itemProp:"item name"},e)}function z({children:e,active:t,index:a}){return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},e,n.createElement("meta",{itemProp:"position",content:String(a+1)}))}function J(){const e=(0,F.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{className:(0,l.Z)("breadcrumbs__link",D.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function $(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,D.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(J,null),e.map(((t,a)=>n.createElement(z,{key:a,active:a===e.length-1,index:a},n.createElement(R,{href:a<e.length-1?t.href:void 0},t.label)))))):null}var q=a(33129);function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},G.apply(this,arguments)}function K(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:r}=t,{keywords:s}=l,{description:o,title:i}=a;var c;const d=null!==(c=r.image)&&void 0!==c?c:l.image;return n.createElement(u.d,G({},{title:i,description:o,keywords:s,image:d}))}function Q(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:s,hide_table_of_contents:o,toc_min_heading_level:c,toc_max_heading_level:d}=r,{title:m}=a,p=!s&&void 0===t.contentTitle,b=(0,u.iP)(),v=!o&&t.toc&&t.toc.length>0,f=v&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!o&&I)},n.createElement(g,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement($,null),n.createElement(E,null),v&&n.createElement(P,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,l.Z)(u.kM.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(B.Z,{as:"h1"},m)),n.createElement(q.Z,null,n.createElement(t,null))),n.createElement(w,G({},e))),n.createElement(i,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function W(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(u.FG,{className:t},n.createElement(K,G({},e)),n.createElement(Q,G({},e)))}},87091:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(93106),l=a(26679),r=a(69641),s="tableOfContents_DYgA";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function c(e){var{className:t}=e,a=i(e,["className"]);return n.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar",t)},n.createElement(r.Z,o({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},69641:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(93106),l=a(16454);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function o({toc:e,className:t,linkClassName:a,isChild:l}){return e.length?n.createElement("ul",{className:l?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function i(e){var{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:m}=e,u=s(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const p=(0,l.LU)(),b=null!=d?d:p.tableOfContents.minHeadingLevel,v=null!=m?m:p.tableOfContents.maxHeadingLevel,f=(0,l.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:v}),h=(0,n.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:v}}),[i,c,b,v]);return(0,l.Si)(h),n.createElement(o,r({toc:f,className:a,linkClassName:i},u))}}}]);