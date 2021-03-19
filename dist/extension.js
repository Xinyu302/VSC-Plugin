(()=>{var t={324:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addConsoleLog=void 0;const r=n(549);let o=new Set;e.addConsoleLog=function(t,e){if(o.has(t))return;let n=r.window.createOutputChannel(t);o.add(t),n.appendLine(e),n.show()}},77:t=>{t.exports=t=>{const e=process.versions.node.split(".").map((t=>parseInt(t,10)));return t=t.split(".").map((t=>parseInt(t,10))),e[0]>t[0]||e[0]===t[0]&&(e[1]>t[1]||e[1]===t[1]&&e[2]>=t[2])}},870:(t,e,n)=>{"use strict";const r=n(912),o=n(622),i=n(372).mkdirsSync,c=n(264).utimesMillisSync,s=n(866);function u(t,e,n,i){if(!i.filter||i.filter(e,n))return function(t,e,n,i){const c=(i.dereference?r.statSync:r.lstatSync)(e);return c.isDirectory()?function(t,e,n,o,i){if(!e)return function(t,e,n,o){return r.mkdirSync(n),f(e,n,o),l(n,t)}(t.mode,n,o,i);if(e&&!e.isDirectory())throw new Error(`Cannot overwrite non-directory '${o}' with directory '${n}'.`);return f(n,o,i)}(c,t,e,n,i):c.isFile()||c.isCharacterDevice()||c.isBlockDevice()?function(t,e,n,o,i){return e?function(t,e,n,o){if(o.overwrite)return r.unlinkSync(n),a(t,e,n,o);if(o.errorOnExist)throw new Error(`'${n}' already exists`)}(t,n,o,i):a(t,n,o,i)}(c,t,e,n,i):c.isSymbolicLink()?function(t,e,n,i){let c=r.readlinkSync(e);if(i.dereference&&(c=o.resolve(process.cwd(),c)),t){let t;try{t=r.readlinkSync(n)}catch(t){if("EINVAL"===t.code||"UNKNOWN"===t.code)return r.symlinkSync(c,n);throw t}if(i.dereference&&(t=o.resolve(process.cwd(),t)),s.isSrcSubdir(c,t))throw new Error(`Cannot copy '${c}' to a subdirectory of itself, '${t}'.`);if(r.statSync(n).isDirectory()&&s.isSrcSubdir(t,c))throw new Error(`Cannot overwrite '${t}' with '${c}'.`);return function(t,e){return r.unlinkSync(e),r.symlinkSync(t,e)}(c,n)}return r.symlinkSync(c,n)}(t,e,n,i):void 0}(t,e,n,i)}function a(t,e,n,o){return r.copyFileSync(e,n),o.preserveTimestamps&&function(t,e,n){(function(t){return 0==(128&t)})(t)&&function(t,e){l(t,128|e)}(n,t),function(t,e){const n=r.statSync(t);c(e,n.atime,n.mtime)}(e,n)}(t.mode,e,n),l(n,t.mode)}function l(t,e){return r.chmodSync(t,e)}function f(t,e,n){r.readdirSync(t).forEach((r=>function(t,e,n,r){const i=o.join(e,t),c=o.join(n,t),{destStat:a}=s.checkPathsSync(i,c,"copy");return u(a,i,c,r)}(r,t,e,n)))}t.exports=function(t,e,n){"function"==typeof n&&(n={filter:n}),(n=n||{}).clobber=!("clobber"in n)||!!n.clobber,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&"ia32"===process.arch&&console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");const{srcStat:c,destStat:a}=s.checkPathsSync(t,e,"copy");return s.checkParentPathsSync(t,c,e,"copy"),function(t,e,n,c){if(c.filter&&!c.filter(e,n))return;const s=o.dirname(n);return r.existsSync(s)||i(s),u(t,e,n,c)}(a,t,e,n)}},181:(t,e,n)=>{"use strict";t.exports={copySync:n(870)}},201:(t,e,n)=>{"use strict";const r=n(912),o=n(622),i=n(372).mkdirs,c=n(586).pathExists,s=n(264).utimesMillis,u=n(866);function a(t,e,n,r,s){const u=o.dirname(n);c(u,((o,c)=>o?s(o):c?f(t,e,n,r,s):void i(u,(o=>o?s(o):f(t,e,n,r,s)))))}function l(t,e,n,r,o,i){Promise.resolve(o.filter(n,r)).then((c=>c?t(e,n,r,o,i):i()),(t=>i(t)))}function f(t,e,n,r,o){return r.filter?l(d,t,e,n,r,o):d(t,e,n,r,o)}function d(t,e,n,i,c){(i.dereference?r.stat:r.lstat)(e,((s,a)=>s?c(s):a.isDirectory()?function(t,e,n,o,i,c){return e?e&&!e.isDirectory()?c(new Error(`Cannot overwrite non-directory '${o}' with directory '${n}'.`)):h(n,o,i,c):function(t,e,n,o,i){r.mkdir(n,(r=>{if(r)return i(r);h(e,n,o,(e=>e?i(e):m(n,t,i)))}))}(t.mode,n,o,i,c)}(a,t,e,n,i,c):a.isFile()||a.isCharacterDevice()||a.isBlockDevice()?function(t,e,n,o,i,c){return e?function(t,e,n,o,i){if(!o.overwrite)return o.errorOnExist?i(new Error(`'${n}' already exists`)):i();r.unlink(n,(r=>r?i(r):p(t,e,n,o,i)))}(t,n,o,i,c):p(t,n,o,i,c)}(a,t,e,n,i,c):a.isSymbolicLink()?function(t,e,n,i,c){r.readlink(e,((e,s)=>e?c(e):(i.dereference&&(s=o.resolve(process.cwd(),s)),t?void r.readlink(n,((e,a)=>e?"EINVAL"===e.code||"UNKNOWN"===e.code?r.symlink(s,n,c):c(e):(i.dereference&&(a=o.resolve(process.cwd(),a)),u.isSrcSubdir(s,a)?c(new Error(`Cannot copy '${s}' to a subdirectory of itself, '${a}'.`)):t.isDirectory()&&u.isSrcSubdir(a,s)?c(new Error(`Cannot overwrite '${a}' with '${s}'.`)):function(t,e,n){r.unlink(e,(o=>o?n(o):r.symlink(t,e,n)))}(s,n,c)))):r.symlink(s,n,c))))}(t,e,n,i,c):void 0))}function p(t,e,n,o,i){r.copyFile(e,n,(r=>r?i(r):o.preserveTimestamps?function(t,e,n,r){return function(t){return 0==(128&t)}(t)?function(t,e,n){return m(t,128|e,n)}(n,t,(o=>o?r(o):y(t,e,n,r))):y(t,e,n,r)}(t.mode,e,n,i):m(n,t.mode,i)))}function y(t,e,n,o){!function(t,e,n){r.stat(t,((t,r)=>t?n(t):s(e,r.atime,r.mtime,n)))}(e,n,(e=>e?o(e):m(n,t,o)))}function m(t,e,n){return r.chmod(t,e,n)}function h(t,e,n,o){r.readdir(t,((r,i)=>r?o(r):S(i,t,e,n,o)))}function S(t,e,n,r,i){const c=t.pop();return c?function(t,e,n,r,i,c){const s=o.join(n,e),a=o.join(r,e);u.checkPaths(s,a,"copy",((e,o)=>{if(e)return c(e);const{destStat:u}=o;f(u,s,a,i,(e=>e?c(e):S(t,n,r,i,c)))}))}(t,c,e,n,r,i):i()}t.exports=function(t,e,n,r){"function"!=typeof n||r?"function"==typeof n&&(n={filter:n}):(r=n,n={}),r=r||function(){},(n=n||{}).clobber=!("clobber"in n)||!!n.clobber,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&"ia32"===process.arch&&console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"),u.checkPaths(t,e,"copy",((o,i)=>{if(o)return r(o);const{srcStat:c,destStat:s}=i;u.checkParentPaths(t,c,e,"copy",(o=>o?r(o):n.filter?l(a,s,t,e,n,r):a(s,t,e,n,r)))}))}},843:(t,e,n)=>{"use strict";const r=n(471).fromCallback;t.exports={copy:r(n(201))}},967:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(912),i=n(622),c=n(372),s=n(682),u=r((function(t,e){e=e||function(){},o.readdir(t,((n,r)=>{if(n)return c.mkdirs(t,e);r=r.map((e=>i.join(t,e))),function t(){const n=r.pop();if(!n)return e();s.remove(n,(n=>{if(n)return e(n);t()}))}()}))}));function a(t){let e;try{e=o.readdirSync(t)}catch{return c.mkdirsSync(t)}e.forEach((e=>{e=i.join(t,e),s.removeSync(e)}))}t.exports={emptyDirSync:a,emptydirSync:a,emptyDir:u,emptydir:u}},599:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(622),i=n(912),c=n(372);t.exports={createFile:r((function(t,e){function n(){i.writeFile(t,"",(t=>{if(t)return e(t);e()}))}i.stat(t,((r,s)=>{if(!r&&s.isFile())return e();const u=o.dirname(t);i.stat(u,((t,r)=>{if(t)return"ENOENT"===t.code?c.mkdirs(u,(t=>{if(t)return e(t);n()})):e(t);r.isDirectory()?n():i.readdir(u,(t=>{if(t)return e(t)}))}))}))})),createFileSync:function(t){let e;try{e=i.statSync(t)}catch{}if(e&&e.isFile())return;const n=o.dirname(t);try{i.statSync(n).isDirectory()||i.readdirSync(n)}catch(t){if(!t||"ENOENT"!==t.code)throw t;c.mkdirsSync(n)}i.writeFileSync(t,"")}}},140:(t,e,n)=>{"use strict";const r=n(599),o=n(694),i=n(441);t.exports={createFile:r.createFile,createFileSync:r.createFileSync,ensureFile:r.createFile,ensureFileSync:r.createFileSync,createLink:o.createLink,createLinkSync:o.createLinkSync,ensureLink:o.createLink,ensureLinkSync:o.createLinkSync,createSymlink:i.createSymlink,createSymlinkSync:i.createSymlinkSync,ensureSymlink:i.createSymlink,ensureSymlinkSync:i.createSymlinkSync}},694:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(622),i=n(912),c=n(372),s=n(586).pathExists;t.exports={createLink:r((function(t,e,n){function r(t,e){i.link(t,e,(t=>{if(t)return n(t);n(null)}))}s(e,((u,a)=>u?n(u):a?n(null):void i.lstat(t,(i=>{if(i)return i.message=i.message.replace("lstat","ensureLink"),n(i);const u=o.dirname(e);s(u,((o,i)=>o?n(o):i?r(t,e):void c.mkdirs(u,(o=>{if(o)return n(o);r(t,e)}))))}))))})),createLinkSync:function(t,e){if(i.existsSync(e))return;try{i.lstatSync(t)}catch(t){throw t.message=t.message.replace("lstat","ensureLink"),t}const n=o.dirname(e);return i.existsSync(n)||c.mkdirsSync(n),i.linkSync(t,e)}}},284:(t,e,n)=>{"use strict";const r=n(622),o=n(912),i=n(586).pathExists;t.exports={symlinkPaths:function(t,e,n){if(r.isAbsolute(t))return o.lstat(t,(e=>e?(e.message=e.message.replace("lstat","ensureSymlink"),n(e)):n(null,{toCwd:t,toDst:t})));{const c=r.dirname(e),s=r.join(c,t);return i(s,((e,i)=>e?n(e):i?n(null,{toCwd:s,toDst:t}):o.lstat(t,(e=>e?(e.message=e.message.replace("lstat","ensureSymlink"),n(e)):n(null,{toCwd:t,toDst:r.relative(c,t)})))))}},symlinkPathsSync:function(t,e){let n;if(r.isAbsolute(t)){if(n=o.existsSync(t),!n)throw new Error("absolute srcpath does not exist");return{toCwd:t,toDst:t}}{const i=r.dirname(e),c=r.join(i,t);if(n=o.existsSync(c),n)return{toCwd:c,toDst:t};if(n=o.existsSync(t),!n)throw new Error("relative srcpath does not exist");return{toCwd:t,toDst:r.relative(i,t)}}}}},323:(t,e,n)=>{"use strict";const r=n(912);t.exports={symlinkType:function(t,e,n){if(n="function"==typeof e?e:n,e="function"!=typeof e&&e)return n(null,e);r.lstat(t,((t,r)=>{if(t)return n(null,"file");e=r&&r.isDirectory()?"dir":"file",n(null,e)}))},symlinkTypeSync:function(t,e){let n;if(e)return e;try{n=r.lstatSync(t)}catch{return"file"}return n&&n.isDirectory()?"dir":"file"}}},441:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(622),i=n(912),c=n(372),s=c.mkdirs,u=c.mkdirsSync,a=n(284),l=a.symlinkPaths,f=a.symlinkPathsSync,d=n(323),p=d.symlinkType,y=d.symlinkTypeSync,m=n(586).pathExists;t.exports={createSymlink:r((function(t,e,n,r){r="function"==typeof n?n:r,n="function"!=typeof n&&n,m(e,((c,u)=>c?r(c):u?r(null):void l(t,e,((c,u)=>{if(c)return r(c);t=u.toDst,p(u.toCwd,n,((n,c)=>{if(n)return r(n);const u=o.dirname(e);m(u,((n,o)=>n?r(n):o?i.symlink(t,e,c,r):void s(u,(n=>{if(n)return r(n);i.symlink(t,e,c,r)}))))}))}))))})),createSymlinkSync:function(t,e,n){if(i.existsSync(e))return;const r=f(t,e);t=r.toDst,n=y(r.toCwd,n);const c=o.dirname(e);return i.existsSync(c)||u(c),i.symlinkSync(t,e,n)}}},294:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(912),i=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter((t=>"function"==typeof o[t]));Object.keys(o).forEach((t=>{"promises"!==t&&(e[t]=o[t])})),i.forEach((t=>{e[t]=r(o[t])})),e.exists=function(t,e){return"function"==typeof e?o.exists(t,e):new Promise((e=>o.exists(t,e)))},e.read=function(t,e,n,r,i,c){return"function"==typeof c?o.read(t,e,n,r,i,c):new Promise(((c,s)=>{o.read(t,e,n,r,i,((t,e,n)=>{if(t)return s(t);c({bytesRead:e,buffer:n})}))}))},e.write=function(t,e,...n){return"function"==typeof n[n.length-1]?o.write(t,e,...n):new Promise(((r,i)=>{o.write(t,e,...n,((t,e,n)=>{if(t)return i(t);r({bytesWritten:e,buffer:n})}))}))},"function"==typeof o.writev&&(e.writev=function(t,e,...n){return"function"==typeof n[n.length-1]?o.writev(t,e,...n):new Promise(((r,i)=>{o.writev(t,e,...n,((t,e,n)=>{if(t)return i(t);r({bytesWritten:e,buffers:n})}))}))}),"function"==typeof o.realpath.native&&(e.realpath.native=r(o.realpath.native))},10:(t,e,n)=>{"use strict";t.exports={...n(294),...n(181),...n(843),...n(967),...n(140),...n(275),...n(372),...n(194),...n(406),...n(405),...n(586),...n(682)};const r=n(747);Object.getOwnPropertyDescriptor(r,"promises")&&Object.defineProperty(t.exports,"promises",{get:()=>r.promises})},275:(t,e,n)=>{"use strict";const r=n(471).fromPromise,o=n(775);o.outputJson=r(n(898)),o.outputJsonSync=n(415),o.outputJSON=o.outputJson,o.outputJSONSync=o.outputJsonSync,o.writeJSON=o.writeJson,o.writeJSONSync=o.writeJsonSync,o.readJSON=o.readJson,o.readJSONSync=o.readJsonSync,t.exports=o},775:(t,e,n)=>{"use strict";const r=n(362);t.exports={readJson:r.readFile,readJsonSync:r.readFileSync,writeJson:r.writeFile,writeJsonSync:r.writeFileSync}},415:(t,e,n)=>{"use strict";const{stringify:r}=n(480),{outputFileSync:o}=n(405);t.exports=function(t,e,n){const i=r(e,n);o(t,i,n)}},898:(t,e,n)=>{"use strict";const{stringify:r}=n(480),{outputFile:o}=n(405);t.exports=async function(t,e,n={}){const i=r(e,n);await o(t,i,n)}},372:(t,e,n)=>{"use strict";const r=n(471).fromPromise,{makeDir:o,makeDirSync:i}=n(872),c=r(o);t.exports={mkdirs:c,mkdirsSync:i,mkdirp:c,mkdirpSync:i,ensureDir:c,ensureDirSync:i}},872:(t,e,n)=>{"use strict";const r=n(294),o=n(622),i=n(77)("10.12.0"),c=t=>{if("win32"===process.platform&&/[<>:"|?*]/.test(t.replace(o.parse(t).root,""))){const e=new Error(`Path contains invalid characters: ${t}`);throw e.code="EINVAL",e}},s=t=>("number"==typeof t&&(t={mode:t}),{mode:511,...t}),u=t=>{const e=new Error(`operation not permitted, mkdir '${t}'`);return e.code="EPERM",e.errno=-4048,e.path=t,e.syscall="mkdir",e};t.exports.makeDir=async(t,e)=>{if(c(t),e=s(e),i){const n=o.resolve(t);return r.mkdir(n,{mode:e.mode,recursive:!0})}const n=async t=>{try{await r.mkdir(t,e.mode)}catch(e){if("EPERM"===e.code)throw e;if("ENOENT"===e.code){if(o.dirname(t)===t)throw u(t);if(e.message.includes("null bytes"))throw e;return await n(o.dirname(t)),n(t)}try{if(!(await r.stat(t)).isDirectory())throw new Error("The path is not a directory")}catch{throw e}}};return n(o.resolve(t))},t.exports.makeDirSync=(t,e)=>{if(c(t),e=s(e),i){const n=o.resolve(t);return r.mkdirSync(n,{mode:e.mode,recursive:!0})}const n=t=>{try{r.mkdirSync(t,e.mode)}catch(e){if("EPERM"===e.code)throw e;if("ENOENT"===e.code){if(o.dirname(t)===t)throw u(t);if(e.message.includes("null bytes"))throw e;return n(o.dirname(t)),n(t)}try{if(!r.statSync(t).isDirectory())throw new Error("The path is not a directory")}catch{throw e}}};return n(o.resolve(t))}},194:(t,e,n)=>{"use strict";t.exports={moveSync:n(286)}},286:(t,e,n)=>{"use strict";const r=n(912),o=n(622),i=n(181).copySync,c=n(682).removeSync,s=n(372).mkdirpSync,u=n(866);function a(t,e,n){try{r.renameSync(t,e)}catch(r){if("EXDEV"!==r.code)throw r;return function(t,e,n){return i(t,e,{overwrite:n,errorOnExist:!0}),c(t)}(t,e,n)}}t.exports=function(t,e,n){const i=(n=n||{}).overwrite||n.clobber||!1,{srcStat:l}=u.checkPathsSync(t,e,"move");return u.checkParentPathsSync(t,l,e,"move"),s(o.dirname(e)),function(t,e,n){if(n)return c(e),a(t,e,n);if(r.existsSync(e))throw new Error("dest already exists.");return a(t,e,n)}(t,e,i)}},406:(t,e,n)=>{"use strict";const r=n(471).fromCallback;t.exports={move:r(n(728))}},728:(t,e,n)=>{"use strict";const r=n(912),o=n(622),i=n(843).copy,c=n(682).remove,s=n(372).mkdirp,u=n(586).pathExists,a=n(866);function l(t,e,n,o){r.rename(t,e,(r=>r?"EXDEV"!==r.code?o(r):function(t,e,n,r){i(t,e,{overwrite:n,errorOnExist:!0},(e=>e?r(e):c(t,r)))}(t,e,n,o):o()))}t.exports=function(t,e,n,r){"function"==typeof n&&(r=n,n={});const i=n.overwrite||n.clobber||!1;a.checkPaths(t,e,"move",((n,f)=>{if(n)return r(n);const{srcStat:d}=f;a.checkParentPaths(t,d,e,"move",(n=>{if(n)return r(n);s(o.dirname(e),(n=>n?r(n):function(t,e,n,r){if(n)return c(e,(o=>o?r(o):l(t,e,n,r)));u(e,((o,i)=>o?r(o):i?r(new Error("dest already exists.")):l(t,e,n,r)))}(t,e,i,r)))}))}))}},405:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(912),i=n(622),c=n(372),s=n(586).pathExists;t.exports={outputFile:r((function(t,e,n,r){"function"==typeof n&&(r=n,n="utf8");const u=i.dirname(t);s(u,((i,s)=>i?r(i):s?o.writeFile(t,e,n,r):void c.mkdirs(u,(i=>{if(i)return r(i);o.writeFile(t,e,n,r)}))))})),outputFileSync:function(t,...e){const n=i.dirname(t);if(o.existsSync(n))return o.writeFileSync(t,...e);c.mkdirsSync(n),o.writeFileSync(t,...e)}}},586:(t,e,n)=>{"use strict";const r=n(471).fromPromise,o=n(294);t.exports={pathExists:r((function(t){return o.access(t).then((()=>!0)).catch((()=>!1))})),pathExistsSync:o.existsSync}},682:(t,e,n)=>{"use strict";const r=n(471).fromCallback,o=n(418);t.exports={remove:r(o),removeSync:o.sync}},418:(t,e,n)=>{"use strict";const r=n(912),o=n(622),i=n(357),c="win32"===process.platform;function s(t){["unlink","chmod","stat","lstat","rmdir","readdir"].forEach((e=>{t[e]=t[e]||r[e],t[e+="Sync"]=t[e]||r[e]})),t.maxBusyTries=t.maxBusyTries||3}function u(t,e,n){let r=0;"function"==typeof e&&(n=e,e={}),i(t,"rimraf: missing path"),i.strictEqual(typeof t,"string","rimraf: path should be a string"),i.strictEqual(typeof n,"function","rimraf: callback function required"),i(e,"rimraf: invalid options argument provided"),i.strictEqual(typeof e,"object","rimraf: options should be object"),s(e),a(t,e,(function o(i){if(i){if(("EBUSY"===i.code||"ENOTEMPTY"===i.code||"EPERM"===i.code)&&r<e.maxBusyTries)return r++,setTimeout((()=>a(t,e,o)),100*r);"ENOENT"===i.code&&(i=null)}n(i)}))}function a(t,e,n){i(t),i(e),i("function"==typeof n),e.lstat(t,((r,o)=>r&&"ENOENT"===r.code?n(null):r&&"EPERM"===r.code&&c?l(t,e,r,n):o&&o.isDirectory()?d(t,e,r,n):void e.unlink(t,(r=>{if(r){if("ENOENT"===r.code)return n(null);if("EPERM"===r.code)return c?l(t,e,r,n):d(t,e,r,n);if("EISDIR"===r.code)return d(t,e,r,n)}return n(r)}))))}function l(t,e,n,r){i(t),i(e),i("function"==typeof r),e.chmod(t,438,(o=>{o?r("ENOENT"===o.code?null:n):e.stat(t,((o,i)=>{o?r("ENOENT"===o.code?null:n):i.isDirectory()?d(t,e,n,r):e.unlink(t,r)}))}))}function f(t,e,n){let r;i(t),i(e);try{e.chmodSync(t,438)}catch(t){if("ENOENT"===t.code)return;throw n}try{r=e.statSync(t)}catch(t){if("ENOENT"===t.code)return;throw n}r.isDirectory()?y(t,e,n):e.unlinkSync(t)}function d(t,e,n,r){i(t),i(e),i("function"==typeof r),e.rmdir(t,(c=>{!c||"ENOTEMPTY"!==c.code&&"EEXIST"!==c.code&&"EPERM"!==c.code?c&&"ENOTDIR"===c.code?r(n):r(c):function(t,e,n){i(t),i(e),i("function"==typeof n),e.readdir(t,((r,i)=>{if(r)return n(r);let c,s=i.length;if(0===s)return e.rmdir(t,n);i.forEach((r=>{u(o.join(t,r),e,(r=>{if(!c)return r?n(c=r):void(0==--s&&e.rmdir(t,n))}))}))}))}(t,e,r)}))}function p(t,e){let n;s(e=e||{}),i(t,"rimraf: missing path"),i.strictEqual(typeof t,"string","rimraf: path should be a string"),i(e,"rimraf: missing options"),i.strictEqual(typeof e,"object","rimraf: options should be object");try{n=e.lstatSync(t)}catch(n){if("ENOENT"===n.code)return;"EPERM"===n.code&&c&&f(t,e,n)}try{n&&n.isDirectory()?y(t,e,null):e.unlinkSync(t)}catch(n){if("ENOENT"===n.code)return;if("EPERM"===n.code)return c?f(t,e,n):y(t,e,n);if("EISDIR"!==n.code)throw n;y(t,e,n)}}function y(t,e,n){i(t),i(e);try{e.rmdirSync(t)}catch(r){if("ENOTDIR"===r.code)throw n;if("ENOTEMPTY"===r.code||"EEXIST"===r.code||"EPERM"===r.code)!function(t,e){if(i(t),i(e),e.readdirSync(t).forEach((n=>p(o.join(t,n),e))),!c)return e.rmdirSync(t,e);{const n=Date.now();do{try{return e.rmdirSync(t,e)}catch{}}while(Date.now()-n<500)}}(t,e);else if("ENOENT"!==r.code)throw r}}t.exports=u,u.sync=p},866:(t,e,n)=>{"use strict";const r=n(294),o=n(622),i=n(669),c=n(77)("10.5.0"),s=t=>c?r.stat(t,{bigint:!0}):r.stat(t),u=t=>c?r.statSync(t,{bigint:!0}):r.statSync(t);function a(t,e){return Promise.all([s(t),s(e).catch((t=>{if("ENOENT"===t.code)return null;throw t}))]).then((([t,e])=>({srcStat:t,destStat:e})))}function l(t,e){if(e.ino&&e.dev&&e.ino===t.ino&&e.dev===t.dev){if(c||e.ino<Number.MAX_SAFE_INTEGER)return!0;if(e.size===t.size&&e.mode===t.mode&&e.nlink===t.nlink&&e.atimeMs===t.atimeMs&&e.mtimeMs===t.mtimeMs&&e.ctimeMs===t.ctimeMs&&e.birthtimeMs===t.birthtimeMs)return!0}return!1}function f(t,e){const n=o.resolve(t).split(o.sep).filter((t=>t)),r=o.resolve(e).split(o.sep).filter((t=>t));return n.reduce(((t,e,n)=>t&&r[n]===e),!0)}function d(t,e,n){return`Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`}t.exports={checkPaths:function(t,e,n,r){i.callbackify(a)(t,e,((o,i)=>{if(o)return r(o);const{srcStat:c,destStat:s}=i;return s&&l(c,s)?r(new Error("Source and destination must not be the same.")):c.isDirectory()&&f(t,e)?r(new Error(d(t,e,n))):r(null,{srcStat:c,destStat:s})}))},checkPathsSync:function(t,e,n){const{srcStat:r,destStat:o}=function(t,e){let n;const r=u(t);try{n=u(e)}catch(t){if("ENOENT"===t.code)return{srcStat:r,destStat:null};throw t}return{srcStat:r,destStat:n}}(t,e);if(o&&l(r,o))throw new Error("Source and destination must not be the same.");if(r.isDirectory()&&f(t,e))throw new Error(d(t,e,n));return{srcStat:r,destStat:o}},checkParentPaths:function t(e,n,i,s,u){const a=o.resolve(o.dirname(e)),f=o.resolve(o.dirname(i));if(f===a||f===o.parse(f).root)return u();const p=(r,o)=>r?"ENOENT"===r.code?u():u(r):l(n,o)?u(new Error(d(e,i,s))):t(e,n,f,s,u);c?r.stat(f,{bigint:!0},p):r.stat(f,p)},checkParentPathsSync:function t(e,n,r,i){const c=o.resolve(o.dirname(e)),s=o.resolve(o.dirname(r));if(s===c||s===o.parse(s).root)return;let a;try{a=u(s)}catch(t){if("ENOENT"===t.code)return;throw t}if(l(n,a))throw new Error(d(e,r,i));return t(e,n,s,i)},isSrcSubdir:f}},264:(t,e,n)=>{"use strict";const r=n(912);t.exports={utimesMillis:function(t,e,n,o){r.open(t,"r+",((t,i)=>{if(t)return o(t);r.futimes(i,e,n,(t=>{r.close(i,(e=>{o&&o(t||e)}))}))}))},utimesMillisSync:function(t,e,n){const o=r.openSync(t,"r+");return r.futimesSync(o,e,n),r.closeSync(o)}}},831:t=>{"use strict";t.exports=function(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Object)var n={__proto__:e(t)};else n=Object.create(null);return Object.getOwnPropertyNames(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n};var e=Object.getPrototypeOf||function(t){return t.__proto__}},912:(t,e,n)=>{var r,o,i=n(747),c=n(226),s=n(435),u=n(831),a=n(669);function l(t,e){Object.defineProperty(t,r,{get:function(){return e}})}"function"==typeof Symbol&&"function"==typeof Symbol.for?(r=Symbol.for("graceful-fs.queue"),o=Symbol.for("graceful-fs.previous")):(r="___graceful-fs.queue",o="___graceful-fs.previous");var f=function(){};if(a.debuglog?f=a.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(f=function(){var t=a.format.apply(a,arguments);t="GFS4: "+t.split(/\n/).join("\nGFS4: "),console.error(t)}),!i[r]){var d=global[r]||[];l(i,d),i.close=function(t){function e(e,n){return t.call(i,e,(function(t){t||m(),"function"==typeof n&&n.apply(this,arguments)}))}return Object.defineProperty(e,o,{value:t}),e}(i.close),i.closeSync=function(t){function e(e){t.apply(i,arguments),m()}return Object.defineProperty(e,o,{value:t}),e}(i.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",(function(){f(i[r]),n(357).equal(i[r].length,0)}))}function p(t){c(t),t.gracefulify=p,t.createReadStream=function(e,n){return new t.ReadStream(e,n)},t.createWriteStream=function(e,n){return new t.WriteStream(e,n)};var e=t.readFile;t.readFile=function(t,n,r){return"function"==typeof n&&(r=n,n=null),function t(n,r,o){return e(n,r,(function(e){!e||"EMFILE"!==e.code&&"ENFILE"!==e.code?("function"==typeof o&&o.apply(this,arguments),m()):y([t,[n,r,o]])}))}(t,n,r)};var n=t.writeFile;t.writeFile=function(t,e,r,o){return"function"==typeof r&&(o=r,r=null),function t(e,r,o,i){return n(e,r,o,(function(n){!n||"EMFILE"!==n.code&&"ENFILE"!==n.code?("function"==typeof i&&i.apply(this,arguments),m()):y([t,[e,r,o,i]])}))}(t,e,r,o)};var r=t.appendFile;r&&(t.appendFile=function(t,e,n,o){return"function"==typeof n&&(o=n,n=null),function t(e,n,o,i){return r(e,n,o,(function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?("function"==typeof i&&i.apply(this,arguments),m()):y([t,[e,n,o,i]])}))}(t,e,n,o)});var o=t.copyFile;o&&(t.copyFile=function(t,e,n,r){return"function"==typeof n&&(r=n,n=0),o(t,e,n,(function(i){!i||"EMFILE"!==i.code&&"ENFILE"!==i.code?("function"==typeof r&&r.apply(this,arguments),m()):y([o,[t,e,n,r]])}))});var i=t.readdir;function u(e){return i.apply(t,e)}if(t.readdir=function(t,e,n){var r=[t];return"function"!=typeof e?r.push(e):n=e,r.push((function(t,e){e&&e.sort&&e.sort(),!t||"EMFILE"!==t.code&&"ENFILE"!==t.code?("function"==typeof n&&n.apply(this,arguments),m()):y([u,[r]])})),u(r)},"v0.8"===process.version.substr(0,4)){var a=s(t);S=a.ReadStream,w=a.WriteStream}var l=t.ReadStream;l&&(S.prototype=Object.create(l.prototype),S.prototype.open=function(){var t=this;E(t.path,t.flags,t.mode,(function(e,n){e?(t.autoClose&&t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n),t.read())}))});var f=t.WriteStream;f&&(w.prototype=Object.create(f.prototype),w.prototype.open=function(){var t=this;E(t.path,t.flags,t.mode,(function(e,n){e?(t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n))}))}),Object.defineProperty(t,"ReadStream",{get:function(){return S},set:function(t){S=t},enumerable:!0,configurable:!0}),Object.defineProperty(t,"WriteStream",{get:function(){return w},set:function(t){w=t},enumerable:!0,configurable:!0});var d=S;Object.defineProperty(t,"FileReadStream",{get:function(){return d},set:function(t){d=t},enumerable:!0,configurable:!0});var h=w;function S(t,e){return this instanceof S?(l.apply(this,arguments),this):S.apply(Object.create(S.prototype),arguments)}function w(t,e){return this instanceof w?(f.apply(this,arguments),this):w.apply(Object.create(w.prototype),arguments)}Object.defineProperty(t,"FileWriteStream",{get:function(){return h},set:function(t){h=t},enumerable:!0,configurable:!0});var v=t.open;function E(t,e,n,r){return"function"==typeof n&&(r=n,n=null),function t(e,n,r,o){return v(e,n,r,(function(i,c){!i||"EMFILE"!==i.code&&"ENFILE"!==i.code?("function"==typeof o&&o.apply(this,arguments),m()):y([t,[e,n,r,o]])}))}(t,e,n,r)}return t.open=E,t}function y(t){f("ENQUEUE",t[0].name,t[1]),i[r].push(t)}function m(){var t=i[r].shift();t&&(f("RETRY",t[0].name,t[1]),t[0].apply(null,t[1]))}global[r]||l(global,i[r]),t.exports=p(u(i)),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!i.__patched&&(t.exports=p(i),i.__patched=!0)},435:(t,e,n)=>{var r=n(413).Stream;t.exports=function(t){return{ReadStream:function e(n,o){if(!(this instanceof e))return new e(n,o);r.call(this);var i=this;this.path=n,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=65536,o=o||{};for(var c=Object.keys(o),s=0,u=c.length;s<u;s++){var a=c[s];this[a]=o[a]}if(this.encoding&&this.setEncoding(this.encoding),void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}null===this.fd?t.open(this.path,this.flags,this.mode,(function(t,e){if(t)return i.emit("error",t),void(i.readable=!1);i.fd=e,i.emit("open",e),i._read()})):process.nextTick((function(){i._read()}))},WriteStream:function e(n,o){if(!(this instanceof e))return new e(n,o);r.call(this),this.path=n,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,o=o||{};for(var i=Object.keys(o),c=0,s=i.length;c<s;c++){var u=i[c];this[u]=o[u]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],null===this.fd&&(this._open=t.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}}},226:(t,e,n)=>{var r=n(619),o=process.cwd,i=null,c=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return i||(i=o.call(process)),i};try{process.cwd()}catch(t){}if("function"==typeof process.chdir){var s=process.chdir;process.chdir=function(t){i=null,s.call(process,t)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,s)}t.exports=function(t){var e,n;function o(e){return e?function(n,r,o){return e.call(t,n,r,(function(t){f(t)&&(t=null),o&&o.apply(this,arguments)}))}:e}function i(e){return e?function(n,r){try{return e.call(t,n,r)}catch(t){if(!f(t))throw t}}:e}function s(e){return e?function(n,r,o,i){return e.call(t,n,r,o,(function(t){f(t)&&(t=null),i&&i.apply(this,arguments)}))}:e}function u(e){return e?function(n,r,o){try{return e.call(t,n,r,o)}catch(t){if(!f(t))throw t}}:e}function a(e){return e?function(n,r,o){function i(t,e){e&&(e.uid<0&&(e.uid+=4294967296),e.gid<0&&(e.gid+=4294967296)),o&&o.apply(this,arguments)}return"function"==typeof r&&(o=r,r=null),r?e.call(t,n,r,i):e.call(t,n,i)}:e}function l(e){return e?function(n,r){var o=r?e.call(t,n,r):e.call(t,n);return o.uid<0&&(o.uid+=4294967296),o.gid<0&&(o.gid+=4294967296),o}:e}function f(t){return!t||"ENOSYS"===t.code||!(process.getuid&&0===process.getuid()||"EINVAL"!==t.code&&"EPERM"!==t.code)}r.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&function(t){t.lchmod=function(e,n,o){t.open(e,r.O_WRONLY|r.O_SYMLINK,n,(function(e,r){e?o&&o(e):t.fchmod(r,n,(function(e){t.close(r,(function(t){o&&o(e||t)}))}))}))},t.lchmodSync=function(e,n){var o,i=t.openSync(e,r.O_WRONLY|r.O_SYMLINK,n),c=!0;try{o=t.fchmodSync(i,n),c=!1}finally{if(c)try{t.closeSync(i)}catch(t){}else t.closeSync(i)}return o}}(t),t.lutimes||function(t){r.hasOwnProperty("O_SYMLINK")?(t.lutimes=function(e,n,o,i){t.open(e,r.O_SYMLINK,(function(e,r){e?i&&i(e):t.futimes(r,n,o,(function(e){t.close(r,(function(t){i&&i(e||t)}))}))}))},t.lutimesSync=function(e,n,o){var i,c=t.openSync(e,r.O_SYMLINK),s=!0;try{i=t.futimesSync(c,n,o),s=!1}finally{if(s)try{t.closeSync(c)}catch(t){}else t.closeSync(c)}return i}):(t.lutimes=function(t,e,n,r){r&&process.nextTick(r)},t.lutimesSync=function(){})}(t),t.chown=s(t.chown),t.fchown=s(t.fchown),t.lchown=s(t.lchown),t.chmod=o(t.chmod),t.fchmod=o(t.fchmod),t.lchmod=o(t.lchmod),t.chownSync=u(t.chownSync),t.fchownSync=u(t.fchownSync),t.lchownSync=u(t.lchownSync),t.chmodSync=i(t.chmodSync),t.fchmodSync=i(t.fchmodSync),t.lchmodSync=i(t.lchmodSync),t.stat=a(t.stat),t.fstat=a(t.fstat),t.lstat=a(t.lstat),t.statSync=l(t.statSync),t.fstatSync=l(t.fstatSync),t.lstatSync=l(t.lstatSync),t.lchmod||(t.lchmod=function(t,e,n){n&&process.nextTick(n)},t.lchmodSync=function(){}),t.lchown||(t.lchown=function(t,e,n,r){r&&process.nextTick(r)},t.lchownSync=function(){}),"win32"===c&&(t.rename=(e=t.rename,function(n,r,o){var i=Date.now(),c=0;e(n,r,(function s(u){if(u&&("EACCES"===u.code||"EPERM"===u.code)&&Date.now()-i<6e4)return setTimeout((function(){t.stat(r,(function(t,i){t&&"ENOENT"===t.code?e(n,r,s):o(u)}))}),c),void(c<100&&(c+=10));o&&o(u)}))})),t.read=function(e){function n(n,r,o,i,c,s){var u;if(s&&"function"==typeof s){var a=0;u=function(l,f,d){if(l&&"EAGAIN"===l.code&&a<10)return a++,e.call(t,n,r,o,i,c,u);s.apply(this,arguments)}}return e.call(t,n,r,o,i,c,u)}return Object.setPrototypeOf&&Object.setPrototypeOf(n,e),n}(t.read),t.readSync=(n=t.readSync,function(e,r,o,i,c){for(var s=0;;)try{return n.call(t,e,r,o,i,c)}catch(t){if("EAGAIN"===t.code&&s<10){s++;continue}throw t}})}},362:(t,e,n)=>{let r;try{r=n(912)}catch(t){r=n(747)}const o=n(471),{stringify:i,stripBom:c}=n(480),s={readFile:o.fromPromise((async function(t,e={}){"string"==typeof e&&(e={encoding:e});const n=e.fs||r,i=!("throws"in e)||e.throws;let s,u=await o.fromCallback(n.readFile)(t,e);u=c(u);try{s=JSON.parse(u,e?e.reviver:null)}catch(e){if(i)throw e.message=`${t}: ${e.message}`,e;return null}return s})),readFileSync:function(t,e={}){"string"==typeof e&&(e={encoding:e});const n=e.fs||r,o=!("throws"in e)||e.throws;try{let r=n.readFileSync(t,e);return r=c(r),JSON.parse(r,e.reviver)}catch(e){if(o)throw e.message=`${t}: ${e.message}`,e;return null}},writeFile:o.fromPromise((async function(t,e,n={}){const c=n.fs||r,s=i(e,n);await o.fromCallback(c.writeFile)(t,s,n)})),writeFileSync:function(t,e,n={}){const o=n.fs||r,c=i(e,n);return o.writeFileSync(t,c,n)}};t.exports=s},480:t=>{t.exports={stringify:function(t,{EOL:e="\n",finalEOL:n=!0,replacer:r=null,spaces:o}={}){const i=n?e:"";return JSON.stringify(t,r,o).replace(/\n/g,e)+i},stripBom:function(t){return Buffer.isBuffer(t)&&(t=t.toString("utf8")),t.replace(/^\uFEFF/,"")}}},471:(t,e)=>{"use strict";e.fromCallback=function(t){return Object.defineProperty((function(...e){if("function"!=typeof e[e.length-1])return new Promise(((n,r)=>{t.call(this,...e,((t,e)=>null!=t?r(t):n(e)))}));t.apply(this,e)}),"name",{value:t.name})},e.fromPromise=function(t){return Object.defineProperty((function(...e){const n=e[e.length-1];if("function"!=typeof n)return t.apply(this,e);t.apply(this,e.slice(0,-1)).then((t=>n(null,t)),n)}),"name",{value:t.name})}},357:t=>{"use strict";t.exports=require("assert")},619:t=>{"use strict";t.exports=require("constants")},747:t=>{"use strict";t.exports=require("fs")},622:t=>{"use strict";t.exports=require("path")},413:t=>{"use strict";t.exports=require("stream")},669:t=>{"use strict";t.exports=require("util")},549:t=>{"use strict";t.exports=require("vscode")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}var r={};(()=>{"use strict";var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const e=n(549),o=n(10),i=n(324);let c,s;t.activate=function(t){console.log('Congratulations, your extension "roy-ext1" is now active!');var n=[];c=o.readFileSync("/Users/yxy/Desktop/tscode/hello-world/suggest","utf8"),s=o.readFileSync("/Users/yxy/Desktop/tscode/hello-world/unsuggest","utf8");for(var r=c.split("\n"),u=0;u<r.length;u++)r[u]=r[u].replace(/\s+/g,"");var a=s.split("\n");for(u=0;u<a.length;u++)a[u]=a[u].replace(/\s+/g,"");let l=e.commands.registerCommand("extension.addConsoleLog",i.addConsoleLog),f=e.commands.registerCommand("hello-world.helloWorld",(()=>{let t=o.readFileSync("/Users/yxy/Desktop/tscode/hello-world/a.csv","utf8").split("\n");for(var r=0;r<t.length;r++){let e=t[r].split(",");n.push(e)}e.window.showInformationMessage("Hello roy!")}));t.subscriptions.push(f),t.subscriptions.push(l);let d=e.languages.registerHoverProvider("*",{provideHover(t,n,o){var i;t.lineAt(n.line).text;const c=e.window.activeTextEditor;let s=c.document.getWordRangeAtPosition(n),u=c.document.getText(s);return 0==r.filter((t=>t==u)).length&&0==a.filter((t=>t==u)).length?null:(i="**异构内存访存模式检测**\n\n**结构名：**"+String(u)+"\n\n**store：**653\n\n**load：**48876\n\n**放置建议：**顺序读结构，**建议存放在NVM中**\n\n**冗余零比例：**30.34%",new e.Hover(i))}});t.subscriptions.push(d);let p=e.languages.registerDocumentHighlightProvider({language:"cpp"},{provideDocumentHighlights(t,n,o){const i=t.getText();var c=[];return r.forEach((n=>{if(null==n||0===n.length)return;let r=-1;for(;(r=i.indexOf(n,r+1))>=0;){const o=t.positionAt(r),i=t.getWordRangeAtPosition(o);t.getText(i)==n&&(c.push(new e.DocumentHighlight(i)),e.window.showInformationMessage(String(c)))}})),a.forEach((n=>{if(null==n||0===n.length)return;let r=-1;for(;(r=i.indexOf(n,r+1))>=0;){const o=t.positionAt(r),i=t.getWordRangeAtPosition(o);t.getText(i)==n&&c.push(new e.DocumentHighlight(i,2))}})),c}});t.subscriptions.push(p);let y=e.languages.registerCodeLensProvider({language:"cpp"},{provideCodeLenses(t,n){const o=t.getText();var i=[];return r.forEach((n=>{if(null==n||0===n.length)return;let r=-1;for(;(r=o.indexOf(n,r+1))>=0;){const o=t.positionAt(r),c=t.getWordRangeAtPosition(o);if(t.getText(c)!=n)continue;let s="0x7fbd08521740:pushq  %rbp:__libc_malloc::0\n0x7fbd08df7188:callq  0x7fbd08df14c0:operator new(unsigned long)::0\n0x403f63:callq  0x401400:__gnu_cxx::new_allocator<Base2>::allocate(unsigned long, void const*):/usr/include/c++/4.8.2/ext/new_allocator.h:104\n0x40361a:callq  0x403f28:std::_Vector_base<Base2, std::allocator<Base2> >::_M_allocate(unsigned long):/usr/include/c++/4.8.2/bits/stl_vector.h:168\n0x402ba7:callq  0x4035f0:void std::vector<Base2, std::allocator<Base2> >::_M_emplace_back_aux<Base2>(Base2&&):/usr/include/c++/4.8.2/bits/vector.tcc:404\n0x40241a:callq  0x402b6e:void std::vector<Base2, std::allocator<Base2> >::emplace_back<Base2>(Base2&&):/usr/include/c++/4.8.2/bits/vector.tcc:101\n0x401fa9:callq  0x4023a0:std::vector<Base2, std::allocator<Base2> >::push_back(Base2&&):/usr/include/c++/4.8.2/bits/stl_vector.h:920\n0x40166d:callq  0x401f80:main:/home/temp/frb/bin_test/main.cpp:114\n0x7fbd084be553:callq  %rax:__libc_start_main::0\n0x401484:callq  0x401250:_start::0\n";i.push(new e.CodeLens(c,{title:"查看调用路径",command:"extension.addConsoleLog",arguments:[n,s]}))}})),i},resolveCodeLens:(t,e)=>(t.command.command="hello-world.helloWorld",t.command.arguments=["aaa bbb ccc"],t)});t.subscriptions.push(y)},t.deactivate=function(){}})(),module.exports=r})();