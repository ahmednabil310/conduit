(this.webpackJsonpconduit=this.webpackJsonpconduit||[]).push([[0],{39:function(e,t,a){e.exports=a(80)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=(a(44),a(45),a(3)),s=a(4),i=a(6),m=a(5),u=(a(46),a(1)),d=function(){return localStorage.getItem("cool")},h=a(11),p=a(10),f=a(36),E=a(7),b=a.n(E),g=r.a.createContext(),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={login:!1,user:"",authorArticlesAll:[],email:""},e.authorArticles=function(){b.a.get("https://conduit.productionready.io/api/articles?author=lefa").then((function(t){e.setState({authorArticlesAll:t.data.articles})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=d();t&&this.setState({login:!0}),b.a.get("https://conduit.productionready.io/api/user",{headers:{Authorization:"Token ".concat(t)}}).then((function(t){e.setState({user:t.data.user.username}),e.setState({email:t.data.user.email})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:Object(f.a)({},this.state)},this.props.children)}}]),a}(n.Component),N=g.Consumer,y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={login:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){d()&&this.setState({login:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(N,null,(function(t){return!1===e.state.login?r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  justify-content-between"},r.a.createElement("div",{className:"pb-2"},r.a.createElement(u.b,{to:"/",className:"nav-brand"},"conduit")),r.a.createElement("ul",null,r.a.createElement("li",{className:"d-inline pr-3"},r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("li",{className:"d-inline pr-3"},r.a.createElement(u.b,{to:"/login"},"Sign In")),r.a.createElement("li",{className:"d-inline"},r.a.createElement(u.b,{to:"/register"},"Sign Up"))))):!0===e.state.login?r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  justify-content-between align-items-center"},r.a.createElement("div",{className:"pb-2"},r.a.createElement(u.b,{to:"/",className:"nav-brand"},"conduit")),r.a.createElement("ul",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("li",{className:"d-inline pr-3 logged"},"Home")),r.a.createElement(u.b,{to:"/editor"},r.a.createElement("li",{className:"d-inline pr-3 logged"},r.a.createElement(h.a,{icon:p.c}),"New Post")),r.a.createElement(u.b,{to:"/settings"},r.a.createElement("li",{className:"d-inline pr-3 logged"},r.a.createElement(h.a,{icon:p.a}),"Settings")),r.a.createElement("a",{href:"/users/".concat(t.user)},r.a.createElement("li",{className:"d-inline logged"},t.user))))):void 0}))}}]),a}(n.Component),w=a(8),C=a(16),j=a(12),S=(a(69),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",errors:[],isSubmitted:!1},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("https://conduit.productionready.io/api/users/login",{user:{email:this.state.email,password:this.state.password}}).then((function(e){localStorage.setItem("cool",e.data.user.token),window.location="/"})).catch((function(e){t.setState({errors:e.response.data}),t.setState({isSubmitted:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container page mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-xs-12 offset-md-3"},r.a.createElement("h1",{className:"text-center"},"Sign In"),r.a.createElement("p",{className:"text-center pt-1"},r.a.createElement(u.b,{to:"/register"},"Need an account?")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{onChange:this.handleChange,type:"email",required:!0,placeholder:"Email",autoComplete:"on",id:"email",name:"email",className:" form-control form-control-lg"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{name:"password",type:"password",required:!0,placeholder:"Password",id:"password",onChange:this.handleChange,className:"form-control form-control-lg"})),this.state.isSubmitted&&this.state.errors.errors?r.a.createElement("p",{className:"text-center form-error"},"Email or password\n                     ".concat(Object.values(this.state.errors.errors)[0][0])):"",r.a.createElement("button",{type:"submit"},"Sign In"))))))}}]),a}(n.Component)),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",errors:[],isSubmitted:!1},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("https://conduit.productionready.io/api/users",{user:{username:this.state.username,email:this.state.email,password:this.state.password}}).then((function(e){localStorage.setItem("cool",e.data.user.token),window.location="/"})).catch((function(e){t.setState({errors:e.response.data}),t.setState({isSubmitted:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container page mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-xs-12 offset-md-3"},r.a.createElement("h1",{className:"text-center"},"Sign Up"),r.a.createElement("p",{className:"text-center pt-1"},r.a.createElement(u.b,{to:"/login"},"Have an account?")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{onChange:this.handleChange,name:"username",type:"text",required:!0,placeholder:"Username",id:"username",className:" form-control form-control-lg"}),this.state.isSubmitted&&this.state.errors.errors.username?r.a.createElement("p",{className:"text-center form-error"},"Username ",this.state.errors.errors.username):""),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{onChange:this.handleChange,name:"email",type:"email",required:!0,placeholder:"Email",autoComplete:"on",id:"email",className:"form-control form-control-lg"}),this.state.isSubmitted&&this.state.errors.errors.email?r.a.createElement("p",{className:"text-center form-error"},"Email ",this.state.errors.errors.email):""),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",required:!0,placeholder:"Password",id:"password",className:"form-control form-control-lg"}),this.state.isSubmitted&&this.state.errors.errors.password?r.a.createElement("p",{className:"text-center form-error"},"Password ",this.state.errors.errors.password):""),r.a.createElement("button",{type:"submit"},"Sign Up"))))))}}]),a}(n.Component),k=(a(70),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,(function(e){if(!1===e.login)return r.a.createElement("div",{className:"container-fluid header d-flex justify-content-center align-items-center py-3 mb-3"},r.a.createElement("header",null,r.a.createElement("h1",{className:"text-center pt-3"},"conduit"),r.a.createElement("p",null,"A place to share your knowledge.")))}))}}]),a}(n.Component)),x=(a(71),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={button:!1,value:e.props.data.favoritesCount,check:!1},e.handleClick=function(t){var a=d();!1===e.state.check&&(e.setState({button:!e.state.button}),e.setState((function(e){return{value:e.value+1}})),e.setState({check:!0})),b.a.post("https://conduit.productionready.io/api/articles/".concat(e.props.data.slug,"/favorite"),{},{headers:{Authorization:"Token ".concat(a)}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.author,n=t.title,c=t.description,o=t.createdAt,l=t.slug,s=this.state.button?"clicked btn btn-sm btn-outline-primary":"btn btn-sm btn-outline-primary",i=new Date(o).toLocaleDateString("en-US");return r.a.createElement(N,null,(function(t){return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post-meta"},r.a.createElement(u.b,{to:"/users/".concat(a.username),className:"img"},r.a.createElement("img",{src:a.image,alt:"#"})),r.a.createElement("div",{className:"info"},r.a.createElement(u.b,{to:"/users/".concat(a.username)},a.username),r.a.createElement("p",{className:"date"},i)),r.a.createElement("div",{className:"button-react float-right"},t.login?r.a.createElement("button",{className:s,onClick:e.handleClick},r.a.createElement(h.a,{icon:p.b}),e.state.value):r.a.createElement("button",{className:s},r.a.createElement(h.a,{icon:p.b}),e.state.value))),r.a.createElement("div",{className:"post-body"},r.a.createElement(u.b,{to:"/article/".concat(l)},r.a.createElement("h1",{className:"pb-1"},n),r.a.createElement("p",null,c),r.a.createElement("span",null,"Read more..."))),r.a.createElement("hr",null))}))}}]),a}(n.Component)),A=(a(72),a(73),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"pt-5 feed-toggle nav-item"},r.a.createElement(u.b,{className:this.props.class,to:this.props.href},this.props.title))}}]),a}(n.Component)),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={articles:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://conduit.productionready.io/api/articles").then((function(t){e.setState({articles:t.data.articles})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.articles.map((function(e){return r.a.createElement(x,{key:Math.random(),data:e})}));return r.a.createElement("div",{className:"container pt-3 pl-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(A,{href:"",class:"active",title:"Global Feed"}),r.a.createElement("hr",null),r.a.createElement("div",null,e))))}}]),a}(n.Component),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(k,null),r.a.createElement(D,null))}}]),a}(n.Component),T=(a(74),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],favorites:[],follow:!1,email:""},e.handleFavorite=function(){b.a.get("https://conduit.productionready.io/api/articles?favorited=".concat(e.props.match.params.username)).then((function(t){e.setState({favorites:t.data.articles})})).catch((function(e){return console.log(e)}))},e.handleFollow=function(){var t=d();!1===e.state.follow?b.a.post("https://conduit.productionready.io/api/profiles/".concat(e.props.match.params.username,"/follow"),{user:{email:"".concat(e.state.email)}},{headers:{Authorization:"Token ".concat(t)}}).then((function(t){e.setState({follow:!e.state.follow})})).catch((function(e){return console.log(e)})):b.a.delete("https://conduit.productionready.io/api/profiles/".concat(e.props.match.params.username,"/follow"),{headers:{Authorization:"Token ".concat(t)}}).then((function(t){e.setState({follow:!1})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=d();b.a.get("https://conduit.productionready.io/api/articles?author=".concat(this.props.match.params.username)).then((function(t){e.setState({data:t.data.articles})})),b.a.get("https://conduit.productionready.io/api/user",{headers:{Authorization:"Token ".concat(t)}}).then((function(t){e.setState({email:t.data.user.email})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,a=this.state.data.map((function(e){return r.a.createElement(x,{data:e,key:Math.random()})})),n=this.state.favorites.map((function(e){return r.a.createElement(x,{data:e,key:Math.random()})}));return r.a.createElement(N,null,(function(c){return e.state.data.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid author"},r.a.createElement("div",{className:"container author-details text-center py-5 mb-5"},r.a.createElement("img",{src:e.state.data[0].author.image,height:"50px",alt:""}),r.a.createElement("h2",{className:"pt-2"},e.state.data[0].author.username),c.user===e.state.data[0].author.username?r.a.createElement(u.b,{to:"/settings"},r.a.createElement("button",{className:"float-right btn btn-sm btn-outline-secondary"},r.a.createElement(h.a,{icon:p.a}),"Edit Profile Settings")):r.a.createElement("div",null,e.state.follow?r.a.createElement("button",{className:"float-right btn btn-sm btn-outline-secondary",onClick:e.handleFollow},r.a.createElement(h.a,{icon:p.d}),"Unfollow ".concat(e.props.match.params.username)):r.a.createElement("button",{className:"float-right btn btn-sm btn-outline-secondary",onClick:e.handleFollow},r.a.createElement(h.a,{icon:p.d}),"Follow ".concat(e.props.match.params.username))))),r.a.createElement("div",{className:"container"},t==="/users/".concat(e.props.match.params.username,"/favorites")?r.a.createElement("ul",null,r.a.createElement(A,{class:"not-active",href:"/users/".concat(e.props.match.params.username),title:"My Articles"}),r.a.createElement("li",{className:"pl-3",onClick:e.handleFavorite},r.a.createElement(A,{class:"active",href:"/users/".concat(e.props.match.params.username,"/favorites"),title:"Favorited Articles"}))):r.a.createElement("ul",null,r.a.createElement(A,{class:"active",href:"/users/".concat(e.props.match.params.username),title:"My Articles"}),r.a.createElement("li",{className:"pl-3",onClick:e.handleFavorite},r.a.createElement(A,{class:"not-active",href:"/users/".concat(e.props.match.params.username,"/favorites"),title:"Favorited Articles"}))),r.a.createElement("hr",null),t==="/users/".concat(e.props.match.params.username,"/favorites")?r.a.createElement("div",null,n):r.a.createElement("div",null,a))):r.a.createElement("div",{className:"text-center"},"Loading...")}))}}]),a}(n.Component)),z=a(38),U=(a(75),a(76),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleDleteComment=function(){var t=d();b.a.delete("https://conduit.productionready.io/api/articles/".concat(e.props.slug,"/comments/").concat(e.props.data.id),{headers:{Authorization:"Token ".concat(t)}}).then((function(e){window.location.reload(!1)})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=new Date(this.props.data.createdAt).toLocaleDateString("en-US");return r.a.createElement("div",{className:"container h-100 col-sm-5 mb-3"},r.a.createElement("div",{className:"card h-100 "},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},this.props.data.body)),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between px-3 py-3 comment"},r.a.createElement("div",null,r.a.createElement(u.b,{to:"/users/".concat(this.props.data.author.username),className:"img "},r.a.createElement("img",{src:this.props.data.author.image,alt:"",height:"20px",width:"20px",className:"special mr-1"})),r.a.createElement(u.b,{to:"/users/".concat(this.props.data.author.username),className:"mr-1"},this.props.data.author.username),r.a.createElement("span",{className:"date"},e)),r.a.createElement("div",null,r.a.createElement("span",{onClick:this.handleDleteComment},r.a.createElement(h.a,{icon:p.e}))))))}}]),a}(n.Component)),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={article:[],loaded:!1,body:"",authorComment:[]},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.handleComment=function(t){var a=d();t.preventDefault(),b.a.post("https://conduit.productionready.io/api/articles/".concat(e.state.article.slug,"/comments"),{comment:{body:e.state.body}},{headers:{Authorization:"Token ".concat(a)}}).then((function(t){e.setState({authorComment:[t.data.comment].concat(Object(z.a)(e.state.authorComment))}),e.setState({body:""})})).catch((function(e){return console.log(e)}))},e.handleDelete=function(){var t=d();b.a.delete("https://conduit.productionready.io/api/articles/".concat(e.props.match.params.articlename),{headers:{Authorization:"Token ".concat(t)}}).then((function(e){return window.location="/"})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=d();b.a.get("https://conduit.productionready.io/api/articles/".concat(this.props.match.params.articlename)).then((function(t){e.setState({article:t.data.article}),e.setState({loaded:!0})})),b.a.get("https://conduit.productionready.io/api/articles/".concat(this.props.match.params.articlename,"/comments"),{headers:{Authorization:"Token ".concat(t)}}).then((function(t){e.setState({authorComment:t.data.comments}),console.log(t.data.comments)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.authorComment.map((function(t){return r.a.createElement(U,{key:Math.random(),data:t,slug:e.state.article.slug})})),a=new Date(this.state.article.createdAt).toLocaleDateString("en-US");return r.a.createElement(N,null,(function(n){return!0===e.state.loaded&&!1===n.login?r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid article post py-5"},r.a.createElement("div",{className:"post-meta container"},r.a.createElement("div",{className:"title pb-3"},r.a.createElement("h1",null,e.state.article.title)),r.a.createElement(u.b,{to:"/users/".concat(e.state.article.author.username),className:"img"},r.a.createElement("img",{src:e.state.article.author.image,alt:"#"})),r.a.createElement("div",{className:"info"},r.a.createElement(u.b,{to:"/users/".concat(e.state.article.author.username)},e.state.article.author.username),r.a.createElement("p",{className:"date"},a)))),r.a.createElement("div",{className:"container body pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 body-info"},e.state.article.body))),r.a.createElement("div",{className:"container"},r.a.createElement("hr",null)),r.a.createElement("p",{className:"text-center pt-3 links"},r.a.createElement(u.b,{to:"/login",className:"pr-1"},"Sign in"),"or ",r.a.createElement(u.b,{to:"/register"},"sign up")," to add comments on this article")):!0===e.state.loaded&&!0===n.login?r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid article post py-5"},r.a.createElement("div",{className:"post-meta container"},r.a.createElement("div",{className:"title pb-3"},r.a.createElement("h1",null,e.state.article.title)),r.a.createElement(u.b,{to:"/users/".concat(e.state.article.author.username),className:"img"},r.a.createElement("img",{src:e.state.article.author.image,alt:"#"})),r.a.createElement("div",{className:"info"},r.a.createElement(u.b,{to:"/users/".concat(e.state.article.author.username)},e.state.article.author.username),r.a.createElement("p",{className:"date"},a)),n.user===e.state.article.author.username?r.a.createElement("div",{className:"buttons"},r.a.createElement(u.b,{to:"/editor"},r.a.createElement("button",{className:" btn btn-sm btn-outline-secondary edit"},r.a.createElement(h.a,{icon:p.c}),"Edit Article")),r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary ml-2 delete",onClick:e.handleDelete},r.a.createElement(h.a,{icon:p.e}),"Delete Article")):"")),r.a.createElement("div",{className:"container body pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 body-info"},e.state.article.body))),r.a.createElement("div",{className:"container"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6 col-xs-12 "},r.a.createElement("form",{className:" comment-form justify-content-center",onSubmit:e.handleComment},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("textarea",{className:"form-control form-control-lg ",placeholder:"Write a comment...",onChange:e.handleChange,name:"body",rows:"3"})),r.a.createElement("div",{className:"card-footerr"},r.a.createElement("button",{className:"btn btn-sm btn-primary float-right spec mb-2",type:"submit"},"Post Comment"))))),t):void 0}))}}]),a}(n.Component),q=(a(77),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={articletitle:"",articleabout:"",formbody:"",tags:[]},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=d();b.a.post("https://conduit.productionready.io/api/articles",{article:{title:this.state.articletitle,description:this.state.articleabout,body:this.state.formbody}},{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"Token ".concat(t)}}).then((function(e){window.location="/article/".concat(e.data.article.slug)})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(N,null,(function(t){if(!0===t.login)return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-xs-12 offset-md-1"},r.a.createElement("form",{className:"pt-3 editor",onSubmit:e.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg ",placeholder:"Article Title",onChange:e.handleChange,name:"articletitle"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg ",placeholder:"What's this article about?",name:"articleabout",onChange:e.handleChange})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("textarea",{className:"form-control form-control-lg col-12",placeholder:"Write your article (in markdown)",onChange:e.handleChange,name:"formbody",rows:"8"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg ",placeholder:"Enter tags",onChange:e.handleChange,name:"tags"}),r.a.createElement("div",{className:"tag-list"})),r.a.createElement("button",{className:"btn btn-lg pull-xs-right btn-primary float-right",type:"submit"},"Publish Article"))))))}))}}]),a}(n.Component)),L=(a(78),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLogOut=function(){localStorage.removeItem("cool"),window.location="/"},n.state={url:"",username:"",bio:"",email:"",password:""},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=d();b.a.put("https://conduit.productionready.io/api/user",{user:{image:this.state.url,username:this.state.username,bio:this.state.bio,email:this.state.email,password:this.state.password}},{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"Token ".concat(t)}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(N,null,(function(t){if(!0===t.login)return r.a.createElement("div",{className:"settings-page"},r.a.createElement("div",{className:"container settings-page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-xs-12 offset-md-1"},r.a.createElement("h1",{className:"text-center"},"Your Settings"),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"URL of profile picture",onChange:e.handleChange,name:"url"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",value:t.user,onChange:e.handleChange,name:"username"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("textarea",{className:"form-control form-control-lg col-12",placeholder:"Short bio about you",onChange:e.handleChange,name:"bio",rows:"8"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",value:t.email,onChange:e.handleChange,name:"email"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:"New Password",onChange:e.handleChange,name:"password"})),r.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right float-right",type:"submit",id:"specialbutton"},"Update Settings"))),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:e.handleLogOut},"Or click here to logout.")))))}))}}]),a}(n.Component));var P=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(w.a,{exact:!0,path:"/",component:M}),r.a.createElement(w.a,{path:"/login",component:S}),r.a.createElement(w.a,{path:"/register",component:O}),r.a.createElement(w.a,{path:"/users/:username",component:T}),r.a.createElement(w.a,{path:"/article/:articlename",component:F}),r.a.createElement(w.a,{path:"/editor",component:q}),r.a.createElement(w.a,{path:"/settings",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.999b1311.chunk.js.map