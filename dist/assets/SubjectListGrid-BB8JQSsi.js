import{d as l,M as F,j as i,m as Q,L as V,a as O,S as L,u as Y,b as T,r as C,G as k,N as w,c as z}from"./index-BFcHb5kg.js";const I=l.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 0;

  @media ${F.mobile} {
    margin: 60px auto 0;
  }
`,B=l.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({$isCurrentPage:e})=>e?"var(--brown40)":"var(--gray40)"};
  font-size: 20px;
  font-weight: 400;

  width: 40px;
  height: 40px;

  cursor: pointer;
`;function y({children:e,onNavBtnClick:s,isVisible:t}){return i.jsx(B,{className:"actor-font",onClick:s,children:t&&e})}function M({children:e,isCurrentPage:s,onNavBtnClick:t}){return i.jsx(B,{className:"actor-font",$isCurrentPage:s,onClick:t,children:e})}function D({currentPage:e,pageNumList:s,onNavBtnClick:t,arrowBtnVisible:o}){const{isLeftArrowVisible:n,isRightArrowVisible:c}=o;return i.jsxs(I,{children:[i.jsx(y,{onNavBtnClick:t,isVisible:n,children:"<"}),s.map(u=>i.jsx(M,{onNavBtnClick:t,isCurrentPage:u===e,children:u},u)),i.jsx(y,{onNavBtnClick:t,isVisible:c,children:">"})]})}const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgB7ZzxdZswEMa/9uX/phP0OkGyQekE9QbxBnEnMBskG8SdINnA6QSpJzCZIOkEKVfEC0+chAQSiITfe/f8wAjkD+lOOoGBhYWFhYWFufIB03OqWU1R2rOyyRhbIBbgvLRVaWelkTIbLNCf0g6l3ZV2jzdIVtq+tKfSXgLYLSqRZw23li3CiSLZsbQLzJBLxBVmNKFC+yD2L1eoulQXBSp/8gjZIZOy2ledO57zu/pMDm41XXd6r447hT9U2lqdo+s6WyQE/9gbmCvLXS1Hd7TygUrbwS7SFRKAxXmAuZIsHCEeBLtQD+jXWoNgE+cINz8UikxdMymRTOLcTlQhUtdOQqQrQ0VyTE8Oc3cfhS3SFacmh1zHDSJDSF+cmhxyXV3GU705QvY5qSL5pD0isYYcrQjpwo5ZuqlRupp0oQzpk0EevAaNamtMGBUCsENkvym1HsJ8ILSzC08IxArzbj01OSK5CCkSEOYHoUdEc8kHvWjb96hyLi7wmCP2EL/OWbvAgmRa2a8YsDCQoa36hWNZ03QkhrmmNjYI3M2u0a97nWM8cWpzGSGfCuWubQU+ws6Zts1NucB84a5UaPvOMAA9NN55lJVaXyy7hjs7rezRdvCJ5Tt9pZNxdYbMRlUmJSfNFNo2oaqj6Ki7BOo6eRc+FR+LQthnFMjmg8jx5HNDEsLYyruc9FtkESgkNoEkpT/hneEr0GfMHxL2FaaDbVHs2fHkNvrMxXzDti8E+Zq94EFUc1B141F2yFws5rKxnp0YlBfaw2PU2SDEXCzW6oO+4Lm3HdwVxQ7aNmHCte4AENrCHzCADO0767oiMGQu5jO38mEtXCuzFehKmNXLJs1Wc4+4CbOYTpq7U6btG/wQme6H2ObYzQjt3+GTnTCSCSdeY37s0P4dPxAAbi16XiiWj4gFoS2OU0R2mYtJT7vPbcqRO+7rzVhRJgYZerYeV6RBn2uonxqCvCp8gYCs4Dl2SAhp0TNo62FyzDPMbyEPQgmB0e/CA9LHJE6OCHhN7hLAJE60wDKXCMbd3vYYcBSkCBZk9BmYDBM9SJ56BCNEfhXhpON7KWllm2lzZUiVY+MR919UFf2NcOtqhGoss4FZgF/q+97pVBdMEax+93SNyifxcaYmrjt4/mEEf/ial3B7HSrYQLYrF8KCNFtRPS8jDKd+UuSgPovGd/VzAVTaF1TdmrpP+T9X9RMjLnm7tIoUjLMNk0x/9hhW8ePA8i7C5JhwZE9wezmXhWA/xP5ojXZ3WME8Rukjyh4jRVOXfCyhukvf1Db370f1WfsRn0iR4fWPBVxy1gVefdWdumbUyNRkcMI6AE2HXPOs2cLCwsLCwoI3/wDtmx91WcA8LgAAAABJRU5ErkJggg==",X=Q`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0%);
  }
