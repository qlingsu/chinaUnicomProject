<style>
    /* .a-audit-info-div {
      box-shadow: 5px 5px 5px #e0f1ff, 5px -5px 5px #e0f1ff, -5px 5px 5px #e0f1ff,
        -5px -5px 5px #e0f1ff;
      margin: auto;
      border: 1px solid #ccc;
      width: 90%;
      margin-top: 10px;
    }
    .a-audit-info-title {
      margin-top: 15px;
      padding-bottom: 10px;
      padding-left: 15px;
      color: #548fda;
      font-size: 14px;
      border-bottom: 1px solid;
    }
    .a-audit-info-detail {
      font-size: 12px;
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: 15px;
    }
    .a-audit-info-line {
      display: flex;
    }
    .a-audit-info-detail-title {
      color: #b1afaf;
    }
    .a-audit-info-arrow {
      position: relative;
      right: 10px;
      bottom: 55px;
      font-size: 20px;
      float: right;
      font-weight: bold;
      color: #a09d9d;
    }
    .a-audit-info-status {
      width: 60px !important;
      font-size: 14px;
      text-align: center;
      border: 1px solid #2785e7;
      color: #2785e7;
      font-weight: normal;
      border-radius: 25px;
      height: 32px !important;
      line-height: 32px !important;
    } */
</style>
<template>
    <!-- 信息卡片---审批用 -->
    <div class="a-audit-info-div">
        <div class="a-audit-info-title">
            <div class="a-audit-info-line">{{info.title}}</div>
        </div>
        <div class="a-audit-info-detail">
            <div>
                <div class="a-info-line">
                    <div class="a-audit-info-detail-title">批次号：</div>
                    <div>{{info.id}}</div>
                </div>
                <div class="a-info-line">
                    <div class="a-audit-info-detail-title">业务类型：</div>
                    <div>{{info.type}}</div>
                </div>
                <div class="a-info-line">
                    <div class="a-audit-info-detail-title">时间：</div>
                    <div>{{info.time}}</div>
                </div>
            </div>
            <a-button
                    class="a-audit-info-arrow a-audit-info-status"
                    round
                    @click="toNext"
                    v-show="!info.hasAudited"
            >去审批
            </a-button>

            <div
                    v-if="info.hasAudited"
                    class="a-audit-info-arrow a-audit-info-status"
                    style="margin-top: 20px;color:green;border:1px solid green;padding-left: 10px;
    padding-right: 10px;"
            >已审批
            </div>
            <!-- <div class="icon iconfont iconfront-copy a-info-arrow"></div> -->
        </div>


    </div>
</template>
<script>
    export default {
        name: "a-audit-info",
        props: {
            info: {
                type: Object,
                default: function () {
                    //{title id type time hasAudited}
                    return {};
                }
            }
        },
        methods: {
            toNext() {
                let self = this;
                self.$emit("toNext");
            }
        }
    };
</script>