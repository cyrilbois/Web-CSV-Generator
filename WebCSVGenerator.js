csvGenerator = null;
resultFirst = null;
myCodeMirrorResult = null;
filename = null;
indexGlobal = [];
currentTagIndexGlobal = null;

/* @license
Papa Parse
v5.1.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,g=",",v="\r\n",s='"',a=s+s,r=!1,i=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s)}();var o=new RegExp(U(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(i||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=e.toString().replace(o,a),i="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(r,b.BAD_DELIMITERS)||-1<r.indexOf(g)||" "===r.charAt(0)||" "===r.charAt(r.length-1);return i?s+r+s:r}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(g.step)){var p=g.step;g.step=function(e){if(c=e,_())m();else{if(m(),0===c.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():p(c,t)}}}function v(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function m(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){q(g.transformHeader)&&(e=g.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!g.header&&!g.dynamicTyping&&!g.transform)return c;function e(e,t){var r,i=g.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];g.header&&(n=r>=l.length?"__parsed_extra":l[r]),g.transform&&(s=g.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return g.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);g.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return g.header&&0===l.length}function y(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){c.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)q(g.delimiter)&&(g.delimiter=g.delimiter(e),c.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(r&&v(p.data[m]))c++;else{var _=p.data[m].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(g.delimiter=s),bestDelimiter:s}}(e,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=b.DefaultDelimiter),c.meta.delimiter=g.delimiter}var s=w(g);return g.preview&&g.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),m(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(g.complete)&&g.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,M=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(M=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var z=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=z=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],z+=f.length,c!==l.length-1)z+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,z),m=a.indexOf(I,z),_=new RegExp(U(M)+U(O),"g"),g=a.indexOf(O,z);;)if(a[z]!==O)if(T&&0===f.length&&a.substr(z,s)===T){if(-1===m)return R();z=m+n,m=a.indexOf(I,z),p=a.indexOf(D,z)}else{if(-1!==p&&(p<m||-1===m)){if(!(p<g)){f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}var v=x(p,g,m);if(v&&void 0!==v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}}if(-1===m)break;if(f.push(a.substring(z,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=z,z++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:z}),w();if(g===i-1)return w(a.substring(z,g).replace(_,O));if(O!==M||a[g+1]!==M){if(O===M||0===g||a[g-1]!==M){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(z,g).replace(_,O)),a[z=g+1+y+e]!==O&&(g=a.indexOf(O,z)),p=a.indexOf(D,z),m=a.indexOf(I,z);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(z,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,z),g=a.indexOf(O,z),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:z}),g++}}else g++}return w();function b(e){h.push(e),d=z}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(z)),f.push(e),z=i,b(f),o&&S()),R()}function C(e){z=e,b(f),f=[],m=a.indexOf(I,z)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return z}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,b});

// https://github.com/dominictarr/random-name/blob/master/first-names.json
_firstname = ["Aaren","Abbie","Ada","Addia","Adele","Adelle","Adore","Adriana","Aeriela","Agathe","Agnese","Aigneis","Aili","Aimil","Alameda","Albertina","Alejandra","Alex","Alexine","Alia","Alie","Alisha","Alleen","Allis","Allyce","Almeta","Althea","Alyda","Alyssa","Amalie","Amara","Amelia","Amii","Ana","Anallese","Andeee","Andree","Anestassia","Angela","Angelique","Anica","Ann-Marie","Annabela","Annaliese","Annecorinne","Annice","Annora","Anthia","Antonietta","Arabel","Ardeen","Ardenia","Ardys","Ariela","Arlena","Arlina","Aryn","Ashlee","Asia","Atlanta","Aubrie","Audrie","Augustine","Aurelie","Aurore","Averyl","Ayn","Babita","Barbara","Barbi","Basia","Beatriz","Bee","Belinda","Belva","Benita","Berget","Bernardine","Bernie","Berta","Bertine","Beth","Betta","Bettine","Beverley","Bibby","Bill","Binny","Blake","Blinni","Blondelle","Bobbi","Bobinette","Brana","Brandise","Brena","Brianna","Brietta","Briney","Britni","Britte","Brooks","Brynna","Cacilie","Calla","Cam","Camile","Candi","Candy","Caressa","Carilyn","Caritta","Carlie","Carly","Carmela","Carmencita","Carol-Jean","Carolina","Carree","Caryl","Cassandra","Cassondra","Catharine","Cathie","Cathyleen","Catrina","Cecile","Celene","Celestyna","Celisse","Chandra","Charissa","Charlena","Charmaine","Chastity","Chere","Cherilyn","Cherrita","Chickie","Chloris","Christal","Christian","Christy","Chrystel","Cindelyn","Cissiee","Claresta","Clarice","Clary","Claudina","Clementine","Clo","Codie","Collen","Concettina","Constance","Consuela","Coral","Cordi","Corene","Corina","Corly","Correy","Corry","Courtnay","Cristabel","Cristine","Cyb","Cyndie","Dacia","Dagmar","Dale","Damaris","Dania","Danika","Danny","Daphne","Darci","Dari","Darlleen","Daryl","Daune","Dawn","Deane","Debee","Dede","Deedee","Deirdre","Delilah","Deloria","Demetris","Dennie","Desirae","Devina","Di","Dianemarie","Diena","Dione","Dode","Dolli","Dominga","Donetta","Donnie","Doralynne","Dorene","Dorice","Doro","Dorothy","Dorthy","Dotty","Drucie","Dulce","Dulcinea","Dyann","Eadie","Ebonee","Edee","Edith","Edyth","Ekaterina","Elbertina","Elena","Elfreda","Elie","Elise","Elka","Ellette","Elmira","Elora","Elsie","Elvira","Elyssa","Emelina","Emilia","Emma","Emmey","Emylee","Eolanda","Ericka","Ermengarde","Ernesta","Esmeralda","Estell","Ethel","Etta","Eugine","Evaleen","Eve","Evita","Ezmeralda","Fanchon","Fanny","Farrah","Fawne","Fayre","Felice","Feliza","Fernande","Fidelia","Fina","Flo","Florencia","Florie","Flory","Frances","Frank","Fred","Fredericka","Frieda","Gabi","Gabriellia","Gale","Gavrielle","Gaylene","Genevra","Genovera","Georgetta","Georgina","Gerianna","Gerrie","Gertrud","Gianina","Gilda","Gilligan","Ginnie","Gisela","Giustina","Glenda","Gloria","Glynnis","Goldie","Gratia","Gretal","Grier","Gui","Gusella","Gusty","Gwenneth","Gwyneth","Halette","Hallie","Hannis","Harmonia","Harrietta","Hayley","Heddie","Heida","Helena","Helsa","Henriette","Hermione","Hettie","Hildegaard","Hollie","Hope","Hyacinthe","Ida","Ileana","Ilse","Imojean","Inga","Ingrid","Ira","Isa","Iseabal","Ivett","Jacenta","Jackie","Jaclyn","Jacquetta","Jaime","Jan","Janeczka","Janenna","Janey","Janis","Jany","Jasmina","Jean","Jeanna","Jemie","Jenda","Jenilee","Jennica","Jere","Jerry","Jessamyn","Jessy","Jillayne","Jinny","Joane","Jobi","Joceline","Joeann","Joelly","Johna","Joleen","Jolyn","Jordan","Jorry","Josephine","Joy","Jsandye","Judy","Juliane","Julieta","June","Justinn","Kaia","Kaja","Kalina","Kamilah","Kara-Lynn","Karena","Karina","Karlee","Karly","Karolina","Kary","Kassey","Kate","Katharina","Kathi","Kathy","Katleen","Katuscha","Kayla","Keelia","Kellen","Kelly","Kenna","Kerrin","Ketti","Kial","Kimberley","Kimmy","Kirbee","Kirstin","Kittie","Konstance","Kore","Korrie","Kristan","Kristina","Krystle","Kylynn","Lacie","Lanae","Lanna","Larine","Latisha","Laure","Laurene","Lauryn","Layla","Leanna","Leeanne","Leia","Lelah","Lenna","Leona","Leontine","Lesly","Letizia","Lexine","Liana","Libbie","Lila","Lilith","Lily","Lindie","Linet","Linzy","Lisette","Lita","Livvyy","Lizzie","Lolita","Lonnie","Loree","Lorenza","Lorie","Lorne","Lory","Louella","Luci","Lucille","Lucy","Lulita","Lusa","Lynde","Lynea","Lynnea","Lyssa","Madalyn","Madeleine","Madelle","Mady","Magdalena","Mahalia","Maisey","Malina","Mallory","Mamie","Mara","Marcelline","Marcy","Margalo","Margarette","Margette","Marguerite","Mariann","Maridel","Mariele","Marika","Marinna","Marita","Marjie","Marleah","Marline","Marnia","Marsiella","Marti","Mary","Maryellen","Marylou","Mathilda","Maud","Maurene","Max","Maye","Meg","Meghann","Melanie","Melina","Melisent","Mellicent","Melodie","Merci","Meriel","Merle","Merrie","Merry","Michaelina","Micheline","Mignon","Mildrid","Millie","Minda","Minne","Miquela","Mireielle","Misha","Modestia","Molli","Monika","Morganica","Moyna","Mureil","Myriam","Myrtice","Nadine","Nananne","Nanete","Nannie","Nariko","Nataline","Natka","Neila","Nelle","Nerta","Nessie","Netty","Nickie","Nicoli","Nikki","Ninnetta","Nita","Noelle","Nollie","Nonnah","Norine","Nyssa","Odessa","Ofilia","Olivette","Olwen","Oona","Oralee","Orelia","Orsola","Ottilie","Pamella","Paola","Patricia","Paule","Paulita","Pearline","Penelopa","Peri","Perry","Petronia","Phedra","Philis","Phylis","Pierette","Pollyanna","Priscilla","Queenie","Quintina","Raf","Raina","Randa","Rani","Raquela","Rayna","Rebeca","Reeba","Regina","Renae","Renie","Rhea","Rhoda","Riannon","Ricky","Rivalee","Robbi","Roberta","Robinia","Rochette","Romona","Ronna","Rori","Rosabelle","Rosaline","Rosanne","Roseline","Rosene","Roslyn","Roxane","Roz","Rozele","Rubie","Ruthe","Sabina","Sadie","Sallie","Sam","Sandie","Sara-Ann","Sarette","Sashenka","Sean","Selia","Selma","Shaine","Shandie","Shannah","Sharai","Sharlene","Shauna","Shaylyn","Sheelagh","Shel","Shell","Sheree","Sherrie","Shirlee","Siana","Sibella","Sidoney","Silvana","Sindee","Sissy","Sonni","Sophia","Stacey","Starla","Steffane","Stephanie","Stevana","Sue","Susan","Susette","Suzette","Sybille","Tabbatha","Taffy","Talya","Tami","Tamqrah","Tani","Tarra","Tatiania","Teddie","Tera","Teriann","Tersina","Thalia","Theodora","Therine","Tierney","Tiffie","Tilly","Tina","Tobe","Tomasina","Tonia","Tori","Tracey","Tressa","Trixi","Trudie","Tybie","Ulrike","Ursulina","Valeda","Valera","Valli","Vanessa","Veda","Vere","Verla","Vevay","Viki","Vinita","Violet","Vita","Vivia","Viviene","Vonny","Wanda","Wendi","Wileen","Willetta","Wilma","Winifred","Winny","Wynne","Xylina","Yetty","Yolane","Yvonne","Zaria","Zia","Zondra","Zsa Zsa"];
_lastname = ["Aaberg","Abbot","Abernon","Abram","Ackerley","Adalbert","Adamsen","Ade","Ader","Adlare","Adore","Adrienne","Afton","Agle","Ahab","Aida","Ailyn","Ajay","Alabaster","Alarise","Albertine","Alcott","Aldric","Alejoa","Alexandr","Alfons","Alice","Alisia","Allare","Allina","Allys","Aloise","Alrich","Alva","Alwin","Amadas","Amand","Amasa","Ambrosia","Amethist","Ammann","An","Anastatius","Anderea","Andrel","Anestassia","Angelis","Anis","Annabella","Annice","Anselmi","Anton","Anyah","Aprile","Arathorn","Ardeha","Ardra","Argus","Ariella","Arley","Armanda","Arne","Arquit","Artie","Arvo","Ashely","Ashok","Astra","Atcliffe","Atonsah","Auberbach","Audly","August","Aurelio","Autrey","Avi","Ax","Azeria","Bach","Bahr","Bakerman","Ball","Bandeen","Baptlsta","Barbey","Bari","Barney","Barrus","Bartlett","Bashemeth","Bates","Baudin","Baylor","Bearnard","Bebe","Beebe","Behre","Belanger","Belldas","Bendick","Beniamino","Bennie","Berard","Bergman","Berl","Berne","Berriman","Bertold","Bethany","Bettine","Bevin","Bibi","Bigner","Billye","Birdella","Bivins","Blake","Blase","Blisse","Bluh","Bobbee","Boehike","Bohlin","Bollay","Bonilla","Bonucci","Bord","Borrell","Bouchard","Bow","Boycey","Brackely","Brady","Brandice","Braun","Breed","Brenn","Brian","Brieta","Briney","Brittani","Brodench","Bronk","Brotherson","Brunell","Bryna","Buckler","Buffum","Bultman","Burch","Burkle","Burnside","Bury","Buttaro","Byrne","Cadmar","Caitlin","Calhoun","Callista","Camden","Campball","Candy","Capello","Carbo","Carey","Carleen","Carlson","Carmena","Carolin","Carri","Carvey","Casimir","Cassius","Cath","Catie","Cavan","Cecile","Celestine","Center","Chabot","Chaing","Chandler","Chapland","Charity","Charmine","Chauncey","Chem","Cherianne","Chesna","Chick","Chinua","Chobot","Christal","Christine","Chrystel","Ciapas","Cimbura","Ciro","Clara","Clarissa","Claudine","Cleavland","Cleo","Clie","Cloris","Clywd","Codding","Cohdwell","Colbert","Colleen","Colp","Colyer","Concha","Connelly","Constancy","Cookie","Corabella","Cordi","Corilla","Cornelia","Corrine","Cosenza","Cottle","Couture","Craggie","Creamer","Cressida","Cristi","Croix","Crudden","Cullin","Curren","Cutlerr","Cynar","Cyrie","Daegal","Dahlia","Dalli","Damarra","Danby","Daniele","Dannye","Darbie","Darian","Darrell","Dash","Daveta","Dawkins","Dearborn","Decato","Deegan","Delacourt","Delila","Delp","Demitria","Denis","Deny","Dermott","Desai","Destinee","Devlen","Dex","Diann","Dichy","Dielu","Dimitris","Diogenes","Dituri","Docilla","Doig","Dom","Dominy","Donell","Donoghue","Dorcy","Dorine","Dorothy","Dosia","Douglass","Dowski","Dreda","Drisko","Drus","Dudley","Dulciana","Dunkin","Durante","Durware","Duwalt","Dyche","Eachern","Earlie","Eben","Eckblad","Edee","Edison","Edmund","Edvard","Egbert","Ehrman","Eiser","Elbertina","Eldrid","Elephus","Eliathas","Elisha","Ellerey","Ellord","Elo","Elsinore","Elvyn","Emanuel","Emerson","Emmaline","Emmy","Engdahl","Eno","Ephrem","Erb","Erich","Erlandson","Erminia","Erskine","Esmaria","Estella","Ethban","Etom","Eugenia","Euridice","Evangelia","Even","Evvie","Ezar","Fabiola","Fadiman","Fairweather","Fancie","Faria","Faro","Faso","Faust","Fax","Federica","Felecia","Felizio","Fennessy","Ferino","Ferrell","Fiann","Fiester","Fillbert","Fink","Firmin","Fitzsimmons","Fleeta","Flita","Florina","Flyn","Fontana","Forrer","Fosque","Francene","Francyne","Franza","Freddi","Fredi","Frendel","Friede","Frodi","Fry","Fulmer","Gaal","Gabrielli","Gahl","Gale","Gamaliel","Garbe","Garek","Garlinda","Garrison","Gaspard","Gaulin","Gavrila","Gaynor","Geffner","Gemini","Genna","Georas","Georgy","Gerge","Germann","Gert","Gherardo","Gibbeon","Giff","Gilbertson","Gillan","Gilmour","Gino","Girardo","Giule","Gladstone","Glenden","Glovsky","Goddard","Goerke","Goldina","Gombach","Goode","Gordon","Goth","Gower","Graig","Granoff","Grayce","Greenwald","Gregrory","Greyson","Grimbly","Grobe","Grosz","Gualtiero","Guildroy","Gunn","Gusella","Guthrie","Gwenore","Hachmin","Haerr","Hailee","Haldas","Halla","Halsey","Hamil","Han","Hanleigh","Hanshaw","Harday","Harl","Harned","Harriman","Hartnett","Hashim","Hathaway","Havens","Haymes","Hazlett","Hebner","Hedve","Heidt","Heisel","Helfand","Helve","Henebry","Henrie","Hepsibah","Hermes","Herrera","Hertzfeld","Hessler","Hewitt","Hieronymus","Hilbert","Hillel","Himelman","Hirsch","Hoban","Hoenack","Holbrook","Hollingsworth","Holtz","Honoria","Horan","Hortensia","Hourigan","Howlyn","Hubert","Huggins","Hull","Hunfredo","Hurley","Hutchison","Hylan","Iaverne","Idelia","Ietta","Iiette","Ilka","Imelida","Infield","Ingra","Ioab","Iphlgenia","Irmine","Isacco","Isidore","Israeli","Ivens","Izaak","Jacinda","Jacobah","Jacqui","Jagir","Jalbert","Jammal","Janene","Janith","Japeth","Jarib","Jary","Jaylene","Jeanne","Jefferey","Jehu","Jena","Jenness","Jerald","Jerold","Jess","Jethro","Jillane","Joachim","Jobi","Joeann","Johanna","Johnsson","Joli","Joni","Jorgan","Joseph","Jotham","Juan","Judye","Juliet","Junie","Justinn","Kaete","Kaja","Kalinda","Kamaria","Kannry","Kare","Karl","Karna","Karylin","Kat","Kathie","Katrine","Kauppi","Kazimir","Keelia","Keily","Kellby","Kelula","Kendrick","Kenney","Kenwood","Kermit","Kesley","Kevon","Khorma","Kiersten","Killigrew","Kimmie","Kinnard","Kirbee","Kirstin","Kiyoshi","Klemperer","Klotz","Knowling","Koehler","Kolnick","Konyn","Korey","Kosey","Koziara","Kravits","Kress","Kristi","Kronfeld","Krystle","Kunin","Kussell","Kylander","LaRue","Lacombe","Lail","Lalitta","Lamoree","Land","Lane","Lanita","Lareena","Larochelle","Lasley","Latini","Lattie","Lauraine","Laurianne","Laverne","Lay","Lea","Leary","Ledah","Leffen","Leifeste","Leler","Lemuela","Lenny","Leonard","Leopold","Lesley","Letsou","Levey","Lewes","Lia","Libna","Liebermann","Lilas","Lilybelle","Lindemann","Linehan","Linskey","Lipson","Lissi","Liva","Llovera","Loeb","Loleta","Longfellow","Lorain","Lorenz","Loring","Lory","Louanna","Love","Lowry","Lubin","Lucienne","Ludewig","Luhe","Lumbard","Lunsford","Lutero","Lymann","Lynn","Lytton","MacIntosh","Macey","Madaih","Madelene","Madox","Magdalen","Magnolia","Maiah","Maisey","Malanie","Malina","Mallon","Malvino","Mandler","Manolo","Maples","Marcellus","Marden","Margarete","Margret","Maribeth","Marijo","Marisa","Markman","Marlie","Maroney","Marsden","Martguerita","Martsen","Maryanne","Masao","Mata","Mathilde","Matthew","Mauer","Maurine","Maxi","Mayeda","McAdams","McClimans","McCutcheon","McGrody","McLaughlin","McNully","Means","Medrek","Mehalek","Melan","Meli","Melleta","Melony","Mendez","Merat","Merell","Merna","Merriott","Meter","Mich","Michella","Middleton","Mike","Milde","Millda","Milson","Minetta","Mintz","Miru","Mitzi","Modie","Moina","Monaco","Monk","Montgomery","Morehouse","Morgun","Morrill","Moseley","Mott","Mozelle","Mullane","Munn","Muriel","My","Myrilla","Naashom","Nadia","Nahum","Nance","Naor","Narton","Natalia","Natica","Nea","Nedrud","Neils","Nelsen","Nerita","Nester","Neva","Newell","Niccolo","Nickola","Nicoline","Nikaniki","Niles","Nisbet","Noam","Noelyn","Noman","Nore","Norrie","Norvol","Nunci","O'Neill","Obed","Ochs","Odell","Odysseus","Ogren","Old","Olin","Olnee","Olympium","Oneida","Ophelia","Orelee","Oriana","Orlene","Orpah","Ortrude","Oscar","Oster","Othilia","Ovid","O'Carroll","O'Rourke","Pacorro","Paine","Palocz","Pandolfi","Papageno","Parette","Parsaye","Pascia","Paton","Pattin","Pauly","Payson","Pearse","Peg","Pelagias","Penelopa","Peonir","Percy","Pernick","Persse","Peti","Pettiford","Phaidra","Phi","Philipp","Philoo","Phyllis","Pierette","Pillsbury","Pip","Pitt","Plato","Podvin","Poll","Pond","Poppy","Posner","Pozzy","Presber","Primalia","Prober","Prouty","Publia","Pulsifer","Pyle","Quent","Quinn","Raama","Rad","Radu","Raffo","Raimondo","Ralfston","Ramona","Randene","Ranjiv","Raseda","Raul","Raychel","Read","Rebecka","Redmond","Regan","Reidar","Reinke","Remmer","Reneta","Rese","Revkah","Rheingold","Rhu","Ricarda","Richers","Ricki","Ries","Rillings","Riordan","Riva","Roarke","Robertson","Roche","Rocray","Rodmann","Rogerio","Rolf","Romelda","Rona","Rooney","Rosalba","Roscoe","Rosemary","Rosette","Rossner","Roumell","Roxanna","Rozanna","Rubie","Rudolph","Rugen","Rurik","Rustice","Ruvolo","Sabella","Sacken","Sadowski","Saint","Salchunas","Sallyann","Salvidor","Sammons","Sancho","Sandye","Santoro","Saree","Sasnett","Saunderson","Sawtelle","Scammon","Schalles","Schenck","Schlosser","Schonfeld","Schroth","Schwejda","Screens","Seagraves","Secrest","Seessel","Sekofski","Seligman","Selway","Septima","Serilda","Seumas","Shaddock","Shama","Shanley","Sharl","Shaver","Sheedy","Shelba","Sheng","Sherfield","Sherrie","Shields","Shirberg","Sholley","Shuler","Si","Sibyls","Sidonius","Sigfrid","Sikorski","Silvan","Simmonds","Sinegold","Sisile","Skell","Skurnik","Slifka","Smitt","Socha","Solitta","Soneson","Sophronia","Sothena","Sparhawk","Sperling","Sprage","Stacy","Standing","Stanwood","Stav","Stefa","Stelle","Stephie","Stevy","Stilwell","Stoller","Stover","Strephon","Stuart","Suanne","Suk","Sundin","Susannah","Suzetta","Swanhildas","Swigart","Syd","Taam","Tacye","Taima","Talia","Tamar","Tamsky","Tannie","Tarrant","Tatianas","Tayib","Teddman","Telfer","Tengdin","Terencio","Terrence","Teryn","Thad","Thar","Thema","Therine","Thilda","Thomasina","Thornburg","Thunell","Tice","Tiffa","Tillford","Timon","Tippets","Tjon","Toffic","Tomasina","Toni","Toor","Torray","Tound","Trace","Travax","Tremayne","Trey","Trinetta","Tristram","Truc","Tryck","Tufts","Turne","Tybald","Tyson","Uird","Ulphia","Ummersen","Urania","Urias","Ursulette","Uund","Vacuva","Vale","Valerio","Valoniah","Vanni","Vary","Vastah","Velick","Ventre","Verger","Vernier","Vharat","Viddah","Vilma","Vins","Virgin","Vittoria","Vivle","Voletta","Vorster","Wadell","Waite","Waldron","Wallis","Wandie","Wareing","Warthman","Wattenberg","Weaks","Weide","Weinreb","Weitman","Wenda","Wenoa","Wesle","Westphal","Whiffen","Whittaker","Wiener","Wildermuth","Wilkinson","Willie","Wilona","Wind","Winnick","Winthorpe","Wittie","Wolfgram","Woodberry","Wooster","Wu","Wyn","Xerxes","Yam","Yate","Yerkovich","Yoko","Yorick","Yuille","Yusuk","Zachary","Zamora","Zaslow","Zeeba","Zenas","Zetta","Zina","Zitvaa","Zola","Zrike","Zuzana"];
// https://gist.github.com/keeguon/2310008
_country = ["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","AndorrA","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Cote D\"Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic Of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People\"S Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao People\"S Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","RWANDA","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];
_countryCode = ["AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"];
// https://github.com/mahemoff/geodata
_city = ["Adak","Apia","Pago Pago","Alofi","Avarua","Honolulu","Hilo","Anchorage","Papeete","Fairbanks","Sitka","Whitehorse","Juneau","Adamstown","Vancouver","Portland","San Francisco","Seattle","Sacramento","Los Angeles","Riverside","San Diego","Tijuana","Mexicali","Las Vegas","Yellowknife","Calgary","Edmonton","Phoenix","Salt Lake City","Tucson","Hanga Roa","Saskatoon","Albuquerque","El Paso","Chihuahua","Denver","Durango","Regina","Zapopan","Guadalajara","Monterrey","Mexico City","San Antonio","Puebla","Austin","Oklahoma City","Wichita","Winnipeg","Dallas","Veracruz","Houston","Kansas City","Minneapolis","Quetzaltenango","Guatemala City","New Orleans","Memphis","Mérida","San Salvador","Belmopan","Belize City","Milwaukee","Chicago","Tegucigalpa","Nashville","Managua","Indianapolis","Louisville","Cincinnati","Atlanta","San José","Detroit","Columbus","Tampa","Havana","Cleveland","Jacksonville","George Town","Charlotte","Miami","Pittsburgh","Guayaquil","Panama City","Toronto","Buffalo","Raleigh","Quito","Rochester","Nassau","Washington","Lima","Kingston","Baltimore","Cali","Virginia Beach","Ottawa","Medellín","Cartagena","Philadelphia","Barranquilla","Forked River","Jersey City","Bogotá","Montreal","Iquitos","Valdivia","Concepción","Cusco","Maracaibo","Valparaíso","Arequipa","Providence","La Serena","Cockburn Town","Boston","Punta Arenas","Santiago","Antofagasta","Iquique","Oranjestad","Santo Domingo","Rio Branco","Willemstad","Calama","Mendoza","Iqaluit","Ushuaia","La Paz","Puerto Williams","Caracas","Fredericton","San Juan","Saint John","Sucre","Charlotte Amalie","Hamilton","Road Town","Córdoba","Porto Velho","Charlottetown","The Valley","Basse-Terre","Bahía Blanca","St. John's","San Fernando","Roseau","Chaguanas","Kingstown","Castries","Rosario","Boa Vista","Manaus","Bridgetown","Buenos Aires","Stanley","Asunción","Saint-Pierre","Montevideo","Cuiabá","Paramaribo","Campo Grande","Chuí","Pelotas","Cayenne","Nuuk","Porto Alegre","Macapá","Assis","Curitiba","Belém","Brasília","Campinas","São Paulo","Vitória","Ilhéus","Fortaleza","Maceió","Recife","Ponta Delgada","Praia","Reykjavík","Dakar","Thiès","Serekunda","Brikama","Banjul","Nouakchott","Bissau","Conakry","Freetown","El Aaiún","Monrovia","Lisbon","Porto","Bamako","Casablanca","Koulikoro","Rabat","Tórshavn","Dublin","Seville","Belfast","Jamestown","Gibraltar","Yamoussoukro","Douglas","Málaga","Glasgow","Abidjan","Madrid","Cardiff","Edinburgh","Timbuktu","Liverpool","Bilbao","Manchester","Aberdeen","Birmingham","Leeds","Nantes","Ouagadougou","Tamale","Valencia","Accra","London","Greenwich","Lomé","Toulouse","Ibiza","Niamey","Barcelona","Paris","Cotonou","Porto-Novo","Palma","Algiers","Lagos","Ibadan","The Hague","Brussels","Antwerp","Rotterdam","Lyon","Amsterdam","Marseille","Bergen","Geneva","São Tomé","Düsseldorf","Cologne","Cannes","Nice","Monaco","Bern","Abuja","Enugu","Turin","Strasbourg","Kano","Zürich","Frankfurt","Malabo","Stuttgart","Milan","Libreville","Vaduz","Douala","Hanover","Hamburg","Tunis","Aarhus","Oslo","Innsbruck","Yaoundé","Munich","Gothenburg","Leipzig","Rome","Copenhagen","Malmö","Salzburg","Tripoli","Luanda","Berlin","Dresden","Naples","Linz","Prague","Sabha","Birkirkara","Ljubljana","Valletta","N'Djamena","Brazzaville","Kinshasa","Graz","Longyearbyen","Zagreb","Vienna","Bratislava","Stockholm","Sarajevo","Cape Town","Bangui","Budapest","Podgorica","Tirana","Kraków","Belgrade","Kaliningrad","Warsaw","Pristina","Skopje","Sofia","Athens","Tampere","Lviv","Riga","Espoo","Tallinn","Helsinki","Vilnius","Port Elizabeth","Livingstone","Gaborone","Bucharest","Bloemfontein","Tartu","Lubumbashi","Maseru","Francistown","Minsk","Johannesburg","Pretoria","Lusaka","Ndola","Bulawayo","Istanbul","Bursa","Bujumbura","Tiraspol","Alexandria","Kigali","Saint Petersburg","Odessa","Harare","Durban","Mbabane","Lobamba","Cairo","Manzini","Port Said","Konya","Omdurman","Khartoum","Suez","Maputo","Luxor","Ankara","Mwanza","Murmansk","Nicosia","Lilongwe","Simferopol","Gaza","Mersin","Tel Aviv","Blantyre","Jerusalem","Adana","Beirut","Dodoma","Amman","Damascus","Kharkiv","Nairobi","Gaziantep","Moscow","Addis Ababa","Asmara","Jeddah","Zanzibar City","Medina","Mecca","Sukhumi","Moroni","Baghdad","Hargeisa","Yerevan","Tbilisi","Mamoudzou","Mogadishu","Tabriz","Riyadh","Stepanakert","Antananarivo","Basra","Baku","Dammam","Samara","Manama","Tehran","Doha","Abu Dhabi","Dubai","Saint-Denis","Perm","Port Louis","Ashgabat","Muscat","Nukus","Mashhad","Yekaterinburg","Kandahar","Karachi","Hyderabad","Dushanbe","Kabul","Tashkent","Astana","Multan","Peshawar","Namangan","Ahmedabad","Mumbai","Surat","Faisalabad","Rawalpindi","Islamabad","Omsk","Pune","Lahore","Bishkek","Srinagar","Amritsar","Jaipur","Ludhiana","Almaty","New Delhi","Bangalore","Nagpur","Colombo","Chennai","Kanpur","Kandy","Lucknow","Batticaloa","Novosibirsk","Patna","Kathmandu","Ürümqi","Norilsk","Gangtok","Shigatse","Thimphu","Dhaka","Lhasa","Agartala","Guwahati","Chittagong","Shillong","Port Blair","Dibrugarh","Banda Aceh","Yangon","Medan","Chiang Mai","Surat Thani","Padang","Hat Yai","Bangkok","Pattaya","Ipoh","Pekanbaru","Bratsk","Kuala Lumpur","Xining","Nakhon Ratchasima","Kota Bharu","Vientiane","Kunming","Udon Thani","Johor Bahru","Lanzhou","Singapore","Siem Reap","Chengdu","Palembang","Phnom Penh","Hanoi","Chongqing","Hai Phong","Ho Chi Minh City","Jakarta","Bogor","Ulan Bator","Bandung","Da Nang","Nanning","Pontianak","Kuching","Semarang","Taiyuan","Malang","Surabaya","Guangzhou","Macau","Zhengzhou","Dongguan","Miri","Shenzhen","Hong Kong","Wuhan","Handan","Shijiazhuang","Bandar Seri Begawan","Denpasar","Mandurah","Perth","Kota Kinabalu","Beijing","Balikpapan","Jinan","Tianjin","Port Hedland","Nanjing","Makassar","Hangzhou","Kaohsiung","Qingdao","Taichung","Manila","Quezon City","Shanghai","Taipei","Dalian","Iloilo City","Zamboanga City","Shenyang","Tagbilaran","Cebu City","Changchun","Dili","Pyongyang","Davao City","Kaesong","Harbin","Incheon","Seoul","Wonsan","Okinawa","Ambon","Daegu","Busan","Yakutsk","Chongjin","Fukuoka","Darwin","Vladivostok","Hiroshima","Melekeok","Kobe","Osaka","Kyoto","Nagoya","Adelaide","Yokohama","Kawasaki","Jayapura","Sapporo","Geelong","Hagåtña","Dededo","Melbourne","Saipan","Cairns","Townsville","Port Moresby","Hobart","Canberra","Rockhampton","Magadan","Wollongong","Sydney","Newcastle","Weno","Brisbane","Gold Coast","Palikir","Honiara","Nouméa","Invercargill","Dunedin","Majuro","Christchurch","Wellington","Auckland","Suva","Funafuti","Labasa","Nukuʻalofa","Rabi Island","St. Louis","Santiago de Cuba","New York City","Port-au-Prince","San Carlos de Bariloche","Quebec City","City of Halifax","Santa Cruz de la Sierra","St. George's","Port of Spain","Fort-de-France","Ciudad del Este","São José dos Campos","Rio de Janeiro","Horta (Azores)","Angra do Heroísmo","Santa Cruz de Tenerife","Las Palmas de Gran Canaria","Cork (city)","Marrakech","Andorra la Vella","Luxembourg (city)","City of San Marino","Vatican City","Split (city)","Gdańsk","Thessaloniki","İzmir","Chişinău","Kiev","Dar es Salaam","Djibouti (city)","Tskhinvali","Sana'a","Nizhny Novgorod","Arbil","Kuwait City","Malé","Sri Jayawardenapura-Kotte","Kolkata","Naypyidaw","Phuket (city)","Alor Star","Malacca Town","Huế","Xi'an","Yogyakarta (city)","Makati City","Koror","Tokyo","Petropavlovsk-Kamchatsky","Yaren District","Port Vila","South Tarawa","Mata-Utu","Anadyr (town)","Nukulaelae"]

function choice(theArgs) {
	return theArgs[random(0, theArgs.length - 1)];
}		
function lorem(characters, minLength, maxLength) {
	let result = '';
	const nbChars = random(minLength, maxLength);
	for (let i = 1; i<= nbChars; i++) {
		result += characters[random(0, characters.length-1)];
	}
	return result;
}
function randomBool() {
	return (Math.random() > 0.5);
}
function firstname() {
	return _firstname[random(0, _firstname.length - 1)];
}
function lastname() {
	return _lastname[random(0, _lastname.length - 1)];
}
function city() {
	return _city[random(0, _city.length - 1)];
}
function country() {
	return _country[random(0, _country.length - 1)];
}
function countryCode() {
	return _countryCode[random(0, _countryCode.length - 1)];
}
function random(min = 0, max = Number.MAX_SAFE_INTEGER - 1) {
	return min + Math.floor(Math.random() * Math.floor(max + 1 - min));
}
function randomFloat(min = 0, max = Number.MAX_SAFE_INTEGER - 1, scale = 2) {
	return parseFloat((min + Math.random() * Math.floor(max + 1 - min)).toFixed(scale));
}
function index(start = 0) {
	if (currentTagIndexGlobal === null) {
		currentTagIndexGlobal = 'other';
	}
	if (indexGlobal[currentTagIndexGlobal] === undefined) {
		indexGlobal[currentTagIndexGlobal] = 0;
	}
	return indexGlobal[currentTagIndexGlobal] + parseInt(start);
}

function resetIndex() {
	indexGlobal = [];
	currentTagIndexGlobal = null;
}
function newIndex() {
	const currentIndex = String(new Date().getTime()) + Math.floor(Math.random() * 1000000);
	currentTagIndexGlobal = currentIndex;
	return currentIndex;
}
function incrementCurrentIndex() {
	indexGlobal[currentTagIndexGlobal] = indexGlobal[currentTagIndexGlobal] + 1;
}
function getCurrentIndex() {
	return currentTagIndexGlobal;
}
function setCurrentIndex(currentIndex) {
	currentTagIndexGlobal = currentIndex;
}
function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	  });
}
class CSVGenerator{
	constructor() {
		this.currentTemplate = null;
		this.csvTemplates = [];
		this.resultAll = [];
		this.columns = document.getElementById('columns');
		this.columnArray = [];
		this.parameters = ['from', 'to', 'scale', 'maxLength', 'choice', 'characters', 'minLength', 'custom'];
		this.typeColumnObject = {
				index : {
					display: 'Index',
					parameters : ['from']
				},
				guid  : {
					display: 'GUID ',
					parameters : []
				},
				integer : {
					display: 'Random (integer)',
					parameters : ['from', 'to']
				},
				float : {
					display: 'Random (Float)',
					parameters : ['from', 'to', 'scale']
				},
				firstname : {
					display: 'First name',
					parameters : []
				},
				lastname : {
					display: 'Last name',
					parameters : []
				},
				city : {
					display: 'City',
					parameters : []
				},
				country : {
					display: 'Country',
					parameters : []
				},
				countryCode : {
					display: 'Country code',
					parameters : []
				},
				choice  : {
					display: 'Choice',
					parameters : ['choice']
				},
				lorem  : {
					display: 'Lorem Ipsum',
					parameters : ['characters', 'minLength', 'maxLength']
				},
				custom  : {
					display: 'Custom',
					parameters : ['custom']
				}
		};
	}
	getColumnFromId(id) {
		let column = null;
		this.columnArray.some(function (c) {
			if (c.id === id) {
				column = c;
				return true;
			}
			return false;
		});
		return column;
	}
	getAllColumns() {
		const columns = [];
		Array.from(this.columns.children).forEach(function (column) {
			columns.push(csvGenerator.getColumnFromId(column.dataset.id));
		});
		return columns;
	}
	addColumn(data) {
		const column = new CSVColumn();
		this.columnArray.push(column);
		this.columns.appendChild(column.createDom(data));
	}
	generateOneFile() {
		const csvFileArray = [];
		const numberOfRow = document.getElementById('numberOfRow').value;
		const delimiter = document.getElementById('separatorRow').value;
		const quote = document.getElementById('quoteRow').value;
		const escape = document.getElementById('escapeRow').value;
		const endLine = (document.getElementById('endLine').value == '\n' ? "\n" : "\r\n");
		const header = document.getElementById('headerCSV').value;
		const allColumns = this.getAllColumns();
		if (header == 'yes') {
			const csvFileLine = [];
			csvFileArray.push(csvFileLine);
			allColumns.forEach(function (column) {
				csvFileLine.push(column.field.value);
			});
		}
		let hasFct = false;
		const dataByColumnsArray = [];
		allColumns.forEach(function (column) {
			const data = column.getData();
			dataByColumnsArray.push(data);			
			if (data.select == 'custom') {
				hasFct = true;
				const fctToEval = '{"call": ' + data.custom + '} ';
				const fctObj = eval ( '(' + fctToEval + ')' ) ;
				data.customFct = fctObj.call;
			}
		});
		for (let line = 1; line <= numberOfRow; line++) {
			const csvFileLine = [];
			csvFileArray.push(csvFileLine);
			let csvFileLineObj = {};
			allColumns.forEach(function (column, indexColumn) {
				let val = null;
				const data = dataByColumnsArray[indexColumn];
				switch(data.select) {
					case 'integer': val = random(data.from, data.to); break;
					case 'float': val = randomFloat(data.from, data.to, data.scale); break;
					case 'firstname': val = firstname(); break;
					case 'lastname': val = lastname(); break;
					case 'city': val = city(); break;
					case 'country': val = country(); break;
					case 'countryCode': val = countryCode(); break;
					case 'guid': val = guid(); break;
					case 'index': val = index(data.from); break;
					case 'choice': val = choice(data.choice); break;
					case 'lorem': val = lorem(data.characters, data.minLength, data.maxLength); break;
					case 'custom': val = null; break;
				}
				csvFileLine.push(val);
				csvFileLineObj[data.field] = val;
			});
			if (hasFct) {
				allColumns.forEach(function (column, index) {
					const data = dataByColumnsArray[index];
					if (data.select == 'custom') {
						const val = data.customFct(csvFileLineObj);
						csvFileLineObj[data.field] = val;
						csvFileLine.splice(index, 1, val);
					}
				});
			}
			incrementCurrentIndex();
		}
		return Papa.unparse(csvFileArray, {
			delimiter: delimiter,
			newline: endLine,
			quoteChar: quote,
			escapeChar: escape
		});
	}
	generate() {
		document.getElementById('editor-valid').innerText = 'Loading in progress, it may take a few seconds ...';
		document.getElementById('editor-valid').style.display = '';

		document.getElementById('editor-error').style.display = 'none';
		document.getElementById('editor-error').innerHTML = '';
				
		while(this.resultAll.length) this.resultAll.pop();
		indexGlobal = [];
		resetIndex();
		const resultContainer = document.getElementById('container-result');
		resultContainer.style.display = '';
		const resultFilesContainer = document.getElementById('container-result-files');
		resultFilesContainer.style.display = '';
		while (resultFilesContainer.firstChild) resultFilesContainer.removeChild(resultFilesContainer.firstChild);
		const resultEditorContainer = document.getElementById('container-result-first');
		resultEditorContainer.style.display = '';
		const numberOfFile = parseInt(document.getElementById('numberOfFile').value);
		if (numberOfFile > 1) {
			if (filename.value.indexOf('{{') === -1) {
				alert("Becareful, the file names must be unique in ZIP file, please add the tag {{index ()}} in filename.");
				return;
			}
		}
		//try {
			for (let iter = 1; iter <= numberOfFile; iter++) {
				this.resultAll.push(this.generateOneFile());
			}
			let currentIndex = newIndex();
			resultFilesContainer.appendChild(csvGenerator.addFileAll(csvGenerator.getFilename(true), this.resultAll));
			currentIndex = newIndex();
			this.resultAll.forEach(function (result, index) {
				if (index === 0) {
					myCodeMirrorResult.setValue(csvGenerator.resultAll[0]);
					resultFirst = csvGenerator.resultAll[0];
				}
				resultFilesContainer.appendChild(csvGenerator.addFile(csvGenerator.getFilename(false), result));
				setCurrentIndex(currentIndex);
				incrementCurrentIndex();
			});
			resetIndex();
			document.getElementById('editor-valid').innerText = 'CSV files have been generated!';
			document.getElementById('editor-valid').style.display = '';

			var urlGoto = location.href;
			location.href = "#container-result-first";
			history.replaceState(null,null,urlGoto);
		/*} catch(e) {
			document.getElementById('editor-error').style.display = '';
			if (e.message) {
				document.getElementById('editor-error').innerHTML = e.message;
			}
			document.getElementById('editor-valid').style.display = 'none';
		}*/
	}
	getFilename(all = false) {
		let filenameCurrent = filename.value;
		let m;
		const regex = /{{([a-zA-Z0-9 \(\)])*}}/g;
		const mAll = [];
		while ((m = regex.exec(filename.value)) !== null) {
			if (m.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			if (m.length) {
				mAll.push(m[0]);
			}
		}
		mAll.forEach(function (m) {
			filenameCurrent = filenameCurrent.replace (m, (all ? '' : eval( m )));
		});
		if (filenameCurrent == '') {
			filenameCurrent = 'file.csv';
		}
		if (all) {
			const ext = filenameCurrent.substr(filenameCurrent.lastIndexOf('.'));
			if (ext.length) filenameCurrent = filenameCurrent.replace(ext, '.zip');
			else filenameCurrent += '.zip';
		}
		return filenameCurrent;
	}
	addFileAll(filename, files) {
		var container = document.createElement('div');
		var p = document.createElement('p');
		p.id = 'file_' + String(new Date().getTime()) + Math.floor(Math.random() * 1000000);
		container.appendChild(p);
		var linkName = document.createElement('a');
		linkName.text = filename;
		linkName.classList.add('csv-generator-download-name-all');
		p.appendChild(linkName);
		var link = document.createElement('a');
		link.classList.add('csv-generator-download-link');
		link.text = 'Download';
		p.appendChild(link);

		const clear = document.createElement('div');
		clear.classList.add('csv-generator-download-clear');
		p.appendChild(clear);
		let writer = null;
		
		let blobAll = null;
		
		setTimeout (function() {
			indexGlobal = [];
			const indexFilename = newIndex();
			setCurrentIndex(indexFilename);
			function addFileToZip() {
				const fileData = files.shift();
				if (fileData !== undefined) {
					writer.add(csvGenerator.getFilename(false), new zip.TextReader(fileData), function() {
						setCurrentIndex(indexFilename);
						incrementCurrentIndex();
						addFileToZip();
					}, function(currentIndex, totalIndex) {
						// in progress
					});	
				} else {
					writer.close(function(blob) {
						blobAll = blob;
					});
				}
			}
			zip.createWriter(new zip.BlobWriter(), function(w) {
				writer = w;
				addFileToZip();
			}, function(error) {
				alert('An error has occured ('+JSON.stringify(error)+').');
			});
		}, 10);
		
		var downloadFct = function () {
			if (navigator.msSaveBlob) { // IE 10+
				navigator.msSaveBlob(blobAll, filename);
			} else {
				var link = document.createElement("a");
				if (link.download !== undefined) {
					var url = URL.createObjectURL(blobAll);
					link.setAttribute("href", url);
					link.setAttribute("download", filename);
					link.style.visibility = 'hidden';
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				}
			}
		};
		linkName.onclick = downloadFct;
		link.onclick = downloadFct;
		return container;
	}
	addFile(filename, data) {
		var container = document.createElement('div');
		var p = document.createElement('p');
		p.id = 'file_' + String(new Date().getTime()) + Math.floor(Math.random() * 1000000);
		container.appendChild(p);
		var linkName = document.createElement('a');
		linkName.text = filename;
		linkName.classList.add('csv-generator-download-name');
		p.appendChild(linkName);
		var link = document.createElement('a');
		link.classList.add('csv-generator-download-link');
		link.text = 'Download';
		p.appendChild(link);

		var linkCopy = document.createElement('a');
		linkCopy.classList.add('csv-generator-download-link');
		linkCopy.text = 'Copy to Clipboard';
		p.appendChild(linkCopy);
		
		var clear = document.createElement('div');
		clear.classList.add('csv-generator-download-clear');
		p.appendChild(clear);
		var downloadFct = function () {
			var blob = new Blob([data], { type: 'text/csv' });
			if (navigator.msSaveBlob) { // IE 10+
				navigator.msSaveBlob(blob, filename);
			} else {
				var link = document.createElement("a");
				if (link.download !== undefined) {
					var url = URL.createObjectURL(blob);
					link.setAttribute("href", url);
					link.setAttribute("download", filename);
					link.style.visibility = 'hidden';
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				}
			}
			
		};
		linkName.onclick = downloadFct;
		link.onclick = downloadFct;
		var copyFct = function () {
			var textarea = document.createElement('textarea');
			textarea.textContent = data;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
		};
		linkCopy.onclick = copyFct;
		return container;
	}
	closeIfOpen(id) {
		if (id == this.currentTemplate.id) {
			this.reinit();
			this.loadSample();
		}
	}
	load(template) {
		this.reinit();
		this.currentTemplate = template;
		document.getElementById('csv-template-name').value = template.name;
		template.columns.forEach(function (c) {
			csvGenerator.addColumn(c);
		});
		if (template.numberOfRow) document.getElementById('numberOfRow').value = template.numberOfRow;
		if (template.delimiter) document.getElementById('separatorRow').value = template.delimiter;
		if (template.quote) document.getElementById('quoteRow').value = template.quote;
		if (template.escape) document.getElementById('escapeRow').value = template.escape;
		if (template.endLine) document.getElementById('endLine').value = template.endLine;
		if (template.header) document.getElementById('headerCSV').value = template.header;
	}
	copyCSVTemplate() {
		const self = this;
		this.currentTemplate = {};
		this.currentTemplate.id = '_' + Math.random().toString(36).substr(2, 9);
		this.currentTemplate.name = 'Copy of ' + document.getElementById('csv-template-name').value;
		this.currentTemplate.columns = [];
		const allColumns = this.getAllColumns();
		allColumns.forEach(function (column) {
			self.currentTemplate.columns.push(column.getData());
		});
		this.csvTemplates.push(this.currentTemplate);
		this.saveAllCSVTemplate(function () {
			self.showBackup();
			self.load(self.currentTemplate);
			alert('Your CSV template has been copied and saved');
		});
	}
	saveCSVTemplate() {
		const self = this;
		this.currentTemplate.name = document.getElementById('csv-template-name').value;
		this.currentTemplate.columns = [];
		const allColumns = this.getAllColumns();
		allColumns.forEach(function (column) {
			self.currentTemplate.columns.push(column.getData());
		});
		this.currentTemplate.numberOfRow = document.getElementById('numberOfRow').value;
		this.currentTemplate.delimiter = document.getElementById('separatorRow').value;
		this.currentTemplate.quote = document.getElementById('quoteRow').value;
		this.currentTemplate.escape = document.getElementById('escapeRow').value;
		this.currentTemplate.endLine = document.getElementById('endLine').value;
		this.currentTemplate.header = document.getElementById('headerCSV').value;

		if (this.csvTemplates.indexOf(this.currentTemplate) !== -1) {
			//
		} else {
			this.csvTemplates.push(this.currentTemplate);
		}
		this.saveAllCSVTemplate(function () {
			self.showBackup();
			alert('Your CSV template has been saved');
		});
	}
	saveAllCSVTemplate(callback) {
		localStorage.setItem('templates', JSON.stringify(csvGenerator.csvTemplates));
		if (callback) {
			callback();
		}			
	}
	reinit() {
		this.currentTemplate = {id: '_' + Math.random().toString(36).substr(2, 9)};
		document.getElementById('csv-template-name').value = 'Your CSV template';
		while(this.columns.firstChild) this.columns.removeChild(this.columns.firstChild);
		this.columnArray.splice(0, this.columnArray.length);
	}
	loadSample() {
		this.reinit();
		this.addColumn({field: "id", select: "index", from: 100});
		this.addColumn({field: "firstname", select: "firstname"});
		this.addColumn({field: "lastname", select: "lastname"});
		this.addColumn({field: "email", select: "custom", custom: "function (line) {\n	return line.firstname + '.' + line.lastname + '@gmail.com'; \n} "});
		this.addColumn({field: "profession", select: "choice", choice: ["doctor", "police officer", "firefighter", "worker", "developer"]});		
	}
	init() {
		this.loadSample();
		const templates = localStorage.getItem('templates');
		if (templates) {
			csvGenerator.csvTemplates = JSON.parse(templates);
		} else {
			csvGenerator.csvTemplates = [];			
		}
		csvGenerator.showBackup();
	}				
	showBackup() {
		const templatesContainer = document.getElementById('list-templates');
		while (templatesContainer.firstChild) templatesContainer.removeChild(templatesContainer.firstChild);
		this.csvTemplates.forEach(function(template) {
			if (!template.id) {
				template.id = '_' + Math.random().toString(36).substr(2, 9);
			}
			var ahref = document.createElement('a');
			ahref.classList.add('csv-template-link');
			ahref.setAttribute('data-name', 'view-folder-'+template.name);
			ahref.text = template.name;

			var containertemplate = document.createElement('div');
			templatesContainer.appendChild(containertemplate);
			var request = null;
			ahref.setAttribute('data-name', 'view-request-' + template.name);
			ahref.onclick = function() {
				csvGenerator.load(template);
			};
			containertemplate.appendChild(ahref);

			var imgDelete = document.createElement('img');
			imgDelete.src = './image/error.png';
			imgDelete.onclick = function () {
				if (confirm('Do you want to delete this CSV template?')) {
					if (csvGenerator.csvTemplates.indexOf(template) !== -1) {
						 csvGenerator.csvTemplates.splice(csvGenerator.csvTemplates.indexOf(template), 1);
					}
					csvGenerator.closeIfOpen(template.id);
					csvGenerator.saveAllCSVTemplate(function () {
						csvGenerator.showBackup();
						alert('Your CSV template has been deleted');
					});
				}
			};
			imgDelete.classList.add('csv-column-button');
			containertemplate.appendChild(imgDelete);
		});
	}
}
class CSVColumn {
	constructor() {
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.container = null;
		this.select = null;
		this.fromLabel = null;
		this.from = null;
		this.toLabel = null;
		this.to = null;
		this.maxLengthLabel = null;
		this.maxLength = null;
		this.scaleLabel = null;
		this.scale = null;
		this.charactersLabel = null;
		this.characters = null;
		this.minLengthLabel = null;
		this.minLength = null;
		this.maxLengthLabel = null;
		this.maxLength = null;
		this.choiceLabel = null;
		this.choice = null;
		this.custom = null;
		this.customFct = null;
	}
	getData() {
		const data = {};
		data.select = this.select.value;
		data.field = this.field.value;
		data.from = parseFloat(this.from.value);
		data.to = parseFloat(this.to.value);
		data.scale = parseInt(this.scale.value); 
		data.choice = this.choice.value.split("\n"); 
		data.characters = this.characters.value;
		data.minLength = parseInt(this.minLength.value);
		data.maxLength = parseInt(this.maxLength.value);
		data.custom = this.custom.value;
		return data;
	}
	createDom(data) {
		const self = this;
		this.container = document.createElement('div');
		this.container.classList.add('csv-field');
		this.container.appendChild(document.createElement('hr'));
		this.container.dataset.id = this.id;

		this.containerButton = document.createElement('div');
		this.containerButton.classList.add('csv-field-data');
		this.containerButton.classList.add('csv-field-button');
		this.container.appendChild(this.containerButton);


		this.delete = document.createElement('img');
		this.delete.src = './image/error.png';
		this.delete.classList.add('csv-column-button');
		this.containerButton.appendChild(this.delete);
		this.delete.onclick = this.deleteColumn.bind(this);

		this.up = document.createElement('img');
		this.up.src = './image/down.png';
		this.up.classList.add('csv-column-button');
		this.up.classList.add('csv-column-button-reverse');
		this.containerButton.appendChild(this.up);
		this.up.onclick = this.upColumn.bind(this);

		this.down = document.createElement('img');
		this.down.src = './image/down.png';
		this.down.classList.add('csv-column-button');
		this.containerButton.appendChild(this.down);
		this.down.onclick = this.downColumn.bind(this);

		
		this.containerName = document.createElement('div');
		this.containerName.classList.add('csv-field-data');
		this.containerName.classList.add('csv-field-name');
		this.container.appendChild(this.containerName);

		this.field = document.createElement('input');
		this.field.type = 'text';
		if (data && data.field) this.field.value = data.field;
		else this.field.value = 'Field Name';
		this.containerName.appendChild(this.field);

		this.containerType = document.createElement('div');
		this.containerType.classList.add('csv-field-data');
		this.containerType.classList.add('csv-field-type');
		this.container.appendChild(this.containerType);
		this.select = document.createElement('select');
		this.containerType.appendChild(this.select);
		this.select.name = 'type';
		Object.keys(csvGenerator.typeColumnObject).forEach(function (property) {
			const option = document.createElement('option');
			option.value = property;
			option.text = csvGenerator.typeColumnObject[property].display;
			if (data && data.select && data.select === property) {
				option.selected = true;
			}				
			self.select.appendChild(option);
		});
		this.select.onchange = function () {
			csvGenerator.parameters.forEach(function (param) {
				self[param+"Label"].style.display = 'none';
				self[param].style.display = 'none';
			});
			csvGenerator.typeColumnObject[self.select.value].parameters.forEach(function (param) {
				self[param+"Label"].style.display = '';
				self[param].style.display = '';
			});
		};
		setTimeout(function () {
			self.select.onchange();
		}, 1);


		this.containerDataAll = document.createElement('div');
		this.containerDataAll.classList.add('csv-field-data');
		this.container.appendChild(this.containerDataAll);
		
		this.containerData = document.createElement('div');
		this.containerData.classList.add('csv-field-data-top');
		this.containerDataAll.appendChild(this.containerData);
		

		this.fromLabel = document.createElement('label');
		this.fromLabel.textContent = 'From';
		this.containerData.appendChild(this.fromLabel);

		this.from = document.createElement('input');
		this.from.type = 'number';
		if (data && data.from && data.from !== undefined) this.from.value = data.from;
		else this.from.value = '1';
		this.from.classList.add('csv-input-small');
		this.containerData.appendChild(this.from);
		
		this.toLabel = document.createElement('label');
		this.toLabel.textContent = 'To';
		this.containerData.appendChild(this.toLabel);

		this.to = document.createElement('input');
		this.to.type = 'number';
		if (data && data.to && data.to !== undefined) this.to.value = data.to;
		else this.to.value = '1000';
		this.to.classList.add('csv-input-small');
		this.containerData.appendChild(this.to);
		
		this.scaleLabel = document.createElement('label');
		this.scaleLabel.textContent = 'Scale';
		this.containerData.appendChild(this.scaleLabel);

		this.scale = document.createElement('input');
		this.scale.type = 'number';
		if (data && data.scale !== null && data.scale !== undefined) this.scale.value = data.scale;
		else this.scale.value = '2';
		this.scale.classList.add('csv-input-small');
		this.containerData.appendChild(this.scale);
		
		this.charactersLabel = document.createElement('label');
		this.charactersLabel.textContent = 'Allowed characters';
		this.containerData.appendChild(this.charactersLabel);

		this.characters = document.createElement('textarea');
		this.characters.cols = "80";
		if (data && data.characters && data.characters !== undefined) this.characters.value = data.characters;
		else this.characters.value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
		this.characters.rows = 2;
		this.containerData.appendChild(this.characters);

		this.minLengthLabel = document.createElement('label');
		this.minLengthLabel.textContent = 'Length min.';
		this.containerData.appendChild(this.minLengthLabel);

		this.minLength = document.createElement('input');
		this.minLength.type = 'number';
		if (data && data.minLength !== null && data.minLength !== undefined) this.minLength.value = data.minLength;
		else this.minLength.value = 2;
		this.minLength.classList.add('csv-input-small');
		this.containerData.appendChild(this.minLength);

		this.maxLengthLabel = document.createElement('label');
		this.maxLengthLabel.textContent = 'Length max.';
		this.containerData.appendChild(this.maxLengthLabel);

		this.maxLength = document.createElement('input');
		this.maxLength.type = 'number';
		if (data && data.maxLength !== null && data.maxLength !== undefined) this.maxLength.value = data.maxLength;
		else this.maxLength.value = 2;
		this.maxLength.classList.add('csv-input-small');
		this.containerData.appendChild(this.maxLength);

		this.choiceLabel = document.createElement('label');
		this.choiceLabel.innerHTML = 'Word list (one per line)';
		this.containerData.appendChild(this.choiceLabel);

		this.choice = document.createElement('textarea');
		this.choice.cols = "80";
		if (data && data.choice && data.choice !== undefined && Array.isArray(data.choice)) this.choice.value = data.choice.join("\n");
		this.containerData.appendChild(this.choice);

		this.customLabel = document.createElement('label');
		this.customLabel.innerHTML = 'Custom';
		this.containerData.appendChild(this.customLabel);

		this.custom = document.createElement('textarea');
		this.custom.cols = "80";
		if (data && data.custom !== null && data.custom !== undefined) this.custom.value = data.custom;
		else this.custom.value = "function (line) {\n	return new Date().toISOString(); \n} ";
		this.containerData.appendChild(this.custom);

		return this.container;
	}
	deleteColumn() {
		this.container.parentNode.removeChild(this.container);
		const index = csvGenerator.columnArray.indexOf(this);
		if (index !== -1) {
			csvGenerator.columnArray.splice(index, 1);
		}
	}
	upColumn() {
		const previousColumn = this.container.previousSibling;
		if (previousColumn !== null) {
			this.container.parentNode.removeChild(this.container);
			previousColumn.parentNode.insertBefore(this.container, previousColumn);
		}
	}
	downColumn() {
		const nextColumn = this.container.nextSibling;
		if (nextColumn !== null) {
			this.container.parentNode.removeChild(this.container);
			if (nextColumn.nextSibling) {
				nextColumn.parentNode.insertBefore(this.container, nextColumn.nextSibling);
			} else {
				nextColumn.parentNode.appendChild(this.container);
			}
		}
	}
}

