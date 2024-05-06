<script setup>
    import { ref } from 'vue'
    import { MoreFilled } from '@element-plus/icons-vue'
    
    const drawer = ref(false)

    const activities = [
    {
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: MoreFilled,
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
        size: 'large',
        icon: MoreFilled,
    },
    {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large',
    },
    {
        content: 'Custom hollow',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
    },
    {
        content: 'Default node',
        timestamp: '2018-04-03 20:46',
    },
    ]
</script>

<template>
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
        游戏简介
    </el-button>
  
    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <h3>游戏介绍：xxxxxx</h3>
    </el-drawer>
</template>



