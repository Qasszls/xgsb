<template>
  <div class="card">
    <div class="part">
      <mt-cell :title="'社保(' + startTime + ')'">
        <span
          >{{ sheBaoJine
          }}<img style="width:30px;cursor: pointer;" @click="clickDown" src="@/assets/img/down.svg"
        /></span>
      </mt-cell>
      <div class="part" v-show="isshow">
        <div class="detail">
          <div class="cash1">
            <div class="items">
              <div class="item">
                <div class="left">养老</div>
                <div class="right">{{ yangLaoJine }}</div>
              </div>
              <div class="item">
                <div class="left">医疗</div>
                <div class="right">{{ yiLiaoJine }}</div>
              </div>
              <div class="item">
                <div class="left">失业</div>
                <div class="right">{{ shiyeJine }}</div>
              </div>
              <div class="item">
                <div class="left">工伤</div>
                <div class="right">{{ gongShangJine }}</div>
              </div>
              <div class="item">
                <div class="left">生育</div>
                <div class="right">{{ shengyuJine }}</div>
              </div>
              <div class="item">
                <div class="left">大额医疗</div>
                <div class="right">{{ daEYLiaoJine }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cash1" v-show="gongJiJinJine !== 0">
        <mt-cell title="公积金金额">{{ gongJiJinJine }}</mt-cell>
      </div>
      <mt-cell title="服务费" :value="fuWuFei"></mt-cell>
    </div>
    <div class="part">
      <mt-cell title="终生会员费" :value="huiYuanFei"></mt-cell>
    </div>
    <div class="agreement">
      <div class="left">
        <input type="checkbox" @click="cliclAgree" name="agree" class="gou" />
      </div>
      <div class="right">
        我同意 <span @click="$router.push('/rule')" class="jump">《西瓜社保用户协议》</span>
      </div>
    </div>
    <div class="ts">
      *请先勾选用户服务协议
    </div>
    <div class="part">
      <mt-cell title="合计">
        <span class="countColor">{{ "￥" + zhongJi }}</span>
        <mt-button :disabled="!agree" @click="submit" type="primary" size="small"
          >立即支付</mt-button
        >
      </mt-cell>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
import { Toast } from "mint-ui";
import down from "@/assets/img/down.svg";

export default {
  data() {
    return {
      data_key: "",
      fuWuFei: "",
      zhongJi: "",
      huiYuanFei: "",
      startTime: "",
      isshow: false,
      gongJiJinJine: "",
      gongShangJine: "",
      sheBaoJine: "",
      shengyuJine: "",
      shiyeJine: "",
      yangLaoJine: "",
      yiLiaoJine: "",
      daEYLiaoJine: "",
      user: "",
      city_id: "",
      county_id: "",
      idcard: "",
      startTime: "",
      endTime: "",
      type: "",
      isGongJijin: "",
      gongjijinStartTime: "",
      gongjijinEndTime: "",
      sheBaoJiShuo: "",
      gongJiJinJiShuo: "",
      sex: "",
      data_key: "",
      agree: false,
      resData: {
        appId: "",
        nonceStr: "",
        package: "",
        paySign: "",
        signType: "",
        timeStamp: "",
      },
    };
  },
  methods: {
    init() {
      let {
        user,
        city_id,
        county_id,
        idcard,
        startTime,
        endTime,
        type,
        isGongJijin,
        gongjijinStartTime,
        gongjijinEndTime,
        sheBaoJiShuo,
        gongJiJinJiShuo,
        sex,
      } = this.$route.params;
      this.startTime = startTime;
      this.idcard = idcard;
      this.user = user;
      this.city_id = city_id;
      this.county_id = county_id;
      this.endTime = endTime;
      this.type = type;
      this.isGongJijin = isGongJijin;
      this.gongjijinStartTime = gongjijinStartTime;
      this.gongjijinEndTime = gongjijinEndTime;
      this.sheBaoJiShuo = sheBaoJiShuo;
      this.gongJiJinJiShuo = gongJiJinJiShuo;
      this.sex = sex;
      axios({
        url: "http://api.fashi77.com/api/v1/goods/order/confirm",
        method: "post",
        data: {
          chanbaoren: user,
          chanBaoCity: city_id,
          chanBaoArea: county_id,
          idCard: idcard || "230421199612112415",
          huKouType: Number.parseInt(type),
          startTime: startTime,
          endTime: endTime,
          isGongJijin: isGongJijin,
          gongjijinStartTime: gongjijinStartTime,
          gongjijinEndTime: gongjijinEndTime,
          sheBaoJiShuo: sheBaoJiShuo,
          gongJiJinJiShuo: gongJiJinJiShuo,
          sex: sex,
        },
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        headers: {
          Ukey: Cookies.get("UKey"),
          OauthExp: Cookies.get("oauth_token"),
          Authorization: "Bearer" + Cookies.get("v_key"),
        },
      })
        .then(({ data }) => {
          if (data.code === -1) {
            Toast({
              message: data.msg,
              duration: 2000,
            });
            setTimeout(() => {
              this.$router.go(-1);
            }, 1900);
          } else if (data.code === 1) {
            let {
              yiLiaoJine,
              yangLaoJine,
              shiyeJine,
              shengyuJine,
              gongShangJine,
              gongJiJinJine,
              daEYLiaoJine,
              fuWuFei,
              zhongJi,
              huiYuanFei,
              sheBaoJine,
            } = data.data.data_model.queRenOrderDate;
            this.fuWuFei = fuWuFei;
            this.zhongJi = zhongJi;
            this.huiYuanFei = huiYuanFei;
            this.sheBaoJine = sheBaoJine;
            this.daEYLiaoJine = daEYLiaoJine;
            this.gongJiJinJine = gongJiJinJine;
            this.gongShangJine = gongShangJine;
            this.shengyuJine = shengyuJine;
            this.shiyeJine = shiyeJine;
            this.yangLaoJine = yangLaoJine;
            this.yiLiaoJine = yiLiaoJine;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      axios({
        url: "http://api.fashi77.com/api/v1/goods/order/submit",
        method: "post",
        data: {
          chanbaoren: this.user,
          chanBaoCity: this.city_id,
          chanBaoArea: this.county_id,
          idCard: this.idcard,
          huKouType: Number.parseInt(this.type),
          startTime: this.startTime,
          endTime: this.endTime,
          isGongJijin: this.isGongJijin,
          gongjijinStartTime: this.gongjijinStartTime,
          gongjijinEndTime: this.gongjijinEndTime,
          sheBaoJiShuo: this.sheBaoJiShuo,
          gongJiJinJiShuo: this.gongJiJinJiShuo,
          sex: this.sex,
        },
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        headers: {
          Ukey: Cookies.get("UKey"),
          OauthExp: Cookies.get("oauth_token"),
          Authorization: "Bearer" + Cookies.get("v_key"),
        },
      }).then(({ data }) => {
        if (data.code === 1) {
          axios({
            url: "http://api.fashi77.com/api/v1/pays/gotopay",
            method: "post",
            data: {
              ordercode: data.data.data_key,
              wxopenid: Cookies.get("openid"),
              spip: data.data.data_text,
            },
            headers: {
              Ukey: Cookies.get("UKey"),
              OauthExp: Cookies.get("oauth_token"),
              Authorization: "Bearer" + Cookies.get("v_key"),
            },
          }).then(async ({ data }) => {
            let wxData = JSON.parse(data.data.data_model.respondData);
            let { appId, paySign, signType, nonceStr, timeStamp } = JSON.parse(wxData.OrderInfo);
            let packageValue = JSON.parse(wxData.OrderInfo).package;
            this.resData.appId = appId; //公众号名称，由商户传入
            this.resData.timeStamp = timeStamp; //时间戳，自1970年以来的秒数
            this.resData.nonceStr = nonceStr; //随机串
            this.resData.packageValue = packageValue;
            this.resData.signType = signType; //微信签名方式：
            this.resData.paySign = paySign; //微信签名
            await this.submitPay();
          });
        }
      });
    },
    async submitPay() {
      // 立即购买
      if (typeof WeixinJSBridge == "undefined") {
        // 微信验证是否可以调起支付
        if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
          document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
        }
      } else {
        this.onBridgeReady();
      }
    },
    onBridgeReady() {
      // 微信支付
      debugger;
      let _this = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: this.resData.appId, //公众号名称，由商户传入
          timeStamp: this.resData.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: this.resData.nonceStr, //随机串
          package: this.resData.packageValue,
          signType: this.resData.signType, //微信签名方式：
          paySign: this.resData.paySign, //微信签名
        },
        function(res) {
          alert(JSON.stringify(res));
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 支付成功则会为true
            _this.$router.push({ path: "/paySuccess" });
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          }
        }
      );
    },
    cliclAgree(e) {
      this.agree = e.target.checked;
    },
    clickDown() {
      this.isshow = !this.isshow;
    },
    getDates(time) {
      var date = new Date(time),
        nowYear = date.getFullYear(),
        nowMonth = date.getMonth() + 1, //注意getMonth从0开始，getDay()也是(此时0代表星期日)
        nowDay = date.getDate(),
        nowHour = date.getHours(),
        nowMinute = date.getMinutes(),
        nowSecond = date.getSeconds(),
        weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        nowWeek = weekday[date.getDay()];
      return nowYear + "-" + nowMonth;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.path === "/" || from.path === "/orders") {
      // 这个name是下一级页面的路由name
      to.meta.needReload = true; // 设置为true说明你是返回到这个页面，而不是通过跳转从其他页面进入到这个页面
    } else {
      to.meta.needReload = false;
    }
    next();
  },
  activated() {
    if (this.$route.meta.needReload) {
      this.init();
    }
  },
};
</script>

<style scoped>
.part {
  margin-bottom: 10px;
}

.cont {
  background-color: #ffffff;
  min-height: 30px;
  padding: 10px;
  line-height: 25px;
  font-size: 14px;
}

.items {
  min-height: 100px;
  background-color: #ffffff;
  padding: 0 10px;
}

.item {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 13px;
}

.mint-button--primary {
  background-color: #009688;
}

.mint-button--small {
  height: 28px;
  padding: 0 10px;
}

.agreement {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  display: flex;
}

.right {
  margin-left: 5px;
  margin-top: -2px;
}

.jump {
  color: #009e94;
}

.ts {
  padding-left: 10px;
  margin-bottom: 10px;
  color: red;
  font-size: 12px;
}

.ids {
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #f6f6f6;
  font-size: 15px;
}

.nums {
  color: #009e94;
}
.countColor {
  display: inline-block;
  position: relative;
  left: -20px;
  color: #ee8d8c;
}
</style>