window.addEventListener('load', function(e) {
	filename = document.getElementById('filename');	

	csvGenerator = new CSVGenerator();
	csvGenerator.init();

	myCodeMirrorResult = CodeMirror.fromTextArea(document.getElementById('editor-container-result'), { lineNumbers: true, viewportMargin: Infinity});
	myCodeMirrorResult.setSize(null, 400);
	document.getElementById('copy').addEventListener("click", function() {
		var textarea = document.createElement('textarea');
		textarea.textContent = resultFirst;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	});
	document.getElementById('download').addEventListener('click', function(e) {
		resetIndex();
		var blob = new Blob([resultFirst], { type: 'text/csv' });
		if (navigator.msSaveBlob) { // IE 10+
			navigator.msSaveBlob(blob, csvGenerator.getFilename(false));
		} else {
			var link = document.createElement("a");
			if (link.download !== undefined) {
				var url = URL.createObjectURL(blob);
				link.setAttribute("href", url);
				link.setAttribute("download", csvGenerator.getFilename(false));
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
	}, false);
	generatorButton = document.getElementById('generate');
	generatorButton.addEventListener('click', function(e) {
		csvGenerator.generate();
	});
	addColumnButton = document.getElementById('addColumn');
	addColumnButton.addEventListener('click', function(e) {
		csvGenerator.addColumn();
	});
	saveButton = document.getElementById('csv-template-save');
	saveButton.addEventListener('click', function(e) {
		csvGenerator.saveCSVTemplate();
	});
	copyButton = document.getElementById('csv-template-copy');
	copyButton.addEventListener('click', function(e) {
		csvGenerator.copyCSVTemplate();
	});
	zip.workerScriptsPath = 'external/';

	document.getElementById('container-result-first').style.display = 'none';
	
}, false);
