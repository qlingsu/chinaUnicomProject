<template>
  <div>批量核查转定
    <a-time-line :items="items"></a-time-line>
  </div>
</template>
<script>
export default {
  data(){
    return  {
      items:[{
        icon:"gouwuche",
        name:"节点1"
      },{
        icon:"",
        name:"节点2"
      },
      {
        icon:"",
        name:"节点3"
      },
      {
        icon:"",
        name:"节点4"
      }]
    }

  },
  mounted(){
    let self = this;
    
  }
}
</script>