/*can-simple-dom@0.2.16#simple-dom/document/node*/
define("can-simple-dom@0.2.16#simple-dom/document/node",["exports","module"],function(i,n){"use strict";function t(i,n,t,e){this.nodeType=i,this.nodeName=n,this.nodeValue=t,this.ownerDocument=e,this.childNodes=new l(this),this.parentNode=null,this.previousSibling=null,this.nextSibling=null,this.firstChild=null,this.lastChild=null}function e(i,n,t,e){if(i.firstChild){var l=i.firstChild,o=l,r=l;for(l.previousSibling=t,t?t.nextSibling=l:n.firstChild=l;r;)r.parentNode=n,o=r,r=r.nextSibling;o.nextSibling=e,e?e.previousSibling=o:n.lastChild=o,i.firstChild=null,i.lastChild=null}}function l(i){this.node=i}t.prototype._cloneNode=function(){return new t(this.nodeType,this.nodeName,this.nodeValue,this.ownerDocument)},t.prototype.cloneNode=function(i){var n=this._cloneNode();if(i)for(var t=this.firstChild,e=t;e;)e=t.nextSibling,n.appendChild(t.cloneNode(!0)),t=e;return n},t.prototype.appendChild=function(i){if(i.nodeType===t.DOCUMENT_FRAGMENT_NODE)return e(i,this,this.lastChild,null),i;i.parentNode&&i.parentNode.removeChild(i),i.parentNode=this;var n=this.lastChild;return null===n?(this.firstChild=i,this.lastChild=i):(i.previousSibling=n,n.nextSibling=i,this.lastChild=i),i},t.prototype.insertBefore=function(i,n){if(null==n)return this.appendChild(i);if(i.nodeType===t.DOCUMENT_FRAGMENT_NODE)return e(i,this,n?n.previousSibling:null,n),i;i.parentNode&&i.parentNode.removeChild(i),i.parentNode=this;var l=n.previousSibling;return l&&(l.nextSibling=i,i.previousSibling=l),n.previousSibling=i,i.nextSibling=n,this.firstChild===n&&(this.firstChild=i),i},t.prototype.removeChild=function(i){this.firstChild===i&&(this.firstChild=i.nextSibling),this.lastChild===i&&(this.lastChild=i.previousSibling),i.previousSibling&&(i.previousSibling.nextSibling=i.nextSibling),i.nextSibling&&(i.nextSibling.previousSibling=i.previousSibling),i.parentNode=null,i.nextSibling=null,i.previousSibling=null},t.prototype.addEventListener=function(){},t.prototype.removeEventListner=function(){},t.ELEMENT_NODE=1,t.ATTRIBUTE_NODE=2,t.TEXT_NODE=3,t.CDATA_SECTION_NODE=4,t.ENTITY_REFERENCE_NODE=5,t.ENTITY_NODE=6,t.PROCESSING_INSTRUCTION_NODE=7,t.COMMENT_NODE=8,t.DOCUMENT_NODE=9,t.DOCUMENT_TYPE_NODE=10,t.DOCUMENT_FRAGMENT_NODE=11,t.NOTATION_NODE=12,l.prototype.item=function(i){for(var n=this.node.firstChild,t=0;n&&i!==t;t++)n=n.nextSibling;return n},n.exports=t});
/*can-simple-dom@0.2.16#simple-dom/document/element*/
define("can-simple-dom@0.2.16#simple-dom/document/element",["exports","module","./node"],function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){t=t.toUpperCase(),this.nodeConstructor(1,t,null,e),this.style={},this.attributes=[],this.tagName=t}var i=n(r);o.prototype=Object.create(i["default"].prototype),o.prototype.constructor=o,o.prototype.nodeConstructor=i["default"],o.prototype._cloneNode=function(){var t=this.ownerDocument.createElement(this.tagName);return t.attributes=this.attributes.map(function(t){return{name:t.name,value:t.value,specified:t.specified}}),t},o.prototype.getAttribute=function(t){for(var e,r=this.attributes,n=t.toLowerCase(),o=0,i=r.length;i>o;o++)if(e=r[o],e.name===n)return e.value;return null},o.prototype.setAttribute=function(){return this._setAttribute.apply(this,arguments)},o.prototype._setAttribute=function(t,e){for(var r,n=this.attributes,o=t.toLowerCase(),i=0,s=n.length;s>i;i++)if(r=n[i],r.name===o)return void(r.value=e);n.push({name:o,value:e,specified:!0}),n[o]=e},o.prototype.removeAttribute=function(t){for(var e=this.attributes,r=0,n=e.length;n>r;r++){var o=e[r];if(o.name===t)return e.splice(r,1),void delete e[t]}},o.prototype.getElementsByTagName=function(t){t=t.toUpperCase();for(var e=[],r=this.firstChild;r;)r.nodeType===i["default"].ELEMENT_NODE&&((r.nodeName===t||"*"===t)&&e.push(r),e.push.apply(e,r.getElementsByTagName(t))),r=r.nextSibling;return e},o.prototype.contains=function(t){for(t=t.parentNode;t;){if(t===this)return!0;t=t.parentNode}return!1},o.prototype.getElementById=function(t){for(var e,r=this.firstChild;r;){if(r.attributes&&r.attributes.length)for(var n,o=0,i=r.attributes.length;i>o;o++)if(n=r.attributes[o],"id"===n.name&&n.value===t)return r;if(r.getElementById&&(e=r.getElementById(t)))return e;r=r.nextSibling}},Object.defineProperty&&Object.defineProperty(o.prototype,"className",{get:function(){return this._className},set:function(t){this._setAttribute("class",t),this._className=t}}),e.exports=o});
/*can-simple-dom@0.2.16#simple-dom/document/text*/
define("can-simple-dom@0.2.16#simple-dom/document/text",["exports","module","./node"],function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){this.nodeConstructor(3,"#text",t,e)}var u=n(o);r.prototype._cloneNode=function(){return this.ownerDocument.createTextNode(this.nodeValue)},r.prototype=Object.create(u["default"].prototype),r.prototype.constructor=r,r.prototype.nodeConstructor=u["default"],e.exports=r});
/*can-simple-dom@0.2.16#simple-dom/document/comment*/
define("can-simple-dom@0.2.16#simple-dom/document/comment",["exports","module","./node"],function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){this.nodeConstructor(8,"#comment",t,e)}var c=n(o);r.prototype._cloneNode=function(){return this.ownerDocument.createComment(this.nodeValue)},r.prototype=Object.create(c["default"].prototype),r.prototype.constructor=r,r.prototype.nodeConstructor=c["default"],e.exports=r});
/*can-simple-dom@0.2.16#simple-dom/document/document-fragment*/
define("can-simple-dom@0.2.16#simple-dom/document/document-fragment",["exports","module","./node"],function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t){this.nodeConstructor(11,"#document-fragment",null,t)}var u=n(o);r.prototype._cloneNode=function(){return this.ownerDocument.createDocumentFragment()},r.prototype=Object.create(u["default"].prototype),r.prototype.constructor=r,r.prototype.nodeConstructor=u["default"],e.exports=r});
/*micro-location@0.1.4#lib/micro-location*/
define("micro-location@0.1.4#lib/micro-location",["module","@loader"],function(e,a){a.get("@@global-helpers").prepareGlobal(e.id,[],"Location");var t=a.global.define,o=a.global.require,s='function Location(){this.init.apply(this,arguments)}Location.prototype={init:function(protocol,host,hostname,port,pathname,search,hash){if(this.protocol=protocol,this.host=host,this.hostname=hostname,this.port=port||"",this.pathname=pathname||"",this.search=search||"",this.hash=hash||"",protocol)with(this)this.href=protocol+"//"+host+pathname+search+hash;else if(host)with(this)this.href="//"+host+pathname+search+hash;else with(this)this.href=pathname+search+hash},params:function(t){if(!this._params){for(var a={},e=this.search.substring(1).split(/[;&]/),s=0,h=e.length;h>s;s++)if(e[s]){var o=e[s].split(/=/),r=decodeURIComponent(o[0].replace(/\\+/g,"%20")),i=decodeURIComponent(o[1].replace(/\\+/g,"%20"));a[r]||(a[r]=[]),a[r].push(i)}this._params=a}switch(typeof t){case"undefined":return this._params;case"object":return this.build(t)}return this._params[t]?this._params[t][0]:null},build:function(params){params||(params=this._params);var ret=new Location,_search=this.search;if(params){var search=[];for(var key in params)if(params.hasOwnProperty(key)){var val=params[key];switch(typeof val){case"object":for(var i=0,len=val.length;len>i;i++)search.push(encodeURIComponent(key)+"="+encodeURIComponent(val[i]));break;default:search.push(encodeURIComponent(key)+"="+encodeURIComponent(val))}}_search="?"+search.join("&")}with(this)ret.init.apply(ret,[protocol,host,hostname,port,pathname,_search,hash]);return ret}},Location.regexp=new RegExp("^(?:(https?:)//(([^:/]+)(:[^/]+)?))?([^#?]*)(\\\\?[^#]*)?(#.*)?$"),Location.parse=function(t){var a=String(t).match(this.regexp),e=new Location;return e.init.apply(e,a.slice(1)),e},this.Location=Location;';return a.global.define=void 0,a.global.module=void 0,a.global.exports=void 0,a.__exec({source:s,address:e.uri}),a.global.require=o,a.global.define=t,a.get("@@global-helpers").retrieveGlobal(e.id,"Location")});
/*can-simple-dom@0.2.16#simple-dom/extend*/
define("can-simple-dom@0.2.16#simple-dom/extend",["exports","module"],function(e,n){"use strict";n.exports=function(e,n){for(var o in n)e[o]=n[o];return e}});
/*can-simple-dom@0.2.16#simple-dom/document/anchor-element*/
define("can-simple-dom@0.2.16#simple-dom/document/anchor-element",["exports","module","./element","micro-location","../extend"],function(t,e,o,r,n){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}function p(t,e){this.elementConstructor(t,e),l["default"](this,a["default"].parse(""))}var s=u(o),a=u(r),l=u(n);p.prototype=Object.create(s["default"].prototype),p.prototype.constructor=p,p.prototype.elementConstructor=s["default"],p.prototype.setAttribute=function(t,e){s["default"].prototype.setAttribute.apply(this,arguments),"href"===t.toLowerCase()&&l["default"](this,a["default"].parse(e))},e.exports=p});
/*can-simple-dom@0.2.16#simple-dom/document*/
define("can-simple-dom@0.2.16#simple-dom/document",["exports","module","./document/node","./document/element","./document/text","./document/comment","./document/document-fragment","./document/anchor-element"],function(e,t,n,o,r,u,d,p){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}function i(){this.nodeConstructor(9,"#document",null,this),this.documentElement=new a["default"]("html",this),this.body=new a["default"]("body",this),this.documentElement.appendChild(this.body),this.appendChild(this.documentElement)}var m=c(n),a=c(o),s=c(r),l=c(u),f=c(d),h=c(p);i.prototype=Object.create(m["default"].prototype),i.prototype.constructor=i,i.prototype.nodeConstructor=m["default"];var y={a:h["default"]};i.prototype.createElement=function(e){var t=y[e.toLowerCase()];return t?new t(e,this):new a["default"](e,this)},i.prototype.createTextNode=function(e){return new s["default"](e,this)},i.prototype.createComment=function(e){return new l["default"](e,this)},i.prototype.createDocumentFragment=function(){return new f["default"](this)},i.prototype.getElementsByTagName=function(e){e=e.toUpperCase();for(var t=[],n=this.firstChild;n;)n.nodeType===m["default"].ELEMENT_NODE&&((n.nodeName===e||"*"===e)&&t.push(n),t.push.apply(t,n.getElementsByTagName(e))),n=n.nextSibling;return t},i.prototype.getElementById=function(e){return a["default"].prototype.getElementById.apply(this.documentElement,arguments)},Object.defineProperty&&Object.defineProperty(i.prototype,"currentScript",{get:function(){var e=this.getElementsByTagName("script"),t=e[e.length-1];return t||(t=this.createElement("script")),t}}),t.exports=i});
/*can-simple-dom@0.2.16#simple-dom/html-parser*/
define("can-simple-dom@0.2.16#simple-dom/html-parser",["exports","module"],function(t,e){"use strict";function a(t,e,a){this.tokenize=t,this.document=e,this.voidMap=a,this.parentStack=[]}a.prototype.isVoid=function(t){return this.voidMap[t.nodeName]===!0},a.prototype.pushElement=function(t){for(var e=this.document.createElement(t.tagName),a=0;a<t.attributes.length;a++){var n=t.attributes[a];e.setAttribute(n[0],n[1])}return this.isVoid(e)?this.appendChild(e):void this.parentStack.push(e)},a.prototype.popElement=function(t){var e=this.parentStack.pop();if(e.nodeName!==t.tagName.toUpperCase())throw new Error("unbalanced tag");this.appendChild(e)},a.prototype.appendText=function(t){var e=this.document.createTextNode(t.chars);this.appendChild(e)},a.prototype.appendComment=function(t){var e=this.document.createComment(t.chars);this.appendChild(e)},a.prototype.appendChild=function(t){var e=this.parentStack[this.parentStack.length-1];e.appendChild(t)},a.prototype.parse=function(t){var e=this.document.createDocumentFragment();this.parentStack.push(e);for(var a=this.tokenize(t),n=0,p=a.length;p>n;n++){var i=a[n];switch(i.type){case"StartTag":this.pushElement(i);break;case"EndTag":this.popElement(i);break;case"Chars":this.appendText(i);break;case"Comment":this.appendComment(i)}}return this.parentStack.pop()},e.exports=a});
/*can-simple-dom@0.2.16#simple-dom/html-serializer*/
define("can-simple-dom@0.2.16#simple-dom/html-serializer",["exports","module"],function(e,t){"use strict";function r(e){this.voidMap=e}r.prototype.openTag=function(e){return"<"+e.nodeName.toLowerCase()+this.attributes(e.attributes)+">"},r.prototype.closeTag=function(e){return"</"+e.nodeName.toLowerCase()+">"},r.prototype.isVoid=function(e){return this.voidMap[e.nodeName]===!0},r.prototype.attributes=function(e){for(var t="",r=0,o=e.length;o>r;r++)t+=this.attr(e[r]);return t},r.prototype.escapeAttrValue=function(e){return e.replace(/[&"]/g,function(e){switch(e){case"&":return"&amp;";case'"':return"&quot;"}})},r.prototype.attr=function(e){return e.specified?e.value?" "+e.name+'="'+this.escapeAttrValue(e.value)+'"':" "+e.name:""},r.prototype.escapeText=function(e){return e.replace(/[&<>]/g,function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;"}})},r.prototype.text=function(e){var t=e.parentNode;return!t||"STYLE"!==t.nodeName&&"SCRIPT"!==t.nodeName?this.escapeText(e.nodeValue):e.nodeValue},r.prototype.comment=function(e){return"<!--"+e.nodeValue+"-->"},r.prototype.serialize=function(e){var t,r="";switch(e.nodeType){case 1:r+=this.openTag(e);break;case 3:r+=this.text(e);break;case 8:r+=this.comment(e)}return t=e.firstChild,t&&(r+=this.serialize(t)),1!==e.nodeType||this.isVoid(e)||(r+=this.closeTag(e)),t=e.nextSibling,t&&(r+=this.serialize(t)),r},t.exports=r});
/*can-simple-dom@0.2.16#simple-dom/void-map*/
define("can-simple-dom@0.2.16#simple-dom/void-map",["exports","module"],function(e,A){"use strict";A.exports={AREA:!0,BASE:!0,BR:!0,COL:!0,COMMAND:!0,EMBED:!0,HR:!0,IMG:!0,INPUT:!0,KEYGEN:!0,LINK:!0,META:!0,PARAM:!0,SOURCE:!0,TRACK:!0,WBR:!0}});
/*can-simple-dom@0.2.16#simple-dom/dom*/
define("can-simple-dom@0.2.16#simple-dom/dom",["exports","./document/node","./document/element","./document","./html-parser","./html-serializer","./void-map"],function(e,t,d,l,u,o,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(t),m=n(d),i=n(l),f=n(u),s=n(o),c=n(a);e.Node=r["default"],e.Element=m["default"],e.Document=i["default"],e.HTMLParser=f["default"],e.HTMLSerializer=s["default"],e.voidMap=c["default"]});
/*can-simple-dom@0.2.16#simple-dom*/
define("can-simple-dom@0.2.16#simple-dom",["exports","./simple-dom/dom"],function(e,r){"use strict";function t(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function o(e,r){for(var t=Object.getOwnPropertyNames(r),o=0;o<t.length;o++){var n=t[o],i=Object.getOwnPropertyDescriptor(r,n);i&&i.configurable&&void 0===e[n]&&Object.defineProperty(e,n,i)}return e}Object.defineProperty(e,"__esModule",{value:!0}),"undefined"!=typeof window&&(window.SimpleDOM=r),o(e,t(r))});
/*can@2.3.0-beta.5#util/vdom/build_fragment/make_parser*/
define("can@2.3.0-beta.5#util/vdom/build_fragment/make_parser",["can/view/parser/parser","can-simple-dom/can-simple-dom"],function(t,n){return function(a){return new n.HTMLParser(function(n){var a,e,r=[];return t(n,{start:function(t,n){a={type:"StartTag",attributes:[],tagName:t}},end:function(t,n){r.push(a),a=void 0},close:function(t){r.push({type:"EndTag",tagName:t})},attrStart:function(t){e=[t,""],a.attributes.push(e)},attrEnd:function(t){},attrValue:function(t){e[1]+=t},chars:function(t){r.push({type:"Chars",chars:t})},comment:function(t){r.push({type:"Comment",chars:t})},special:function(t){},done:function(){}}),r},a,n.voidMap)}});
/*can@2.3.0-beta.5#util/vdom/vdom*/
define("can@2.3.0-beta.5#util/vdom/vdom",["can/util/can","can-simple-dom/can-simple-dom","./build_fragment/make_parser"],function(e,t,i){var n=new t.Document,r=new t.HTMLSerializer(t.voidMap),o=i(n);if(Object.defineProperty){var a=function(e){return{get:function(){return r.serialize(e?this:this.firstChild)},set:function(e){for(var t=this.firstChild;t;)this.removeChild(t),t=this.firstChild;if(""+e){var i=o.parse(""+e);this.appendChild(i)}}}};Object.defineProperty(t.Element.prototype,"innerHTML",a()),Object.defineProperty(t.Element.prototype,"outerHTML",a(!0))}var s=e.global;s.document=n,s.window=s,s.addEventListener=function(){},s.removeEventListener=function(){},s.location={href:"",protocol:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:""},s.history={pushState:e.k,replaceState:e.k}});