import{d as o,M as V,j as i,m as Q,u as O,a as k,r as S,G as Y,N as w,b as F,S as U}from"./index-DuyaJJxt.js";const z=o.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 0;

  @media ${V.mobile} {
    margin: 60px auto 0;
  }
`,B=o.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({theme:t,$isCurrentPage:s})=>s?t.brown40:t.gray40};
  font-size: 20px;
  font-weight: 400;

  width: 40px;
  height: 40px;

  cursor: pointer;
`;function N({children:t,onNavBtnClick:s,isVisible:e}){return i.jsx(B,{className:"actor-font",onClick:s,children:e&&t})}function M({children:t,isCurrentPage:s,onNavBtnClick:e}){return i.jsx(B,{className:"actor-font",$isCurrentPage:s,onClick:e,children:t})}function I({currentPage:t,pageNumList:s,onNavBtnClick:e,arrowBtnVisible:a}){const{isLeftArrowVisible:c,isRightArrowVisible:l}=a;return i.jsxs(z,{children:[i.jsx(N,{onNavBtnClick:e,isVisible:c,children:"<"}),s.map(h=>i.jsx(M,{onNavBtnClick:e,isCurrentPage:h===t,children:h},h)),i.jsx(N,{onNavBtnClick:e,isVisible:l,children:">"})]})}const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgB7ZzxdZswEMa/9uX/phP0OkGyQekE9QbxBnEnMBskG8SdINnA6QSpJzCZIOkEKVfEC0+chAQSiITfe/f8wAjkD+lOOoGBhYWFhYWFufIB03OqWU1R2rOyyRhbIBbgvLRVaWelkTIbLNCf0g6l3ZV2jzdIVtq+tKfSXgLYLSqRZw23li3CiSLZsbQLzJBLxBVmNKFC+yD2L1eoulQXBSp/8gjZIZOy2ledO57zu/pMDm41XXd6r447hT9U2lqdo+s6WyQE/9gbmCvLXS1Hd7TygUrbwS7SFRKAxXmAuZIsHCEeBLtQD+jXWoNgE+cINz8UikxdMymRTOLcTlQhUtdOQqQrQ0VyTE8Oc3cfhS3SFacmh1zHDSJDSF+cmhxyXV3GU705QvY5qSL5pD0isYYcrQjpwo5ZuqlRupp0oQzpk0EevAaNamtMGBUCsENkvym1HsJ8ILSzC08IxArzbj01OSK5CCkSEOYHoUdEc8kHvWjb96hyLi7wmCP2EL/OWbvAgmRa2a8YsDCQoa36hWNZ03QkhrmmNjYI3M2u0a97nWM8cWpzGSGfCuWubQU+ws6Zts1NucB84a5UaPvOMAA9NN55lJVaXyy7hjs7rezRdvCJ5Tt9pZNxdYbMRlUmJSfNFNo2oaqj6Ki7BOo6eRc+FR+LQthnFMjmg8jx5HNDEsLYyruc9FtkESgkNoEkpT/hneEr0GfMHxL2FaaDbVHs2fHkNvrMxXzDti8E+Zq94EFUc1B141F2yFws5rKxnp0YlBfaw2PU2SDEXCzW6oO+4Lm3HdwVxQ7aNmHCte4AENrCHzCADO0767oiMGQu5jO38mEtXCuzFehKmNXLJs1Wc4+4CbOYTpq7U6btG/wQme6H2ObYzQjt3+GTnTCSCSdeY37s0P4dPxAAbi16XiiWj4gFoS2OU0R2mYtJT7vPbcqRO+7rzVhRJgYZerYeV6RBn2uonxqCvCp8gYCs4Dl2SAhp0TNo62FyzDPMbyEPQgmB0e/CA9LHJE6OCHhN7hLAJE60wDKXCMbd3vYYcBSkCBZk9BmYDBM9SJ56BCNEfhXhpON7KWllm2lzZUiVY+MR919UFf2NcOtqhGoss4FZgF/q+97pVBdMEax+93SNyifxcaYmrjt4/mEEf/ial3B7HSrYQLYrF8KCNFtRPS8jDKd+UuSgPovGd/VzAVTaF1TdmrpP+T9X9RMjLnm7tIoUjLMNk0x/9hhW8ePA8i7C5JhwZE9wezmXhWA/xP5ojXZ3WME8Rukjyh4jRVOXfCyhukvf1Db370f1WfsRn0iR4fWPBVxy1gVefdWdumbUyNRkcMI6AE2HXPOs2cLCwsLCwoI3/wDtmx91WcA8LgAAAABJRU5ErkJggg==",X=Q`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0%);
  }
`,D=o.li`
  width: 100%;
  min-width: 112px;
  height: 187px;
  border-radius: 16px;
  border: 1px solid ${t=>t.theme.gray40};
  padding: 20px;
  background-color: ${t=>t.theme.gray10};
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
`,T=o.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`,Z=o.h1`
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
`,H=o.div`
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
`,G=o.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  filter: ${t=>t.theme.gray50Filter};
  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`,y=o.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${t=>t.theme.gray40};
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;function J({subject:t}){const s=O(),e=()=>{if(t){const a={id:t.id,name:t.name,imageSource:t.imageSource,questionCount:t.questionCount,createdAt:t.createdAt};sessionStorage.setItem("profile",JSON.stringify(a)),s(`/post/${t.id}`)}};return i.jsxs(D,{onClick:e,children:[i.jsx(T,{src:t.imageSource,alt:"답변자 프로필 사진"}),i.jsx(Z,{children:t.name}),i.jsxs(H,{children:[i.jsxs("div",{children:[i.jsx(G,{src:W,alt:"받은 질문 아이콘"}),i.jsx(y,{children:"받은 질문"})]}),i.jsxs(y,{children:[t.questionCount,"개"]})]})]})}function q(t,s){const e=[],a=Math.floor(s/2),c=t-a;for(let l=0;l<=s-1;l++)e.push(c+l);return e}function tt({sortBy:t}){const s=k(),[e,a]=S.useState(1),c=s.width>Y.tablet?w.pc:w.other,l=c*(e-1),{data:h}=F(c,l,t),{count:L,results:b}=h,n=Math.ceil(L/c),C=[1,2,3,4,5],E=n<5?C.slice(0,n):C,[g,A]=S.useState(E),j=()=>n<=1?{isLeftArrowVisible:!1,isRightArrowVisible:!1}:e===1?{isLeftArrowVisible:!1,isRightArrowVisible:!0}:e===n?{isLeftArrowVisible:!0,isRightArrowVisible:!1}:{isLeftArrowVisible:!0,isRightArrowVisible:!0},R=m=>{const x=m.currentTarget.textContent,P=!!Number(x),f=r=>{const d=q(r,5);A(d)};P?(()=>{const r=Number(x);if(a(r),!(n<=5)){const p=[1,2],d=[n-1,n],u=p.includes(r),v=d.includes(r);f(u?3:v?n-2:r)}})():(()=>{if(x==="<"&&e!==1){const r=e-1;a(r),!(g[0]===1)&&e<=n-2&&A(d=>d.map(u=>u-1))}if(x===">"&&e!==n){const r=e+1;a(r),!(n===g[g.length-1])&&e>=3&&A(d=>d.map(u=>u+1))}})()};return i.jsxs(i.Fragment,{children:[i.jsx(U,{children:b.map(m=>i.jsx(J,{subject:m},m.id))}),i.jsx(I,{currentPage:e,pageNumList:g,onNavBtnClick:R,arrowBtnVisible:j()})]})}export{tt as default};
