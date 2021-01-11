<template>
  <div class="infos">
    <div class="part">
      <mt-cell title="参保人" to="/userinfo" is-link v-model="user" ref="user"> </mt-cell>
      <mt-cell title="参保地区" to="/userinfo" is-link v-model="unit" ref="unit"> </mt-cell>
      <mt-field
        label="身份证号"
        placeholder="请输入参保人证件号"
        type="tel"
        v-model="idcard"
      ></mt-field>
      <!-- 性别 -->
      <div class="sex">
        <div class="title">性别</div>
        <div class="select">
          <select class="sexs" v-model="sex" @change="getSex($event)">
            <option v-for="data in sexList" :value="data.id">{{ data.name }}</option>
          </select>
        </div>
      </div>
      <!-- 户籍 -->
      <div class="sex">
        <div class="title">户口类型</div>
        <div class="select">
          <select class="type" v-model="type" @change="getType($event)">
            <option v-for="data in typeList" :value="data.value">{{ data.key }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="part">
      <div class="ispay">
        <div class="tit">缴纳社保</div>
        <div class="choose">
          <span :class="isshow ? 'pay' : 'nopay'" @click="handleShows(true)">缴纳</span>
          <span :class="isshow ? 'nopay' : 'pay'" @click="handleShows(false)">不缴</span>
        </div>
      </div>
      <div v-show="isshow">
        <mt-field label="缴纳基数" v-model="sheBaoJiShuo"></mt-field>
        <div class="sex">
          <div class="title">缴纳月份</div>
          <div class="select">
            <select class="month" v-model="startTime" @change="getStartTime($event)">
              <option v-for="data in startTimeList" :value="data.value">{{ data.key }}</option>
            </select>
            <select class="month" v-model="endTime" @change="getEndTime($event)">
              <option v-for="data in endTimeList" :value="data.value">{{ data.key }}</option>
            </select>
          </div>
        </div>
        <div class="tips">当前最早可办理12月社保，最早可从2020年6月补缴社保</div>
      </div>
    </div>

    <div class="part">
      <div class="ispay">
        <div class="tit">缴纳公积金</div>
        <div class="choose">
          <span :class="isshow2 ? 'pay' : 'nopay'" @click="handleShows2(true)">缴纳</span>
          <span :class="isshow2 ? 'nopay' : 'pay'" @click="handleShows2(false)">不缴</span>
        </div>
      </div>
      <div v-show="isshow2">
        <mt-field label="缴纳基数" v-model="gongJiJinJiShuo"></mt-field>
        <div class="sex">
          <div class="title">缴纳月份</div>
          <div class="select">
            <select class="month" v-model="gongjijinStartTime" @change="getGStartTime($event)">
              <option v-for="data in startGTimeList" :value="data.value">{{ data.key }}</option>
            </select>
            <select class="month" v-model="gongjijinEndTime" @change="getGEndTime($event)">
              <option v-for="data in endGTimeList" :value="data.value">{{ data.key }}</option>
            </select>
          </div>
        </div>
        <div class="tips">当前可办理12月公积金，最早可从2020年6月补缴公积金</div>
      </div>
    </div>

    <div class="part" v-show="isshow || isshow2">
      <div class="ispay">
        <div class="tit">缴纳明细</div>
        <div class="choose">每月金额 × 缴纳月数</div>
      </div>
      <div class="detail">
        <div class="cash1" v-show="isshow">
          <div class="items">
            <div class="itemtit">
              <div class="left">社保金额</div>
              <div class="right">{{ sheBaoJine }}</div>
            </div>
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
        <div class="cash1" v-show="isshow2">
          <mt-cell title="公积金金额">{{ gongJiJinJine }}</mt-cell>
        </div>
        <div class="cash1">
          <mt-cell title="总计(不包含服务费)">{{ zhongJi }} </mt-cell>
        </div>
      </div>
    </div>
    <mt-button :disabled="isGongJijin === 0" type="primary" size="large" class="btn" @click="submit"
      >生成订单</mt-button
    >
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
import md5 from "js-md5";
import router from "../../router.js";
import { Toast } from "mint-ui";

export default {
  name: "Social",
  data() {
    return {
      isshow: true,
      isshow2: true,
      flex: 1,
      user: "",
      unit: "",
      idcard: "",
      sheBaoJiShuo: "",
      gongJiJinJiShuo: "",
      county_id: "",
      month: "",
      sex: 4,
      sexList: [
        {
          id: 4,
          name: "男",
        },
        {
          id: 7,
          name: "女",
        },
      ],
      type: "",
      typeList: [],
      city_id: "",
      startTime: "",
      startTimeList: [],
      endTime: "",
      endTimeList: [],
      gongjijinStartTime: "",
      startGTimeList: [],
      gongjijinEndTime: "",
      endGTimeList: [],
      gongJiJinJine: "",
      gongShangJine: "",
      sheBaoJine: "",
      shengyuJine: "",
      shiyeJine: "",
      yangLaoJine: "",
      yiLiaoJine: "",
      zhongJi: "",
      daEYLiaoJine: "",
    };
  },
  mounted() {
    //获取登录信息
    console.log("UKey", Cookies.get("UKey"), "oauth_token", Cookies.get("oauth_token"));
    let header = {
      Ukey: Cookies.get("UKey"),
      OauthExp: Cookies.get("oauth_token"),
      Authorization: "Bearer" + Cookies.get("v_key"),
    };
    let data = {
      oauth_name: "Wx",
      openid: Cookies.get("openid"),
      v_key: md5(Cookies.get("v_key")),
    };

    let city_id = "";
    axios
      .post("http://api.fashi77.com/api/v1/logon/oauth_login", data, header)
      .then((res) => {
        console.log("oauth_login");
        if (header.Ukey === "" || header.Ukey === null) {
          Cookies.set("UKey", res.data.data.data_key, 60 * 60);
        }
        if (
          res.data.data.data_model === "" ||
          res.data.code === -1 ||
          res.data.data.data_model === null
        ) {
          this.$router.push(`/login`);
        } else if (res.data.data.data_list === "" || res.data.data.data_list === null) {
          this.$router.push(`/userinfo`);
        } else {
          this.user = res.data.data.data_list;
          // 获取用户信息
          axios({
            url: "http://api.fashi77.com/api/v1/uinfo/editinfo",
            method: "get",
            data: data,
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            headers: {
              Ukey: Cookies.get("UKey") || "",
              OauthExp: Cookies.get("oauth_token"),
              Authorization: "Bearer" + Cookies.get("v_key"),
            },
          })
            .then(async (res) => {
              console.log("editinfo");

              this.unit = res.data.data.data_model.cityName + res.data.data.data_model.countyName;
              this.city_id = res.data.data.data_model.city_id;
              this.county_id = res.data.data.data_model.county_id;
              //社保公积金基数
              await axios
                .get("http://api.fashi77.com/api/v1/Basis/GetJishu?cityId=" + this.city_id)
                .then((res) => {
                  this.sheBaoJiShuo = res.data.data.data_model.sheBaoJiShuo;
                  this.gongJiJinJiShuo = res.data.data.data_model.gongJiJinJiShuo;
                });
              //获取户口类型
              await axios.get("http://api.fashi77.com/api/v1/Basis/GetHuKouType").then((res) => {
                this.typeList = res.data.data.data_list;
                this.type = res.data.data.data_list["0"].value;
              });
              console.log(this.typeList);
              //获取缴费月份
              await axios.get("http://api.fashi77.com/api/v1/Basis/PayMonthList").then((res) => {
                this.startTimeList = res.data.data.data_list;
                this.endTimeList = res.data.data.data_key;
                this.startTime = res.data.data.data_list[0].value;
                this.endTime = res.data.data.data_key[0].value;
                this.startGTimeList = res.data.data.data_list;
                this.endGTimeList = res.data.data.data_key;
                this.gongjijinStartTime = res.data.data.data_list[0].value;
                this.gongjijinEndTime = res.data.data.data_key[0].value;
                console.log(res);
              });
              await this.getDetail();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    sheBaoJiShuo(n, o) {
      if (n !== o) {
        this.getDetail();
      }
    },
    gongJiJinJiShuo(n, o) {
      if (n !== o) {
        this.getDetail();
      }
    },
  },
  computed: {
    isGongJijin() {
      if (this.isshow && this.isshow2) {
        return 1;
      } else if (this.isshow && !this.isshow2) {
        return 5;
      } else if (!this.isshow && this.isshow2) {
        return 10;
      } else {
        return 0;
      }
    },
  },
  methods: {
    getDetail() {
      //得到社保公积金缴费详情(页面显示)
      axios({
        url: "http://api.fashi77.com/api/v1/Basis/PayDetails",
        method: "post",
        data: {
          cityId: this.city_id,
          huKouType: Number.parseInt(this.type),
          startTime: this.startTime,
          endTime: this.endTime,
          gongjijinStartTime: this.gongjijinStartTime,
          gongjijinEndTime: this.gongjijinEndTime,
          isGongJijin: this.isGongJijin,
          sheBaoJiShuo: this.sheBaoJiShuo,
          gongJiJinJiShuo: this.gongJiJinJiShuo,
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
          let {
            zhongJi,
            yiLiaoJine,
            yangLaoJine,
            shiyeJine,
            shengyuJine,
            sheBaoJine,
            gongShangJine,
            daEYLiaoJine,
            gongJiJinJine,
          } = data.data.data_model;
          this.daEYLiaoJine = daEYLiaoJine;
          this.gongJiJinJine = gongJiJinJine;
          this.gongShangJine = gongShangJine;
          this.sheBaoJine = sheBaoJine;
          this.shengyuJine = shengyuJine;
          this.shiyeJine = shiyeJine;
          this.yangLaoJine = yangLaoJine;
          this.yiLiaoJine = yiLiaoJine;
          this.zhongJi = zhongJi;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
      if (reg.test(this.idcard) === false) {
        Toast({ message: "身份证格式错误", duration: 2000 });
        return false;
      }
      this.$router.push({
        name: "Oorders",
        params: {
          user: this.user,
          city_id: this.city_id,
          county_id: this.county_id,
          idcard: this.idcard,
          type: this.type,
          startTime: this.startTime,
          endTime: this.endTime,
          isGongJijin: this.isGongJijin,
          gongjijinStartTime: this.gongjijinStartTime,
          gongjijinEndTime: this.gongjijinEndTime,
          sheBaoJiShuo: this.sheBaoJiShuo,
          gongJiJinJiShuo: this.gongJiJinJiShuo,
          sex: this.sex,
        },
      });
    },

    handleShows(value) {
      this.isshow = value;
      this.getDetail();
    },
    handleShows2(value) {
      this.isshow2 = value;
      this.getDetail();
    },
    getSex(event) {
      this.sex = Number.parseInt(event.target.value);
      this.getDetail();
    },
    getType(event) {
      this.type = Number.parseInt(event.target.value);
      this.getDetail();
    },
    getStartTime(event) {
      this.startTime = event.target.value;
      this.getDetail();
    },
    getEndTime(event) {
      this.endTime = event.target.value;
      this.getDetail();
    },
    getGStartTime(event) {
      this.gongjijinStartTime = event.target.value;
      this.getDetail();
    },
    getGEndTime(event) {
      this.gongjijinEndTime = event.target.value;
      this.getDetail();
    },
  },
};
</script>

<style scoped>
.mint-cell-value {
  color: #000000 !important;
}

.mint-cell-allow-right::after {
  border: 1px solid #000000;
}

.part {
  margin-bottom: 20px;
}

.tips {
  background-color: #ffffff;
  line-height: 20px;
  font-size: 12px;
  padding-left: 10px;
  color: gray;
}

.ispay {
  height: 50px;
  line-height: 50px;
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #f6f6f6;
  padding-left: 10px;
  font-size: 14px;
}

.choose {
  margin-left: auto;
  padding-right: 10px;
}

.pay {
  display: inline-block;
  background-color: #68c26a;
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  color: #fff;
}

.nopay {
  display: inline-block;
  width: 50px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  margin-top: 10px;
  border: 1px solid #68c26a;
}

.items {
  min-height: 100px;
  background-color: #ffffff;
  padding: 0 10px;
}

.itemtit {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.item {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 13px;
}

.sel {
  border: 0;
}

.sex {
  display: flex;
  height: 45px;
  line-height: 45px;
  background-color: #ffffff;
  font-size: 14px;
  padding-left: 10px;
}

.select {
  margin-left: auto;
}

.sexs {
  width: 50px;
  border: 0;
  height: 30px;
  line-height: 30px;
  padding: 5px;
  margin-right: 10px;
}

.type {
  width: 100px;
  border: 0;
  height: 30px;
  line-height: 30px;
  padding: 5px;
  margin-right: 10px;
}

.month {
  border: 0;
  width: 110px;
  height: 30px;
  line-height: 30px;
  padding: 3px;
  font-size: 13px;
}

.btn {
  width: 80%;
  margin-left: 10%;
}
</style>
