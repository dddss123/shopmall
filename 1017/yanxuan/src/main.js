import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Icon,NavBar} from 'vant';
Vue.use(Icon).use(NavBar)
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Button } from 'vant';
Vue.use(Button);
import {Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { Tag } from 'vant';
Vue.use(Tag);
import {GoodsAction,GoodsActionBigBtn, GoodsActionMiniBtn} from 'vant';
Vue.use(GoodsAction)
   .use(GoodsActionBigBtn)
   .use(GoodsActionMiniBtn);
import { Panel } from 'vant'; Vue.use(Panel);
import { Search } from 'vant';
Vue.use(Search);
import { Card } from 'vant';
Vue.use(Card);
import { Stepper } from 'vant';
Vue.use(Stepper);
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup); 
import { Field } from 'vant';
Vue.use(Field);
import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import router from './router/index'
import apis from './server/api'
Vue.use(apis)
Vue.config.productionTip = false
import utils from '@/lib/util.js'
import store from '@/store/store.js'

Vue.use(utils)

new Vue({
  el: '#app',
  store,
  components: { App },
  router,
  template: '<App/>'
})

