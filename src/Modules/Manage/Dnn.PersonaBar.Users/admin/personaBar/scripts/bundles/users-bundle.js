!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,o){r.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}var t=n(1),r=e(t),o=n(34),s=n(2),u=n(15),a=e(u),i=n(18),l=e(i),c=n(13),f=e(c),d=(0,l["default"])();a["default"].dispatch=d.dispatch;var p=document.getElementById("users-container");if(!p)throw Error("Cannot find users container.");a["default"].init(),(0,o.render)(r["default"].createElement(s.Provider,{store:d},r["default"].createElement(f["default"],null)),p)}).call(this)}finally{}},function(e,t){e.exports=dnn.nodeModules.React},function(e,t){e.exports=dnn.nodeModules.ReactRedux},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(l(r.parts[s],t))}else{for(var u=[],s=0;s<r.parts.length;s++)u.push(l(r.parts[s],t));p[r.id]={id:r.id,refs:1,parts:u}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],u=o[1],a=o[2],i=o[3],l={css:u,media:a,sourceMap:i};n[s]?n[s].parts.push(l):t.push(n[s]={id:s,parts:[l]})}return t}function s(e,t){var n=E(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function i(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var s=R++;n=v||(v=a(t)),r=c.bind(null,n,s,!1),o=c.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(t),r=d.bind(null,n),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(s,u[t]):e.appendChild(s)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var p={},y=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=y(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),E=y(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,R=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var s=[],u=0;u<n.length;u++){var a=n[u],i=p[a.id];i.refs--,s.push(i)}if(e){var l=o(e);r(l,t)}for(var u=0;u<s.length;u++){var i=s[u];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete p[i.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=dnn.nodeModules.Redux},function(e,t){e.exports=window.dnn.Users.CommonActions},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"#users-container *{box-sizing:border-box}#users-container .create-user-box-collapse,#users-container .create-user-box-collapse>div{float:left}#users-container .dnn-social-panel-body{margin-top:75px}#users-container .dnn-social-panel-body.without-margin{margin-top:0}#users-container .dnn-social-panel-body .users-workspace-tray{height:44px}#users-container .dnn-social-panel-body .users-workspace-tray .dnn-grid-cell{height:44px;padding-top:7px}#users-container .dnn-social-panel-body .users-workspace-tray .dnn-grid-cell .dnn-search-box{width:100%}#users-container .dnn-social-panel-body .users-paging{float:left;width:100%;margin:0 2px;padding:18px}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"",""])},[41,24],function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=e(i),c=n(2),f=n(11),d=e(f),p=n(31),y=e(p),h=n(6),E=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return s(t,e),a(t,[{key:"componentWillMount",value:function(){var e=this.props;e.dispatch(h.CommonUsersActions.getUsers({searchText:"",filter:0,pageIndex:0,pageSize:10,sortColumn:"",sortAscending:!1}))}},{key:"render",value:function(){return l["default"].createElement("div",{className:"boilerplate-app personaBar-mainContainer"},l["default"].createElement(y["default"],{isOpen:!0},l["default"].createElement(d["default"],null)))}}]),t}(i.Component);E.PropTypes={dispatch:i.PropTypes.func.isRequired},t["default"]=(0,c.connect)(u)(E)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{totalUsers:e.users.totalUsers}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=e(c),d=n(2),p=n(16),y=e(p),h=n(28),E=e(h),v=n(29),R=e(v),m=n(33),_=e(m),g=n(32),b=e(g),S=n(35),U=n(30),O=e(U);n(26);var T=n(6),w={searchText:"",filter:0,pageIndex:0,pageSize:10,sortColumn:"",sortAscending:!1},x=function(e){function t(){o(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={userFilters:[],searchParameters:w},e}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this;this.props.dispatch(T.CommonUsersActions.getUserFilters(function(t){var n=i([],JSON.parse(JSON.stringify(t.Results)));e.setState({userFilters:n})}))}},{key:"onChange",value:function(e,t){this.setState(r({},e,t.target.value))}},{key:"onFilterChange",value:function(e,t){var n=this.state.searchParameters;n.searchText=t,n.filter=e.value,n.pageIndex=0,this.props.dispatch(T.CommonUsersActions.getUsers(n)),this.setState({searchParameters:n})}},{key:"onPageChanged",value:function(e,t){var n=this.state.searchParameters;n.pageIndex=e,n.pageSize=t,this.props.dispatch(T.CommonUsersActions.getUsers(n)),this.setState({searchParameters:n})}},{key:"getWorkSpaceTray",value:function(){return this.state.userFilters.length>0&&f["default"].createElement(R["default"],{className:"users-workspace-tray"},f["default"].createElement(S.FiltersBar,{onChange:this.onFilterChange.bind(this),userFilters:this.state.userFilters}))}},{key:"toggleCreateBox",value:function(){this.refs.userTable.getWrappedInstance().onAddUser()}},{key:"render",value:function(){var e=this.props,t=this.state,n=t.createBoxVisible?"without-margin":"";return f["default"].createElement(R["default"],null,f["default"].createElement(_["default"],{title:y["default"].get("nav_Users")},f["default"].createElement(E["default"],{type:"primary",size:"large",onClick:this.toggleCreateBox.bind(this),title:y["default"].get("btnCreateUser")},y["default"].get("btn_CreateUser"))),f["default"].createElement(b["default"],{workSpaceTrayVisible:!0,workSpaceTrayOutside:!0,workSpaceTray:this.getWorkSpaceTray(),className:n},f["default"].createElement(S.UserTable,{ref:"userTable"}),0===t.searchParameters.filter&&f["default"].createElement("div",{className:"users-paging"},f["default"].createElement(O["default"],{pageSizeDropDownWithoutBorder:!0,showSummary:!0,showPageInfo:!1,pageSizeOptionText:y["default"].get("usersPageSizeOptionText"),summaryText:y["default"].get("usersSummaryText"),pageSize:this.state.searchParameters.pageSize,totalRecords:e.totalUsers,onPageChanged:this.onPageChanged.bind(this)}))))}}]),t}(c.Component);t["default"]=(0,d.connect)(a)(x)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=e(r),s=n(36),u=n(38),a=e(u),i=n(37),l=e(i);t["default"]=(0,s.createDevTools)(o["default"].createElement(l["default"],{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},o["default"].createElement(a["default"],null)))}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";e.exports=n(14)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=e(a),l=n(10),c=e(l),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return s(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("div",{className:"boilerplate-root"},i["default"].createElement(c["default"],null))}}]),t}(a.Component);f.PropTypes={},t["default"]=f}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=e(r),s={init:function(){var e=window.dnn.initUsers();o["default"].init(e),n(27)},dispatch:function(){throw new Error("dispatch method needs to be overwritten from the Redux store")}};t["default"]=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),o=e(r),s={get:function(e){var t="Users";return o["default"].getResx(t,e)}};t["default"]=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(5),r=n(9),o=(0,e.combineReducers)({users:(0,r.users)()});t["default"]=o}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=(0,o.createStore)(c["default"],e,(0,o.compose)((0,o.applyMiddleware)(u["default"],(0,i["default"])()),d["default"].instrument()));return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(5),s=n(40),u=e(s),a=n(39),i=e(a),l=n(17),c=e(l),f=n(12),d=e(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={init:function(e){e||(this.applicationSettings={}),this.applicationSettings=e},applicationSettings:null};t["default"]=e}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=e({},window.dnn.utility);t["default"]=n}).call(this)}finally{}},[41,22],function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={RETRIEVED_USERS:"RETRIEVED_USERS",RETRIEVED_USER_DETAILS:"RETRIEVED_USER_DETAILS",CREATE_USER:"CREATE_USER",UPDATE_USER:"UPDATE_USER",DELETE_USER:"DELETE_USER",ERASE_USER:"ERASE_USER",RESTORE_USER:"RESTORE_USER",RETRIEVED_USER_FILTERS:"RETRIEVED_USER_FILTERS",USER_MADE_SUPERUSER:"USER_MADE_SUPERUSER",RETRIEVED_USERS_ROLES:"RETRIEVED_USERS_ROLES",RETRIEVED_SUGGEST_ROLES:"RETRIEVED_SUGGEST_ROLES",SAVE_USER_ROLE:"SAVE_USER_ROLE",REMOVE_USER_ROLE:"REMOVE_USER_ROLE",UPDATE_USER_AUTHORIZE_STATUS:"UPDATE_USER_AUTHORIZE_STATUS"};t["default"]=e}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=new Date(e),r=n.getDate(),o=n.getMonth()+1,s=n.getFullYear(),u=n.getHours(),a=n.getMinutes(),i=n.getSeconds(),l=n.getHours()>=12?"PM":"AM";if(u=u>=12?u-12:u,s<1900)return"-";var c=o+"/"+r+"/"+s;return t===!0&&(c+=" "+u+":"+a+":"+i+" "+l),c}function o(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function s(){var e=arguments[0],t=arguments;return e.replace(/{(\d+)}/gi,function(e,n){var r=parseInt(n)+1;return t[r]})}function u(e,t,n){return n=void 0===n?"asc":n,e=e.sort(function(e,r){return e[t]>r[t]?"asc"===n?1:-1:e[t]<r[t]?"asc"===n?-1:1:0})}function a(e,t){var n=d([],y["default"].getObjectCopy(e)),r=d({},y["default"].getObjectCopy(t));if(n.some(function(e){return e.userId===r.userId})&&(n=n.filter(function(e){return e.userId!==r.userId})),!n.some(function(e){return e.userId===r.userId}))return n=[r].concat(n),n=n.sort(function(e,t){var n=e.createdOnDate,r=t.createdOnDate;return n>r?-1:n<r?1:0})}function i(e,t){var n=d([],y["default"].getObjectCopy(e));return n.some(function(e){return e.userId===t})&&(n=n.filter(function(e){return e.userId!==t})),n}function l(e,t,n,r){var o=d([],y["default"].getObjectCopy(e));return o.some(function(e){return e.userId===t})&&(o=o.filter(function(e){return e.userId===t&&(void 0!==n&&null!==n&&(e.isDeleted=n),void 0!==r&&null!==r&&(e.authorized=r)),!0})),o}function c(e,t){var n=d([],y["default"].getObjectCopy(e));return n.some(function(e){return e.roleId===t})&&(n=n.filter(function(e){return e.roleId!==t})),n}function f(e,t){var n=d([],y["default"].getObjectCopy(e)),r=d({},y["default"].getObjectCopy(t));if(n.some(function(e){return e.roleId===r.roleId})&&(n=n.filter(function(e){return e.roleId!==r.roleId})),!n.some(function(e){return e.roleId===r.roleId}))return n=[r].concat(n),n=n.sort(function(e,t){var n=e.roleId,r=t.roleId;return n<r?-1:n>r?1:0})}Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.formatDate=r,t.validateEmail=o,t.formatString=s,t.sort=u,t.updateUsersList=a,t.removeUser=i,t.updateUser=l,t.removeUserRoleFromList=c,t.updateUserRoleList=f;var p=n(25),y=e(p)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){var n=e;return"[object Array]"===Object.prototype.toString.call(t)&&t.forEach(function(e){var t=!1,r=0;n.forEach(function(n,o){e.condition===n.condition&&(t=!0,r=o)}),t?n[r]=e:n.push(e)}),n}function r(t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o({users:[],totalUsers:0,userFilters:[],userRoles:[],matchedRoles:[],userRolesCount:0,userDetails:{}},t),s=arguments[1],u=e(a,n),i=o({},r);return u.forEach(function(e){if(e.condition===s.type){var t=e.functionToRun(r,s);i=o(i,t)}}),i}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=r;var s=n(21),u=n(23),a=[{condition:s.users.RETRIEVED_USERS,functionToRun:function(e,t){return{users:t.payload.Results,totalUsers:t.payload.TotalResults}}},{condition:s.users.UPDATE_USER,functionToRun:function(e,t){return t.payload.Success?{users:(0,u.updateUsersList)(e.users,t.payload.Results)}:e}},{condition:s.users.CREATE_USER,functionToRun:function(e,t){if(t.payload.Success){var n=o(e.totalUsers);return{users:(0,u.updateUsersList)(e.users,t.payload.Results),totalUsers:n+1}}return e}},{condition:s.users.DELETE_USER,functionToRun:function(e,t){return t.payload.Success?{users:(0,u.updateUser)(e.users,t.payload.userId,!0,null)}:e}},{condition:s.users.RESTORE_USER,functionToRun:function(e,t){return t.payload.Success?{users:(0,u.updateUser)(e.users,t.payload.userId,!1,null)}:e}},{condition:s.users.USER_MADE_SUPERUSER,functionToRun:function(e,t){if(t.payload.Success){var n=o(e.totalUsers);return{users:(0,u.removeUser)(e.users,t.payload.userId),totalUsers:n-1}}return e}},{condition:s.users.ERASE_USER,functionToRun:function(e,t){if(t.payload.Success){var n=o(e.totalUsers);return{users:(0,u.removeUser)(e.users,t.payload.userId),totalUsers:n-1}}return e}},{condition:s.users.RETRIEVED_USER_DETAILS,functionToRun:function(e,t){return{userDetails:t.payload}}},{condition:s.users.RETRIEVED_USERS_ROLES,functionToRun:function(e,t){return{userRoles:t.payload.UserRoles,userRolesCount:t.payload.TotalRecords}}},{condition:s.users.RETRIEVED_SUGGEST_ROLES,functionToRun:function(e,t){return{matchedRoles:t.payload.matchedRoles}}},{condition:s.users.SAVE_USER_ROLE,functionToRun:function(e,t){return{userRoles:(0,u.updateUserRoleList)(e.userRoles,t.payload)}}},{condition:s.users.UPDATE_USER_AUTHORIZE_STATUS,functionToRun:function(e,t){return t.payload.Success?{users:(0,u.updateUser)(e.users,t.payload.userId,null,t.payload.authorized)}:e}},{condition:s.users.REMOVE_USER_ROLE,functionToRun:function(e,t){return t.payload.Success?{userRoles:(0,u.removeUserRoleFromList)(e.userRoles,t.payload.roleId)}:e}}]}).call(this)}finally{}},20,function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]),n(4)(r,{}),r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.id,r,""]]),n(4)(r,{}),r.locals&&(e.exports=r.locals)},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Button},function(e,t){e.exports=dnn.nodeModules.CommonComponents.GridCell},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Pager},function(e,t){e.exports=dnn.nodeModules.CommonComponents.PersonaBarPage},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SocialPanelBody},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SocialPanelHeader},function(e,t){e.exports=dnn.nodeModules.ReactDOM},function(e,t){e.exports=window.dnn.Users.CommonComponents},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevTools},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsDockMonitor},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsLogMonitor},function(e,t){e.exports=window.dnn.nodeModules.ReduxImmutableStateInvariant},function(e,t){e.exports=window.dnn.nodeModules.ReduxThunk},function(e,t,n,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.users=void 0;var o=n(r),s=e(o);t.users=s["default"]}).call(this)}finally{}}]));