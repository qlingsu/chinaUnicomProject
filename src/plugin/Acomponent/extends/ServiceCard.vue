<style scoped>
    .a-info-card-div {
        width: 90%;
        box-shadow: 0 0 15px 8px rgba(120, 181, 255, 0.1);
        border-radius: 5px;
        height: 200px;
        margin: auto;
        background: linear-gradient(to bottom, #c7e5ff, #fff, #fff);
        background-size: 30%;
    }

    .a-info-card-div > ul {
        width: 100%;
        display: table;
        margin-top: 20px;
    }

    .a-info-card-list {
        display: table-cell;
        width: 45%;
        border-right: 1px solid #e1e1e1;
        list-style: none;
    }

    .a-info-card-list:last-child {
        border-right: 0 none;
    }

    .a-service-name-number {
        width: 100%;
        padding-top: 15px;
        text-align: center;
        position: relative;
    }

    .a-service-name-number > span {
        display: block;
    }

    .a-service-cards-line {
        width: 85%;
        text-align: center;
        display: table;
        margin: 10px auto 0;
    }

    .a-info-card-inner {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        padding-top: 10px;
    }
    .bg_blue{
        background: linear-gradient(to bottom, #edf6ff, #fbfeff);
    }
    .bg_orange{
        background: linear-gradient(to bottom, #fff3ea, #fbfeff);
    }
</style>
<template>
    <div class="a-info-card-div">
        <!-- 图标服务人数card -->
        <ul>
            <li class="a-info-card-list" v-for="card in cards">
                <div class="a-service-name-number">
                    <span class="f40p vertical-b c_blue_deep">{{card.number}}</span>
                    <span class=" vertical-b">{{card.name}}</span>
                </div>
                <div class="a-service-cards-line clearfix" :class="[card.id===1?'bg_blue':'bg_orange']" :key="card.id">
                    <div class="a-info-card-inner">
                        <div class="f25p" :class="[card.id===1?'c_blue':'c_orange']">{{card.officeNumber}}</div>
                        <div class="c_gray">{{card.officeText}}</div>
                    </div>
                    <div class="a-info-card-inner">
                        <div class="f25p" :class="[card.id===1?'c_blue':'c_orange']">{{card.personNumber}}</div>
                        <div class="c_gray">{{card.personText}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "a-service-card",
        props: {
            item: {
                type: Object,
                default: function () {
                    //{name:"",number:""}
                    return {};
                }
            },
            cards: {
                type: Array,
                default: function () {
                    //{name:"",number:"",icon:"",id:""}
                    return [];
                }
            }
        }
    };
</script>