(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,n){e.exports=n(370)},370:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),i=n.n(r),o=n(5),s=n(17),c=n(18),u=n(20),h=n(19),d=n(21),p=n(15),m=n(45),b=n.n(m),g=n(134),v=n(35),f=n.n(v),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){return function(t){n.setState(Object(g.a)({},e,t.target.value))}},n.state={multiline:"Controlled"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement(f.a,{id:"standard-textarea",label:"text",value:this.props.text,multiline:!0,className:t.textField,margin:"normal",onChange:function(t){return e.props.onChange(t)}})}}]),t}(l.a.Component),E=Object(o.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:500},dense:{marginTop:19},menu:{width:200}}})(y),O=n(26),j=n.n(O),A=n(136),C=n.n(A);var S=Object(o.withStyles)(function(e){return{icon:{}}})(function(e){var t=e.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{"aria-label":"Delete",className:t.icon,onClick:e.onClick},l.a.createElement(C.a,{fontSize:"default"})))}),k=n(46),T=n.n(k),x=n(43),w=n.n(x),D=n(57),N=n.n(D),R=n(44),H=n.n(R),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.props.onChange(e.target.value)},n.state={type:n.props.type},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"selectInput"},l.a.createElement(w.a,{style:{fontSize:12}},this.props.label),l.a.createElement(H.a,{value:this.props.type,onChange:this.handleChange},this.props.options.map(function(t,n){return l.a.createElement(N.a,{key:n,value:e.props.options[n].value},e.props.options[n].label)})))}}]),t}(l.a.Component),L=Object(o.withStyles)(function(e){return{selectInput:{width:30,padding:10}}})(I),B=n(137),P=n.n(B);var M=Object(o.withStyles)(function(e){return{icon:{}}})(function(e){var t=e.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{"aria-label":"More",className:t.icon,onClick:e.onClick},l.a.createElement(P.a,null)))}),z=n(65),U=n.n(z);var F=Object(o.withStyles)(function(e){return{icon:{}}})(function(e){var t=e.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{"aria-label":"Add",className:t.icon,onClick:e.onAdd},l.a.createElement(U.a,{fontSize:"default"})))}),W=n(36),G=n.n(W),J=n(58),q=n.n(J),Q=n(62),V=n.n(Q),K=n(60),X=n.n(K),Y=n(61),Z=n.n(Y),$=n(59),_=n.n($),ee=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={open:!1,text:n.props.text},n.handleSetAttributes=n.handleSetAttributes.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open,text:e.text})}},{key:"handleSetAttributes",value:function(){this.props.onSetAttributes(this.state.text),this.props.toggleDialog()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(q.a,{open:this.state.open,onClose:this.props.toggleDialog,"aria-labelledby":"form-dialog-title",maxWidth:"md",fullWidth:!0},l.a.createElement(_.a,{id:"form-dialog-title"},"Add Attributes"),l.a.createElement(X.a,null,l.a.createElement(Z.a,null,"Set attributes for your ",l.a.createElement("b",null,this.props.type)," tag here ",l.a.createElement("br",null),l.a.createElement("i",{style:{fontSize:13}},'Example: id="image1" src="images/kitten.jpg"')),l.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"name",label:"Attributes",type:"text",fullWidth:!0,value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})}})),l.a.createElement(V.a,null,l.a.createElement(G.a,{onClick:this.props.toggleDialog,color:"primary"},"Cancel"),l.a.createElement(G.a,{onClick:this.handleSetAttributes,color:"primary"},"Confirm"))))}}]),t}(l.a.Component),te=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleAdd=function(){n.props.onAdd(n.props.element.getDepth()+1,{parent:n.props.element})},n.handleDelete=function(){n.props.onDelete(n.state.index,{parent:n.props.element.getParent()})},n.handleSetType=function(e){n.props.onTypeSelect(e,n.state.index,{parent:n.props.element.getParent()})},n.handleSetAttributes=function(e){n.props.onSetAttributes(e,n.state.index,{parent:n.props.element.getParent()})},n.state={dialogOpen:!1,index:n.props.index},n.handleTextChange=n.handleTextChange.bind(Object(p.a)(Object(p.a)(n))),n.toggleDialog=n.toggleDialog.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleTextChange",value:function(e){this.props.onChange(e,this.state.index,{parent:this.props.element.getParent()})}},{key:"toggleDialog",value:function(){this.setState(function(e){return{dialogOpen:!e.dialogOpen}}),console.log(this.state.dialogOpen)}},{key:"render",value:function(){return l.a.createElement(T.a,{style:{padding:2,paddingLeft:25*(this.props.element.getDepth()-1)},disableGutters:!0},l.a.createElement(L,{type:this.props.element.getType(),onChange:this.handleSetType,label:"Block Type",options:[{label:"Header (1)",value:"h1"},{label:"Header (2)",value:"h2"},{label:"Header (3)",value:"h3"},{label:"Paragraph",value:"p"},{label:"Emphasis",value:"em"},{label:"Strong",value:"strong"},{label:"Quotation",value:"q"},{label:"Div",value:"div"},{label:"Pre",value:"pre"},{label:"Unordered List",value:"ul"},{label:"Ordered List",value:"ol"},{label:"List Element",value:"li"},{label:"Table",value:"table"},{label:"Table Row",value:"tr"},{label:"Table Head",value:"th"},{label:"Table Data",value:"td"},{label:"Form",value:"form"},{label:"Input",value:"input"},{label:"Text Area",value:"textarea"},{label:"Select",value:"select"},{label:"Option",value:"option"},{label:"Button",value:"button"},{label:"Attribute",value:"a"},{label:"Image",value:"img"},{label:"Script",value:"script"},{label:l.a.createElement("i",null,"Insert Custom"),value:"custom"}]}),l.a.createElement(E,{text:this.props.element.getContent(),onChange:this.handleTextChange}),l.a.createElement(F,{onAdd:this.handleAdd}),l.a.createElement(S,{onClick:this.handleDelete}),l.a.createElement(M,{onClick:this.toggleDialog}),l.a.createElement(ee,{type:this.props.element.getType(),onSetAttributes:this.handleSetAttributes,text:this.props.element.getAttributes(),open:this.state.dialogOpen,toggleDialog:this.toggleDialog}))}}]),t}(l.a.Component),ne=n(63),ae=n.n(ne);var le=Object(o.withStyles)(function(e){return{fab:{position:"fixed",right:2*e.spacing.unit,bottom:2*e.spacing.unit,margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var t=e.classes;return l.a.createElement(ae.a,{color:"secondary","aria-label":"Add",className:t.fab,onClick:function(){return e.onClick(1)}},l.a.createElement(U.a,null))}),re=n(352),ie=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleAddElement=function(e,t){n.props.handleAddElement(e,t)},n.handleRemoveElement=function(e,t){n.props.handleRemoveElement(e,t)},n.handleChangeElement=function(e,t,a){n.props.handleChangeElement(e,t,a)},n.handleSetType=function(e,t,a){n.props.handleSetType(e,t,a)},n.handleSetAttributes=function(e,t,a){n.props.handleSetAttributes(e,t,a)},n.state={elementArray:n.props.elementArray},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.root},l.a.createElement(b.a,{component:"list",className:e.list,style:{maxHeight:"100%",overflow:"auto"}},this.renderTree(this.props.elementArray),l.a.createElement(le,{onClick:this.handleAddElement})))}},{key:"renderTree",value:function(e){var t=this;return e.map(function(n,a){return l.a.createElement("div",{key:re()},l.a.createElement(te,{key:a+" "+e[a].getDepth(),index:a,element:e[a],onAdd:t.handleAddElement,onDelete:t.handleRemoveElement,onChange:t.handleChangeElement,onTypeSelect:t.handleSetType,onSetAttributes:t.handleSetAttributes}),t.renderTree(e[a].getChildren()))})}}]),t}(l.a.Component),oe=Object(o.withStyles)(function(e){return{list:{overflow:"auto",backgroundColor:"transparent",paddingBottom:60,marginBottom:60}}})(ie),se=["div"];function ce(e){if(0===e.length)return"";var t=e.map(function(t,n){return 0===e[n].getChildren().length?function(e){var t;t=e.getContent().includes("\n")?function(e){return"\n\t"+ue(e).split("\n").join("\n\t")+"\n"}(e):ue(e);return he("\n"+e.getOpeningTag()+t+e.getClosingTag())}(e[n]):function(e){var t;t=e.getContent().includes("\n")?""===ue(e)?"":"\t"+ue(e).split("\n").join("\n\t")+"\n":""===ue(e)?"":"\t"+ue(e)+"\n";return he("\n"+e.getOpeningTag()+"\n"+t+ce(e.getChildren()).toString().split(",\n").join("\n")+"\n"+e.getClosingTag())}(e[n])});return t[0]=t[0].substr(1),t}function ue(e){for(var t=0;t<se.length;t++)if(e.getType()===se[t])return"";return e.getContent()}function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="\t".repeat(t);return e.split("\n").join("\n"+n)}var de=ce,pe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,'<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="utf-8">\n\t<title>TextToHTML</title>\n\t<meta name="description" content="Description placeholder">\n\t<meta name="author" content="TextToHTML">\n\t<link rel="stylesheet" href="css/styles.css?v=1.0">\n</head>\n<body>',l.a.createElement("div",{className:e.userInput},de(this.props.elementArray)),"</body>\n</html>")}}]),t}(l.a.Component),me=Object(o.withStyles)(function(e){return{userInput:{background:"#eeeeee"}}})(pe),be=n(138),ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toHtml",value:function(e,t,n){var a=document.createElement(t);a.innerHTML=e,document.body.insertBefore(a,n),console.log(a)}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(be.a,{className:e.output},l.a.createElement("pre",null,l.a.createElement("h2",{className:e.header},"Output:"),l.a.createElement("hr",{className:e.hr}),l.a.createElement("div",{className:e.code},l.a.createElement(me,{elementArray:this.props.elementArray})))))}}]),t}(l.a.Component),ve=Object(o.withStyles)(function(e){return{output:{padding:"5%",paddingTop:"1.5%"},header:{marginBottom:4},hr:{marginBottom:12},code:{color:"#333333",fontSize:14,lineHeight:1.2,tabSize:3},userInput:{background:"#eeeeee"}}})(ge),fe=n(64),ye=n.n(fe),Ee=n(34),Oe=n.n(Ee);var je=Object(o.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menubar:{paddingTop:13,paddingBottom:13,paddingLeft:20}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(ye.a,{className:t.menubar,position:"static"},l.a.createElement(Oe.a,{variant:"h6",color:"inherit",className:t.grow},"Text to HTML")))}),Ae=function(){function e(t,n){Object(s.a)(this,e),this.depth=t,this.type="p",this.content="",this.children=new Array(0),this.parent=n,this.attributes=""}return Object(c.a)(e,[{key:"setDepth",value:function(e){this.depth=e}},{key:"setType",value:function(e){this.type=e}},{key:"setContent",value:function(e){this.content=e}},{key:"setAttributes",value:function(e){this.attributes=e}},{key:"addChild",value:function(){this.children.push(new e(this.depth+1,this))}},{key:"removeChild",value:function(e){this.children.splice(e,1)}},{key:"getParent",value:function(){return this.parent}},{key:"getType",value:function(){return this.type}},{key:"getContent",value:function(){return this.content}},{key:"getChildren",value:function(){return this.children}},{key:"getChild",value:function(e){return this.children[e]}},{key:"getDepth",value:function(){return this.depth}},{key:"getOpeningTag",value:function(){return"custom"===this.type?"":"<"+this.type+(""===this.attributes?"":" "+this.attributes)+">"}},{key:"getClosingTag",value:function(){return"custom"===this.type?"":"</"+this.type+">"}},{key:"getAttributes",value:function(){return this.attributes}}]),e}(),Ce=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={open:!0,elementArray:[new Ae(1)]},n.handleAddElement=n.handleAddElement.bind(Object(p.a)(Object(p.a)(n))),n.handleRemoveElement=n.handleRemoveElement.bind(Object(p.a)(Object(p.a)(n))),n.handleChangeElement=n.handleChangeElement.bind(Object(p.a)(Object(p.a)(n))),n.handleSetType=n.handleSetType.bind(Object(p.a)(Object(p.a)(n))),n.handleSetAttributes=n.handleSetAttributes.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAddElement",value:function(e,t){if(void 0!==t)return t.parent.addChild(),void this.forceUpdate();this.setState(function(t){return{elementArray:t.elementArray.concat(new Ae(e))}})}},{key:"handleRemoveElement",value:function(e,t){if(void 0!==t.parent)return t.parent.removeChild(e),void this.forceUpdate();this.setState(function(t){return{elementArray:t.elementArray.slice(0,e).concat(t.elementArray.slice(e+1))}})}},{key:"handleChangeElement",value:function(e,t,n){if(void 0!==n&&void 0!==n.parent)return n.parent.getChild(t).setContent(e.target.value),void this.forceUpdate();var a=Object.assign({},this.state);a.elementArray=a.elementArray.slice(),Object.assign({},a.elementArray[t]),a.elementArray[t].setContent(e.target.value),this.setState(a)}},{key:"handleSetType",value:function(e,t,n){if(void 0!==n&&void 0!==n.parent)return n.parent.getChild(t).setType(e),void this.forceUpdate();var a=Object.assign({},this.state);a.elementArray=a.elementArray.slice(),Object.assign({},a.elementArray[t]),a.elementArray[t].setType(e),this.setState(a)}},{key:"handleSetAttributes",value:function(e,t,n){if(void 0!==n&&void 0!==n.parent)return n.parent.getChild(t).setAttributes(e),void this.forceUpdate();var a=Object.assign({},this.state);a.elementArray=a.elementArray.slice(),Object.assign({},a.elementArray[t]),a.elementArray[t].setAttributes(e),this.setState(a)}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:"container"},l.a.createElement(je,null),l.a.createElement("div",{className:e.output},l.a.createElement(ve,{elementArray:this.state.elementArray})),l.a.createElement("div",{className:e.input},l.a.createElement(oe,{elementArray:this.state.elementArray,handleAddElement:this.handleAddElement,handleChangeElement:this.handleChangeElement,handleRemoveElement:this.handleRemoveElement,handleSetType:this.handleSetType,handleSetAttributes:this.handleSetAttributes})))}}]),t}(l.a.Component),Se=Object(o.withStyles)(function(e){return{container:{height:"100%",width:"100%",overflow:"hidden"},input:{overflow:"auto",position:"fixed",right:"0%",height:"87%",width:"46%",marginTop:"2%"},output:{height:"78%",overflow:"auto",position:"fixed",left:0,width:"49%",marginTop:"2%",padding:"2%"}}})(Ce),ke=n(47),Te=Object(o.createMuiTheme)({palette:{primary:ke.blue,secondary:ke.blue},typography:{useNextVariants:!0}});var xe=function(){return l.a.createElement(o.MuiThemeProvider,{theme:Te},l.a.createElement(Se,null))};i.a.render(l.a.createElement(xe,null),document.getElementById("root"))}},[[209,2,1]]]);
//# sourceMappingURL=main.64dcbb6d.chunk.js.map