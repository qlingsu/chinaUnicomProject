<style scoped>

</style>
<template>
    <div style="display: block; width: 100%;">
        <!-- 风险和效能页顶部的总数card -->
        <div class="a-info-card-div">
            <div class="a-total-name-number">
                <span class=" vertical-b">{{item.name}}</span>
                <span class="f40p vertical-b c_orage">
                    {{item.number}}
                </span>
            </div>

            <div class="a-total-cards-line clearfix">
                <div v-for="card in cards" :style="{'width':cards.length>2 ? 'auto':'50%'}" :key="card.id"
                     class="a-info-card-inner">
                    <div class="f25p c_blue">{{card.number}}</div>
                    <div class="c_gray">{{card.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "a-total-card",
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