(this["webpackJsonpbazzon-app"]=this["webpackJsonpbazzon-app"]||[]).push([[25],{102:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(528),r=s(526),i=s(247),l=s(529),c=s(20);s(158);t.default=function(e){return a.a.createElement(o.a,{basic:!0,className:"PopupCategoriesContainer",size:"huge",trigger:e.children,flowing:!0,hoverable:!0,hideOnScroll:!0,Invert:!0,offset:"30vh"},a.a.createElement(r.a,null,a.a.createElement(i.a,{centered:!0,divided:!0,columns:e.navbarSubItems.length,className:"PopupCategoriesContainerChlidren"},e.navbarSubItems.map((function(e){return a.a.createElement(i.a.Column,{key:e.title,textAlign:"center"},a.a.createElement("div",{className:"SubItemsWraper"},a.a.createElement(l.a,{className:"SubItemsHeader",as:"h4"},e.title),e.subItems&&e.nested&&e.subItems.map((function(e){return a.a.createElement(a.a.Fragment,{key:e.title},a.a.createElement(c.b,{className:"LinkContant",to:e.linkTo},e.title))})),a.a.createElement(c.b,{className:"LinkContant",to:e.linkTo},"All ",e.title,"s")))})))))}},106:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=(s(229),s(249)),r=s(248),i=s(246);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{active:!0,inverted:!0},a.a.createElement(i.a,{size:"medium"},"Loading")),a.a.createElement("div",{className:"TemplateLoading"}))}},158:function(e,t,s){},199:function(e,t,s){},200:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=(s(199),s(249)),r=s(248),i=s(246);t.default=function(){return a.a.createElement(o.a,{className:"LoadingPage"},a.a.createElement(r.a,{active:!0,inverted:!0},a.a.createElement(i.a,{size:"large"},"Loading")))}},228:function(e,t,s){"use strict";var n=s(142),a=s.n(n),o=s(35),r=s(25),i=s(26),l=s(28),c=s(27),m=s(29),p=s(0),d=s.n(p),u=s(106),h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,m=new Array(i),p=0;p<i;p++)m[p]=arguments[p];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(m)))).state={DynamicComponent:null,isComponent:!0},n.TemplateNotFound=function(){return d.a.createElement("div",{style:{height:70,background:"red",margin:20}},n.props.template," Template Not Found!")},n.handleOnClick=function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(s(523)("./".concat(n.props.template,"/").concat(n.props.template)));case 3:e=t.sent,n.setState({DynamicComponent:e.default,isComponent:!0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n.setState(Object(o.a)({},n.state,{isComponent:!1}));case 10:case"end":return t.stop()}}),null,null,[[0,7]])},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleOnClick()}},{key:"render",value:function(){var e=this.state.DynamicComponent;return this.state.isComponent?e?d.a.createElement(e,null):d.a.createElement(u.default,null):this.TemplateNotFound()}}]),t}(d.a.Component);t.a=h},229:function(e,t,s){},294:function(e,t,s){e.exports=s(525)},299:function(e,t,s){},300:function(e,t,s){},444:function(e,t,s){},449:function(e,t,s){},501:function(e,t,s){},523:function(e,t,s){var n={"./CollapsibleSection/CollapsibleSection":[273,9,13],"./CollapsibleSection/CollapsibleSection.css":[533,7,31],"./CollapsibleSection/CollapsibleSection.jsx":[273,9,13],"./Components/Cards/HorizontalCard/HorizontalCard":[253,9,11],"./Components/Cards/HorizontalCard/HorizontalCard.css":[530,7,32],"./Components/Cards/HorizontalCard/HorizontalCard.jsx":[253,9,11],"./Components/Cards/RadiusCircleCard/RadiusCircleCard":[274,9,14],"./Components/Cards/RadiusCircleCard/RadiusCircleCard.css":[534,7,33],"./Components/Cards/RadiusCircleCard/RadiusCircleCard.jsx":[274,9,14],"./Components/Cards/SimpleCard/SimpleCard":[258,9,19],"./Components/Cards/SimpleCard/SimpleCard.jsx":[258,9,19],"./Components/Cards/SimpleCard/SimpleCard.less":[542,7,38],"./Components/Cards/SimpleCardNoShadow/SimpleCardNoShadow":[257,9,18],"./Components/Cards/SimpleCardNoShadow/SimpleCardNoShadow.css":[543,7,34],"./Components/Cards/SimpleCardNoShadow/SimpleCardNoShadow.jsx":[257,9,18],"./Components/Carousel/Carousel":[275,9,20],"./Components/Carousel/Carousel.css":[544,7,35],"./Components/Carousel/Carousel.jsx":[275,9,20],"./Components/GoogleSpinner/GoogleSpinner":[97,9],"./Components/GoogleSpinner/GoogleSpinner.jsx":[97,9],"./Components/GoogleSpinner/GoogleSpinner.less":[200,7],"./Components/Inputs/Dropdown/Dropdown":[276,9,0,21],"./Components/Inputs/Dropdown/Dropdown.jsx":[276,9,0,21],"./Components/Inputs/InputField/InputField":[277,9,0,22],"./Components/Inputs/InputField/InputField.jsx":[277,9,0,22],"./Components/LoadingPage/LoadingPage":[21,9],"./Components/LoadingPage/LoadingPage.css":[199,7],"./Components/LoadingPage/LoadingPage.jsx":[21,9],"./Components/Pagination/Pagination":[254,9,7],"./Components/Pagination/Pagination.jsx":[254,9,7],"./Components/QuillTextEditor/QuillTextEditor":[278,9,5,15],"./Components/QuillTextEditor/QuillTextEditor.jsx":[278,9,5,15],"./Components/QuillTextEditor/QuillTextEditor.less":[535,7,39],"./Components/TemplateLoading/TemplateLoading":[106,9],"./Components/TemplateLoading/TemplateLoading.jsx":[106,9],"./Components/TemplateLoading/TemplateLoading.less":[229,7],"./PopupCategoriesContainer/PopupCategoriesContainer":[102,9],"./PopupCategoriesContainer/PopupCategoriesContainer.jsx":[102,9],"./PopupCategoriesContainer/PopupCategoriesContainer.less":[158,7],"./SimpleSection/SimpleSection":[279,9,23],"./SimpleSection/SimpleSection.css":[545,7,36],"./SimpleSection/SimpleSection.jsx":[279,9,23],"./SupplementReview/SupplementReview":[260,9,1,2],"./SupplementReview/SupplementReview.css":[532,7,37],"./SupplementReview/SupplementReview.jsx":[260,9,1,2],"./TemplateFlash/TemplateFlash":[280,9,16],"./TemplateFlash/TemplateFlash.jsx":[280,9,16],"./TemplateFlash/TemplateFlash.less":[536,7,40],"./TemplateProductsCarousel/TemplateProductsCarousel":[281,9,4,12],"./TemplateProductsCarousel/TemplateProductsCarousel.jsx":[281,9,4,12],"./TemplateProductsCarousel/TemplateProductsCarousel.less":[537,7,41],"./TemplateProductsD/TemplateProductsD":[255,9,3,6],"./TemplateProductsD/TemplateProductsD.jsx":[255,9,3,6],"./TemplateProductsD/TemplateProductsD.less":[531,7,42],"./TemplateProductsG3/TemplateProductsG3":[282,9,8],"./TemplateProductsG3/TemplateProductsG3.jsx":[282,9,8],"./TemplateProductsG3/TemplateProductsG3.less":[538,7,44],"./TemplateProductsG3DB/TemplateProductsG3DB":[283,9,10],"./TemplateProductsG3DB/TemplateProductsG3DB.jsx":[283,9,10],"./TemplateProductsG3DB/TemplateProductsG3DB.less":[539,7,43],"./TemplateProductsG4/TemplateProductsG4":[284,9,9],"./TemplateProductsG4/TemplateProductsG4.jsx":[284,9,9],"./TemplateProductsG4/TemplateProductsG4.less":[540,7,45],"./TemplateProductsTabCmx/TemplateProductsTabCmx":[256,9,1,24],"./TemplateProductsTabCmx/TemplateProductsTabCmx.tsx":[256,9,1,24],"./TemplateProductsTabSim/TemplateProductsTabSim":[285,9,17],"./TemplateProductsTabSim/TemplateProductsTabSim.jsx":[285,9,17],"./TemplateProductsTabSim/TemplateProductsTabSim.less":[541,7,46]};function a(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(2).map(s.e)).then((function(){return s.t(a,t[1])}))}a.keys=function(){return Object.keys(n)},a.id=523,e.exports=a},525:function(e,t,s){"use strict";s.r(t);var n,a,o,r=s(0),i=s.n(r),l=s(53),c=s.n(l),m=s(20),p=s(25),d=s(26),u=s(28),h=s(27),g=s(29),C=(s(299),s(558)),k=s(551),v=s(249),A=s(555),f=s(526),T=s(556),S=s(64),b=(s(300),s(102)),y=s(6);!function(e){e.WeightManagement="WeightManagement",e.Performance="Performance",e.Protein="Protein",e.WomensClothes="WomensClothes",e.WomensAccessories="WomensAccessories",e.MensClothes="MensClothes",e.MensAccessories="MensAccessories",e.WomensSportShose="WomensSportShose",e.MensSportShose="MensSportShose",e.VitaminsAndHealth="VitaminsAndHealth"}(n||(n={})),function(e){e.ProteinWeightGainers="ProteinWeightGainers",e.ProteinPlantProtein="ProteinPlantProtein",e.FishOil="FishOil",e.Multivitamins="Multivitamins",e.LCarnitine="LCarnitine",e.FatBurners="FatBurners",e.PostWorkoutRecovery="PostWorkoutRecovery",e.PreWorkout="PreWorkout",e.CaseinProtein="CaseinProtein",e.WheyProtein="WheyProtein",e.WomensClothesPantsAndLeggings="WomensClothesPantsAndLeggings",e.WomensClothesCropTops="WomensClothesCropTops",e.WomensClothesHoodiesAndJackets="WomensClothesHoodiesAndJackets",e.WomensClothesShorts="WomensClothesShorts",e.WomensClothesSportsBras="WomensClothesSportsBras",e.WomensClothesSwimwear="WomensClothesSwimwear",e.WomensClothesTShirtsAndTops="WomensClothesTShirtsAndTops",e.WomensClothesSleevelessandTankTops="WomensClothesSleevelessandTankTops",e.WomensClothesUnderwearAndSocks="WomensClothesUnderwearAndSocks",e.WomensAccessoriesSunglassesAndEyewearAccessories="WomensAccessoriesSunglassesAndEyewearAccessories",e.WomensAccessoriesScarvesAndWraps="WomensAccessoriesScarvesAndWraps",e.WomensAccessoriesGlovesAndMittens="WomensAccessoriesGlovesAndMittens",e.WomensAccessoriesHatsAndCaps="WomensAccessoriesHatsAndCaps",e.WomensAccessoriesEarmuffs="WomensAccessoriesEarmuffs",e.WomensAccessoriesHandbagAccessories="WomensAccessoriesHandbagAccessories",e.WomensAccessoriesKeyringsAndKeychains="WomensAccessoriesKeyringsAndKeychains",e.WomensAccessoriesWalletsAndCardCases="WomensAccessoriesWalletsAndCardCases",e.MensClothesBaselayers="MensClothesBaselayers",e.MensClothesHoodiesAndJackets="MensClothesHoodiesAndJackets",e.MensClothesShorts="MensClothesShorts",e.MensClothesPants="MensClothesPants",e.MensClothesStringers="MensClothesStringers",e.MensClothesTShirtsAndTops="MensClothesTShirtsAndTops",e.MensClothesSleevelessandTankTops="MensClothesSleevelessandTankTops",e.MensClothesUnderwearAndSocks="MensClothesUnderwearAndSocks",e.MensAccessoriesBelts="MensAccessoriesBelts",e.MensAccessoriesSunglassesAndEyewearAccessories="MensAccessoriesSunglassesAndEyewearAccessories",e.MensAccessoriesScarvesAndWraps="MensAccessoriesScarvesAndWraps",e.MensAccessoriesGlovesAndMittens="MensAccessoriesGlovesAndMittens",e.MensAccessoriesHatsAndCaps="MensAccessoriesHatsAndCaps",e.MensAccessoriesEarmuffs="MensAccessoriesEarmuffs",e.MensAccessoriesHandbagAccessories="MensAccessoriesHandbagAccessories",e.MensAccessoriesKeyringsAndKeychains="MensAccessoriesKeyringsAndKeychains",e.MensAccessoriesWalletsAndCardCases="MensAccessoriesWalletsAndCardCases",e.MensAccessoriesSuspenders="MensAccessoriesSuspenders"}(a||(a={})),function(e){e.Supplements="Supplements",e.Mens="Mens",e.WorkoutPlan="WorkoutPlan",e.Blogs="Blogs",e.OurCommunity="OurCommunity",e.Sarms="Sarms",e.HomePage="HomePage",e.Account="Account",e.Womens="Womens"}(o||(o={}));var E,W=[{title:"multivitamins",key:a.Multivitamins,linkTo:y.a.Multivitamins},{title:"fish oil",key:a.FishOil,linkTo:y.a.FishOil}],P=[{title:"fat burners",key:a.FatBurners,linkTo:y.a.FatBurners},{title:"L-Carnitine",key:a.LCarnitine,linkTo:y.a.LCarnitine}],w=[{title:"pre workout",key:a.PreWorkout,linkTo:y.a.PreWorkout},{title:"post workout recovery",key:a.PostWorkoutRecovery,linkTo:y.a.PostWorkoutRecovery}],M=[{title:"whey protein",key:a.WheyProtein,linkTo:y.a.WheyProtein},{title:"Casein protein",key:a.CaseinProtein,linkTo:y.a.CaseinProtein}],O=[{title:"baselayers",key:a.MensClothesBaselayers,linkTo:y.a.MensClothesBaselayers},{title:"hoodies & jackets",key:a.MensClothesHoodiesAndJackets,linkTo:y.a.MensClothesHoodiesAndJackets},{title:"shorts",key:a.MensClothesShorts,linkTo:y.a.MensClothesShorts},{title:"pants",key:a.MensClothesPants,linkTo:y.a.MensClothesPants},{title:"stringers",key:a.MensClothesStringers,linkTo:y.a.MensClothesStringers},{title:"t-Shirts and tops",key:a.MensClothesTShirtsAndTops,linkTo:y.a.MensClothesTShirtsAndTops},{title:"sleeveless & tank tops",key:a.MensClothesSleevelessandTankTops,linkTo:y.a.MensClothesSleevelessandTankTops},{title:"underwear & socks",key:a.MensClothesUnderwearAndSocks,linkTo:y.a.MensClothesUnderwearAndSocks}],j=[{title:"crop tops",key:a.WomensClothesCropTops,linkTo:y.a.WomensClothesCropTops},{title:"pants & leggings",key:a.WomensClothesPantsAndLeggings,linkTo:y.a.WomensClothesPantsAndLeggings},{title:"hoodies & jackets",key:a.WomensClothesHoodiesAndJackets,linkTo:y.a.WomensClothesHoodiesAndJackets},{title:"shorts",key:a.WomensClothesShorts,linkTo:y.a.WomensClothesShorts},{title:"sports bras",key:a.WomensClothesSportsBras,linkTo:y.a.WomensClothesSportsBras},{title:"swimwear",key:a.WomensClothesSwimwear,linkTo:y.a.WomensClothesSwimwear},{title:"t-Shirts and tops",key:a.WomensClothesTShirtsAndTops,linkTo:y.a.WomensClothesTShirtsAndTops},{title:"sleeveless & tank tops",key:a.WomensClothesSleevelessandTankTops,linkTo:y.a.WomensClothesSleevelessandTankTops},{title:"underwear & socks",key:a.WomensClothesUnderwearAndSocks,linkTo:y.a.WomensClothesUnderwearAndSocks}],I=[{title:"belts",key:a.MensAccessoriesBelts,linkTo:y.a.MensAccessoriesBelts},{title:"sunglasses & eyewear",key:a.MensAccessoriesSunglassesAndEyewearAccessories,linkTo:y.a.MensAccessoriesSunglassesAndEyewearAccessories},{title:"scarves & wraps",key:a.MensAccessoriesScarvesAndWraps,linkTo:y.a.MensAccessoriesScarvesAndWraps},{title:"gloves & mittens",key:a.MensAccessoriesGlovesAndMittens,linkTo:y.a.MensAccessoriesGlovesAndMittens},{title:"hats & caps",key:a.MensAccessoriesHatsAndCaps,linkTo:y.a.MensAccessoriesHatsAndCaps},{title:"earmuffs",key:a.MensAccessoriesEarmuffs,linkTo:y.a.MensAccessoriesEarmuffs},{title:"handbag accessories",key:a.MensAccessoriesHandbagAccessories,linkTo:y.a.MensAccessoriesHandbagAccessories},{title:"keyrings & keychains",key:a.MensAccessoriesKeyringsAndKeychains,linkTo:y.a.MensAccessoriesKeyringsAndKeychains},{title:"wallets & card cases",key:a.MensAccessoriesWalletsAndCardCases,linkTo:y.a.MensAccessoriesWalletsAndCardCases},{title:"suspenders",key:a.MensAccessoriesSuspenders,linkTo:y.a.MensAccessoriesSuspenders}],x=[{title:"sunglasses & eyewear",key:a.WomensAccessoriesSunglassesAndEyewearAccessories,linkTo:y.a.WomensAccessoriesSunglassesAndEyewearAccessories},{title:"scarves & wraps",key:a.WomensAccessoriesScarvesAndWraps,linkTo:y.a.WomensAccessoriesScarvesAndWraps},{title:"gloves & mittens",key:a.WomensAccessoriesGlovesAndMittens,linkTo:y.a.WomensAccessoriesGlovesAndMittens},{title:"hats & caps",key:a.WomensAccessoriesHatsAndCaps,linkTo:y.a.WomensAccessoriesHatsAndCaps},{title:"earmuffs",key:a.WomensAccessoriesEarmuffs,linkTo:y.a.WomensAccessoriesEarmuffs},{title:"handbag accessories",key:a.WomensAccessoriesHandbagAccessories,linkTo:y.a.WomensAccessoriesHandbagAccessories},{title:"keyrings & keychains",key:a.WomensAccessoriesKeyringsAndKeychains,linkTo:y.a.WomensAccessoriesKeyringsAndKeychains},{title:"wallets & card cases",key:a.WomensAccessoriesWalletsAndCardCases,linkTo:y.a.WomensAccessoriesWalletsAndCardCases}],H=[{title:"protein",key:n.Protein,nested:!0,subItems:M,linkTo:y.a.Protein},{title:"performance",key:n.Performance,nested:!0,subItems:w,linkTo:y.a.Performance},{title:"weight management",key:n.WeightManagement,nested:!0,subItems:P,linkTo:y.a.WeightManagement},{title:"vitamins and health",key:n.VitaminsAndHealth,nested:!0,subItems:W,linkTo:y.a.VitaminsAndHealth}],G=[{title:"clothes",key:n.MensClothes,nested:!0,subItems:O,linkTo:y.a.MensClothes},{title:"accessories",key:n.MensAccessories,nested:!0,subItems:I,linkTo:y.a.MensAccessories},{title:"sport shoes",key:n.MensSportShose,nested:!1}],L=[{title:"clothes",key:n.WomensClothes,nested:!0,subItems:j,linkTo:y.a.WomensClothes},{title:"accessories",key:n.WomensAccessories,nested:!0,subItems:x,linkTo:y.a.WomensAccessories},{title:"sport shoes",key:n.WomensSportShose,nested:!1}],D=[{title:"supplements",key:o.Supplements,affiliate:!0,nested:!0,subItems:H,linkTo:y.a.Supplements},{title:"mens",key:o.Mens,affiliate:!0,nested:!0,subItems:G,linkTo:y.a.Mens},{title:"womens",key:o.Womens,affiliate:!0,nested:!0,subItems:L,linkTo:y.a.Womens},{title:"sarms",key:o.Sarms,affiliate:!0,nested:!1,linkTo:y.a.Sarms},{title:"workout plan",key:o.WorkoutPlan,affiliate:!1,nested:!1,linkTo:y.a.WorkoutPlan},{title:"blogs",key:o.Blogs,affiliate:!1,nested:!1,linkTo:y.a.Blogs},{title:"our community",key:o.OurCommunity,affiliate:!1,nested:!1,linkTo:y.a.OurCommunity}],B=function(){return"undefined"===typeof window?C.a.onlyTablet.minWidth:window.innerWidth},N=function(e){function t(){var e,s;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(s=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={active:"Home"},s.handleItemClick=function(e){s.setState({active:e})},s.hideFixedMenu=function(){return s.setState({fixed:!1})},s.showFixedMenu=function(){return s.setState({fixed:!0})},s}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children,s=this.state.fixed;return console.log("Props======> ",this.props),i.a.createElement(C.a,{getWidth:B,minWidth:C.a.onlyTablet.minWidth},i.a.createElement(k.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},i.a.createElement(v.a,{inverted:!0,textAlign:"center",className:"Navbar",style:{minHeight:100,padding:"1em 0em"},vertical:!0},i.a.createElement(A.a,{fixed:s?"top":null,inverted:!s,pointing:!s,secondary:!s,size:"large"},i.a.createElement(f.a,null,i.a.createElement(A.a.Item,{onClick:this.handleItemClick,name:"Home",className:"NavbarItem",as:m.b,to:"/",active:"Home"===this.state.active},i.a.createElement("span",{className:"NavbarItem"},"Logo")),D.map((function(t){return t.subItems&&t.nested?i.a.createElement(b.default,{key:t.title,navbarSubItems:t.subItems},i.a.createElement("div",{onMouseOver:function(){return e.handleItemClick(t.title)}},i.a.createElement(A.a.Item,{className:"NavbarItem",name:t.title,as:m.b,active:e.state.active===t.title,to:t.linkTo},i.a.createElement("span",{className:"NavbarItem"},t.title)))):i.a.createElement("div",{onMouseOver:function(){return e.handleItemClick(t.title)}},i.a.createElement(A.a.Item,{key:t.title,className:"NavbarItem",name:t.title,as:m.b,active:e.state.active===t.title,to:t.linkTo},i.a.createElement("span",{className:"NavbarItem"},t.title)))})))))),t)}}]),t}(r.Component),F=function(e){function t(){var e,s;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(s=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={active:"Home"},s.handleItemClick=function(e,t){var n=t.name;return s.setState({active:n})},s.handleSidebarHide=function(){return s.setState({sidebarOpened:!1})},s.handleToggle=function(){return s.setState({sidebarOpened:!0})},s}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children,s=this.state.sidebarOpened;return i.a.createElement(C.a,{as:T.a.Pushable,getWidth:B,maxWidth:C.a.onlyMobile.maxWidth},i.a.createElement(T.a,{as:A.a,animation:"push",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:s},i.a.createElement(A.a.Item,{onClick:this.handleItemClick,name:"Home",as:m.b,to:"/",active:"Home"===this.state.active},"Home"),D.map((function(t){return i.a.createElement(A.a.Item,{key:t.title,active:e.state.active==="".concat(t.title),onClick:e.handleItemClick,name:t.title,as:m.b,to:t.linkTo},t.title)}))),i.a.createElement(T.a.Pusher,{dimmed:s},i.a.createElement(v.a,{inverted:!0,textAlign:"center",style:{minHeight:100,padding:"1em 0em"},vertical:!0},i.a.createElement(f.a,null,i.a.createElement(A.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},i.a.createElement(A.a.Item,{onClick:this.handleToggle},i.a.createElement(S.a,{name:"sidebar"}))))),t))}}]),t}(r.Component),R=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(N,null,t),i.a.createElement(F,null,t))},z=function(e){var t=e.children;return i.a.createElement(R,null,t)},K=(s(444),s(247)),J=s(529),U=s(554),_=s(552),Q=s(244),V=function(){return i.a.createElement(v.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"}},i.a.createElement(f.a,{textAlign:"center"},i.a.createElement(K.a,{divided:!0,inverted:!0,stackable:!0},i.a.createElement(K.a.Column,{width:3},i.a.createElement(J.a,{inverted:!0,as:"h4",content:"Group 1"}),i.a.createElement(U.a,{link:!0,inverted:!0},i.a.createElement(U.a.Item,{as:"a"},"Link One"),i.a.createElement(U.a.Item,{as:"a"},"Link Two"),i.a.createElement(U.a.Item,{as:"a"},"Link Three"),i.a.createElement(U.a.Item,{as:"a"},"Link Four"))),i.a.createElement(K.a.Column,{width:3},i.a.createElement(J.a,{inverted:!0,as:"h4",content:"Group 2"}),i.a.createElement(U.a,{link:!0,inverted:!0},i.a.createElement(U.a.Item,{as:"a"},"Link One"),i.a.createElement(U.a.Item,{as:"a"},"Link Two"),i.a.createElement(U.a.Item,{as:"a"},"Link Three"),i.a.createElement(U.a.Item,{as:"a"},"Link Four"))),i.a.createElement(K.a.Column,{width:3},i.a.createElement(J.a,{inverted:!0,as:"h4",content:"Group 3"}),i.a.createElement(U.a,{link:!0,inverted:!0},i.a.createElement(U.a.Item,{as:"a"},"Link One"),i.a.createElement(U.a.Item,{as:"a"},"Link Two"),i.a.createElement(U.a.Item,{as:"a"},"Link Three"),i.a.createElement(U.a.Item,{as:"a"},"Link Four"))),i.a.createElement(K.a.Column,{width:7},i.a.createElement(J.a,{inverted:!0,as:"h4",content:"Footer Header"}),i.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users."))),i.a.createElement(_.a,{inverted:!0,section:!0}),i.a.createElement(Q.a,{centered:!0,size:"mini",src:"/logo.png"}),i.a.createElement(U.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small"},i.a.createElement(U.a.Item,{as:"a",href:"#"},"Site Map"),i.a.createElement(U.a.Item,{as:"a",href:"#"},"Contact Us"),i.a.createElement(U.a.Item,{as:"a",href:"#"},"Terms and Conditions"),i.a.createElement(U.a.Item,{as:"a",href:"#"},"Privacy Policy"))))},q=s(35),X=s(45),$=s(245),Y=function(e){var t=e.component,s=Object($.a)(e,["component"]);return i.a.createElement(X.a,Object.assign({strict:!0,exact:!0},s,{render:function(e){return i.a.createElement(t,e)}}))},Z=s(22),ee=s.n(Z),te=s(21),se=ee()({loader:function(){return s.e(47).then(s.bind(null,639))},loading:te.default}),ne={HomePageRouter:{auth:!1,path:y.a.HomePage,component:se}},ae=ee()({loader:function(){return Promise.all([s.e(3),s.e(28)]).then(s.bind(null,630))},loading:te.default}),oe={PerformanceRouter:{auth:!1,path:y.a.Performance,component:ae}},re=s(59),ie=ee()({loader:function(){return s.e(48).then(s.bind(null,631))},loading:te.default}),le={ProteinRouter:(E={admin:!1},Object(re.a)(E,"admin",!1),Object(re.a)(E,"auth",!1),Object(re.a)(E,"path",y.a.Protein),Object(re.a)(E,"component",ie),E)},ce=ee()({loader:function(){return Promise.all([s.e(1),s.e(2),s.e(49)]).then(s.bind(null,632))},loading:te.default}),me={SupplementReviewRouter:{admin:!1,auth:!1,path:y.a.SupplementReview+"/:id",component:ce}},pe=ee()({loader:function(){return s.e(50).then(s.bind(null,629))},loading:te.default}),de=Object(q.a)({},oe,{},me,{},le,{SupplementsRouter:{admin:!1,auth:!1,path:y.a.Supplements,component:pe}}),ue=ee()({loader:function(){return Promise.all([s.e(0),s.e(29)]).then(s.bind(null,633))},loading:te.default}),he={AccountRouter:{admin:!1,auth:!1,path:y.a.Account,component:ue}},ge=s(97),Ce=ee()({loader:function(){return s.e(30).then(s.bind(null,634))},loading:ge.default}),ke={admin:!1,auth:!1,path:y.a.GoogleCallbackToken+":id",component:Ce},ve=Object(q.a)({RedirectMiddlewareRouter:ke},he,{},ne,{},de),Ae=function(){return i.a.createElement(X.c,null,Object.keys(ve).map((function(e){var t=ve[e].auth?Y:X.a;return i.a.createElement(t,{key:ve[e].path,exact:!0,strict:!0,path:ve[e].path,component:ve[e].component})})))},fe=function(e){function t(e){var s;return Object(p.a)(this,t),(s=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},s}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(i.a.Component),Te=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(fe,null,i.a.createElement(z,null,i.a.createElement(f.a,null,i.a.createElement(Ae,null)),i.a.createElement(V,null)))}}]),t}(r.Component),Se=(s(445),s(446),s(447),s(448),s(449),s(37)),be=s(140),ye=s.n(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(501);var Ee=s(242),We=s.n(Ee),Pe=s(141),we=s.n(Pe),Me=s(23),Oe=s(553),je="card",Ie="box",xe=s(228),He={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},Ge=function(e){var t=e.id,s=e.template,n=e.index,a=e.moveCard,o=Object(r.useRef)(null),l=Object(Se.useDrop)({accept:je,hover:function(e,t){if(o.current){var s=e.index,r=n;if(s!==r){var i=o.current.getBoundingClientRect(),l=(i.bottom-i.top)/2,c=t.getClientOffset().y-i.top;s<r&&c<l||s>r&&c>l||(a(s,r),e.index=r)}}}}),c=Object(Me.a)(l,2)[1],m=Object(Se.useDrag)({item:{type:je,id:t,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(Me.a)(m,2),d=p[0].isDragging?0:1;return(0,p[1])(c(o)),i.a.createElement("div",{ref:o,style:Object(q.a)({},He,{opacity:d,position:"relative"})},i.a.createElement("div",{style:{width:"100%",height:"100%",zIndex:1e3,position:"absolute"}}),i.a.createElement(xe.a,{template:s}))},Le=s(47),De=s.n(Le),Be=function(){var e=Object(r.useState)(),t=Object(Me.a)(e,2),s=t[0],n=t[1],a=Object(r.useState)("TemplateProductsCarousel"),o=Object(Me.a)(a,2),i=o[0],l=(o[1],Object(r.useState)({id:De()(),name:"home page",page:"home",title:"fish oil",description:"some description",options:[{id:De()(),name:"table temp",template:"TemplateProductsCarousel",title:"fish oil",description:"some description",options:[{id:De()(),name:"table temp",component:"component",title:"fish oil",description:"some description",product:"product id (tz8888889999okmhgvbn)"}]},{id:De()(),name:"table temp",template:"TemplateFlash",title:"fish oil",description:"some description",options:[{id:De()(),name:"table temp",component:"TableComponent",title:"fish oil",description:"some description",product:"product id (tz8888889999okmhgvbn)"}]}]})),c=Object(Me.a)(l,2),m=c[0],p=c[1],d=Object(r.useCallback)((function(e,t){console.log();var s=JSON.parse(JSON.stringify(m)),n=s.options[e],a=s.options[t];console.log(a," dragCard ==> ",n),s.options.splice(t,1,n),s.options.splice(e,1,a),p(s),console.log(" ===> clonePages ===>",s)}),[m]);return console.log("state ===========>>>>>>  ",s),{onTemplateHoverHandler:function(e){n(e)},currentTemplate:i,pages:m,moveCard:d,insertCard:function(e){var t=JSON.parse(JSON.stringify(m)),n={id:De()(),name:"table temp",template:e.name,title:"fish oil",description:"some description",options:[{id:De()(),name:"table temp",component:"TableComponent",title:"fish oil",description:"some description",product:"product id (tz8888889999okmhgvbn)"}]},a=s&&t.options.findIndex((function(e){return s===e.id}));t.options.splice(a+1,0,n),p(t)}}};var Ne={width:"100%"},Fe=function(){var e=Be(),t=e.pages,s=e.moveCard,n=e.insertCard,a=e.onTemplateHoverHandler,o=Object(r.useState)(!1),l=Object(Me.a)(o,2),c=(l[0],l[1]),m=Object(r.useState)(!1),p=Object(Me.a)(m,2),d=(p[0],p[1]),u=Object(Se.useDrop)({accept:Ie,drop:function(e,t){var s=t.didDrop();s||(console.log("is over ==> ",C,"isOverCurrent => ",k),n(e),c(!0),d(s))},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop(),isOverCurrent:e.isOver({shallow:!0})}}}),h=Object(Me.a)(u,2),g=h[0],C=g.isOver,k=g.isOverCurrent,v=(g.canDrop,h[1]);return i.a.createElement("div",{ref:v},i.a.createElement("div",{style:Ne},!!t&&!!t.options&&t.options.map((function(e,t){return function(e,t){return console.log("renderCard ==> ",e),!!e&&!!e.template&&i.a.createElement("div",{onMouseOver:function(){return a(e.id)}},i.a.createElement(Ge,{key:e.id,index:t,id:e.id,template:e.template,moveCard:s}))}(e,t)}))))},Re=function(e){var t=e.name,s=(e.handleItemClick,e.activeItem,Object(Se.useDrag)({item:{name:t,type:Ie},end:function(e,t){},collect:function(e){return{isDragging:e.isDragging()}}})),n=Object(Me.a)(s,3),a=n[0].isDragging,o=n[1],r=n[2],l=a?.7:1;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Se.DragPreviewImage,{connect:r,src:"https://assets.cdn.moviepilot.de/files/f9d77471be0adcec13a1bd6ca75d1f40ec6327af8855622cbec7df4d0235/fill/640/307/One+Piece+-+Titelbild+%28Episode+of+East+Blue%29.jpg"}),i.a.createElement("div",{ref:o,style:{opacity:l}},i.a.createElement(Oe.a,null,i.a.createElement(Oe.a.Content,{verticalAlign:"middle"},i.a.createElement(Oe.a.Header,null,i.a.createElement(S.a,{name:"react"})," ",t)))))},ze=function(e){var t=Object(r.useState)("home"),s=Object(Me.a)(t,2),n=s[0],a=s[1],o=function(e,t){return a(t.name)};return i.a.createElement("div",{style:{position:"fixed"}},i.a.createElement(Oe.a.Group,{relaxed:"very"},i.a.createElement(Re,{name:"TemplateProductsCarousel",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateFlash",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsTabCmx",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsD",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsG3",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsG3DB",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsG4",handleItemClick:o,activeItem:n}),i.a.createElement(Re,{name:"TemplateProductsTabSim",handleItemClick:o,activeItem:n})))},Ke=function(){return i.a.createElement(K.a,null,i.a.createElement(K.a.Column,{width:4},i.a.createElement(ze,null)),i.a.createElement(K.a.Column,{stretched:!0,width:12},i.a.createElement(v.a,null,i.a.createElement(Fe,null))))},Je=function(e){function t(){var e,s;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(s=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={isSignIn:!1,isAdminNavbar:!0,admin:!1,email:null,exp:null,superAdmin:!1,id:null,errors:null},s.logoutHandler=function(){localStorage.getItem("access_token")&&(localStorage.removeItem("access_token"),s.setState({isSignIn:!1,isAdminNavbar:!0,admin:!1,email:null,exp:null,superAdmin:!1,id:null}),window.location.assign("/"))},s}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e,t=JSON.parse(localStorage.getItem("access_token"))||null;if(t){(e=t)?we.a.defaults.headers.common.Authorization=e:delete we.a.defaults.headers.common.Authorization;var s=We()(t);this.setState(Object(q.a)({},this.state,{admin:s.admin,email:s.email,exp:s.exp,superAdmin:s.superAdmin,id:s._id,isSignIn:!0}))}}},{key:"render",value:function(){return i.a.createElement(fe,null,i.a.createElement(z,null,i.a.createElement(f.a,null,i.a.createElement(Ke,null)),i.a.createElement(V,null)))}}]),t}(r.Component);console.log("HTML5Backend ===> ",ye.a);var Ue=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_IS_UX_MANAGER;c.a.render(Ue?i.a.createElement(m.a,null,i.a.createElement(Se.DragDropContextProvider,{backend:ye.a},i.a.createElement(Je,null))):i.a.createElement(m.a,null,i.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,s){"use strict";var n;s.d(t,"a",(function(){return n})),function(e){e.GoogleCallbackToken="/auth/oauth2/callback/accessToken/",e.BackendBase="/api/v1",e.WorkoutPlan="/page/WorkoutPlan",e.Blogs="/page/blogs",e.OurCommunity="/page/our-community",e.Fashion="/page/fashion",e.Sarms="/page/sarms",e.Supplements="/page/supplements",e.HomePage="/page",e.Account="/page/account",e.SupplementReview="/page/supplements/review",e.FishOil="/page/supplements/vitamins-and-health/fish-oil",e.Multivitamins="/page/supplements/vitamins-and-health/multivitamins",e.LCarnitine="/page/supplements/weight-management/l-carnitine",e.FatBurners="/page/supplements/weight-management/fat-burners",e.PostWorkoutRecovery="/page/supplements/performance/post-workout-recovery",e.PreWorkout="/page/supplements/performance/pre-workout",e.CaseinProtein="/page/supplements/protein/casein-protein",e.WheyProtein="/page/supplements/protein/whey-protein",e.VitaminsAndHealth="/page/supplemenst/vitamins-and-health",e.WeightManagement="/page/supplemenst/weight-management",e.Performance="/page/supplements/performance",e.Protein="/page/supplements/protein",e.WeightGainersProtin="/page/supplements/protein/weight-gainers",e.MealReplacementsProtin="/page/supplements/protein/meal-replacements",e.ProteinBarsProtin="/page/supplements/protein/protein-bars",e.Womens="/page/shop-women",e.WomensClothes="/page/shop-women/clothes",e.WomensClothesPantsAndLeggings="/page/shop-women/clothes/pants-and-leggings",e.WomensClothesCropTops="/page/shop-women/clothes/crop-tops",e.WomensClothesHoodiesAndJackets="/page/shop-women/clothes/hoodies-and-jackets",e.WomensClothesShorts="/page/shop-women/clothes/Shorts",e.WomensClothesSportsBras="/page/shop-women/clothes/sports-bras",e.WomensClothesSwimwear="/page/shop-women/clothes/swimwear",e.WomensClothesTShirtsAndTops="/page/shop-women/clothes/t-shirts-and-tops",e.WomensClothesSleevelessandTankTops="/page/shop-women/clothes/sleeveless-and-tank-tops",e.WomensClothesUnderwearAndSocks="/page/shop-women/clothes/underwear-and-socks",e.WomensAccessories="/page/shop-women/accessories",e.WomensAccessoriesSunglassesAndEyewearAccessories="/page/shop-women/accessories/sunglasses-and-eyewear-accessories",e.WomensAccessoriesScarvesAndWraps="/page/shop-women/accessories/scarves-and-wraps",e.WomensAccessoriesGlovesAndMittens="/page/shop-women/accessories/gloves-and-mittens",e.WomensAccessoriesHatsAndCaps="/page/shop-women/accessories/hats-and-caps",e.WomensAccessoriesEarmuffs="/page/shop-women/accessories/earmuffs",e.WomensAccessoriesHandbagAccessories="/page/shop-women/accessories/handbag-accessories",e.WomensAccessoriesKeyringsAndKeychains="/page/shop-women/accessories/keyrings-and-keychains",e.WomensAccessoriesWalletsAndCardCases="/page/shop-women/accessories/wallets-and-card-cases",e.Mens="/page/shop-men",e.MensClothes="/page/shop-men/clothes",e.MensClothesBaselayers="/page/shop-men/clothes/baselayers",e.MensClothesHoodiesAndJackets="/page/shop-men/clothes/hoodies-and-jackets",e.MensClothesShorts="/page/shop-men/clothes/shorts",e.MensClothesPants="/page/shop-men/clothes/pants",e.MensClothesStringers="/page/shop-men/clothes/stringers",e.MensClothesTShirtsAndTops="/page/shop-men/clothes/t-shirts-and-tops",e.MensClothesSleevelessandTankTops="/page/shop-men/clothes/sleeveless-and-tank-tops",e.MensClothesUnderwearAndSocks="/page/shop-men/clothes/underwear-and-socks",e.MensAccessories="/page/shop-men/accessories",e.MensAccessoriesBelts="/page/shop-men/accessories/belts",e.MensAccessoriesSunglassesAndEyewearAccessories="/page/shop-men/accessories/sunglasses-and-eyewear-accessories",e.MensAccessoriesScarvesAndWraps="/page/shop-men/accessories/scarves-and-wraps",e.MensAccessoriesGlovesAndMittens="/page/shop-men/accessories/gloves-and-mittens",e.MensAccessoriesHatsAndCaps="/page/shop-men/accessories/hats-and-caps",e.MensAccessoriesEarmuffs="/page/shop-men/accessories/earmuffs",e.MensAccessoriesHandbagAccessories="/page/shop-men/accessories/handbag-accessories",e.MensAccessoriesKeyringsAndKeychains="/page/shop-men/accessories/keyrings-and-keychains",e.MensAccessoriesWalletsAndCardCases="/page/shop-men/accessories/wallets-and-card-cases",e.MensAccessoriesSuspenders="/page/shop-men/accessories/suspenders"}(n||(n={}))},97:function(e,t,s){"use strict";s.r(t),s.d(t,"GoogleSpinner",(function(){return m}));var n=s(25),a=s(26),o=s(28),r=s(27),i=s(29),l=s(0),c=s.n(l),m=(s(200),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"GoogleSpinner"},c.a.createElement("div",{id:"square5"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)))}}]),t}(l.Component));t.default=m}},[[294,26,27]]]);
//# sourceMappingURL=main.a0c019eb.chunk.js.map