`,J=l(V)`
  width: 100%;
  min-width: 112px;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
  background-color: var(--gray10);
  transition: transform 1s ease-in-out;

  &:hover {
    cursor: pointer;
    position: relative;
    animation: ${X} 1s infinite;
  }
  @media (max-width: 767px) {
    height: 168px;
    padding: 16px;
  }
`,Z=l.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`,H=l.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  margin: 12px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`,q=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`,G=l.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  filter: var(--gray50Filter);
  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,N=l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray40);
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;function K({subject:e}){return i.jsxs(J,{to:`/post/${e.id}`,children:[i.jsx(Z,{src:e.imageSource,alt:"답변자 프로필 사진"}),i.jsx(H,{children:e.name}),i.jsxs(q,{children:[i.jsxs("div",{children:[i.jsx(G,{src:W,alt:"받은 질문 아이콘"}),i.jsx(N,{children:"받은 질문"})]}),i.jsxs(N,{children:[e.questionCount,"개"]})]})]})}const _=async({limit:e,offset:s,sort:t})=>{const o=`${L}/?limit=${e}&offset=${s}&sort=${t}`;try{const n=await O.get(o),{data:c}=n;return c}catch(n){return console.log(n),{count:0,next:null,previous:null,results:[]}}},$=8,tt=0,et="name",it=(e=$,s=tt,t=et)=>Y({queryKey:[L,e,s,t],queryFn:()=>_({limit:e,offset:s,sort:t})});function st(e,s){const t=[],o=Math.floor(s/2),n=e-o;for(let c=0;c<=s-1;c++)t.push(n+c);return t}function ot({sortBy:e}){const s=T(),[t,o]=C.useState(1),n=s.width>k.tablet?w.pc:w.other,c=n*(t-1),{data:u}=it(n,c,e),{count:E,results:b}=u,r=Math.ceil(E/n),S=[1,2,3,4,5],j=r<5?S.slice(0,r):S,[g,A]=C.useState(j),R=()=>r<=1?{isLeftArrowVisible:!1,isRightArrowVisible:!1}:t===1?{isLeftArrowVisible:!1,isRightArrowVisible:!0}:t===r?{isLeftArrowVisible:!0,isRightArrowVisible:!1}:{isLeftArrowVisible:!0,isRightArrowVisible:!0},v=x=>{const m=x.currentTarget.textContent,P=!!Number(m),f=a=>{const d=st(a,5);A(d)};P?(()=>{const a=Number(m);if(o(a),!(r<=5)){const p=[1,2],d=[r-1,r],h=p.includes(a),U=d.includes(a);f(h?3:U?r-2:a)}})():(()=>{if(m==="<"&&t!==1){const a=t-1;o(a),!(g[0]===1)&&t<=r-2&&A(d=>d.map(h=>h-1))}if(m===">"&&t!==r){const a=t+1;o(a),!(r===g[g.length-1])&&t>=3&&A(d=>d.map(h=>h+1))}})()};return i.jsxs(i.Fragment,{children:[i.jsx(z,{children:b.map(x=>i.jsx(K,{subject:x},x.id))}),i.jsx(D,{currentPage:t,pageNumList:g,onNavBtnClick:v,arrowBtnVisible:R()})]})}export{ot as default};
