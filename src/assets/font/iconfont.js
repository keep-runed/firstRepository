import {createGlobalStyle} from 'styled-components'
export const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1586790114898'); /* IE9 */
  src: url('./iconfont.eot?t=1586790114898#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1586790114898') format('woff'),
  url('./iconfont.ttf?t=1586790114898') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1586790114898#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-weibiaoti561:before {
  content: "\e642";
}

.icon-mima:before {
  content: "\e61f";
}

.icon-ex_pmobile:before {
  content: "\e786";
}

.icon-sina:before {
  content: "\e609";
}

.icon-shang1:before {
  content: "\e66e";
}

.icon-weibiaoti3fuzhi04:before {
  content: "\e63a";
}

.icon-noun154796cc:before {
  content: "\e603";
}

.icon-xinxi:before {
  content: "\e625";
}

.icon-you:before {
  content: "\e679";
}

.icon-up-fill:before {
  content: "\e6a0";
}

.icon-up2:before {
  content: "\e6a9";
}

.icon-qq:before {
  content: "\e663";
}

.icon-eye:before {
  content: "\e639";
}

.icon-lingdang2kuai:before {
  content: "\e7b1";
}

.icon-wechat:before {
  content: "\e63f";
}

.icon-wenji:before {
  content: "\e636";
}

.icon-remen:before {
  content: "\e605";
}

.icon-taoxin:before {
  content: "\e61b";
}

.icon-zuanshi1:before {
  content: "\e63b";
}

.icon-shang:before {
  content: "\e604";
}

.icon-pinglun:before {
  content: "\e66b";
}

.icon--taoxin:before {
  content: "\e682";
}

.icon-wenzhang:before {
  content: "\e6ed";
}

.icon-xunzhang:before {
  content: "\e804";
}

.icon-xuanzhongshangcheng:before {
  content: "\e602";
}

.icon-leimupinleifenleileibie--:before {
  content: "\e613";
}

.icon-sousuo:before {
  content: "\e612";
}

.icon-zuanshi:before {
  content: "\e675";
}

.icon-yumaobi:before {
  content: "\e600";
}
`
