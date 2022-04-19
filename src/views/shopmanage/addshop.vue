<template>
    <div class="add">
        <div class="dq">
            当前位置：商品管理 > 新增商品
        </div>
        <div style="margin-top: 40px;">
            产品名称：
            <el-input v-model="name" style="width: 600px;"></el-input>
        </div>
        <div style="margin-top: 40px;">
            产品价格：
            <el-input v-model="name" style="width: 300px;"></el-input>
            产品专柜价，例：1800.00
        </div>
        <div style="margin-top: 40px;">
            <editor style="margin-top: 80px;" id="tinymce" v-model="value" :init="init"></editor>
        </div>
        <div style="margin-top: 40px;">
            <el-upload class="upload-demo" drag action="" name="image" :http-request="upload" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div>
    </div>
</template>

<script>
    import tinymce from "tinymce";
    import Editor from "@tinymce/tinymce-vue";
    import 'tinymce/themes/silver/theme'
    import request from '@/utils/request'
    export default {
        name: "Addshop",
        components: {
            Editor
        },
        data() {
            return {
                init: {
                    language_url: 'tinymce/langs/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: 'tinymce/skins/ui/oxide',
                    height: 500,
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    toolbar:
                        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false,
                    images_upload_handler: (blobInfo, success, failure) => {
                        success('data:image/jpeg;base64,' + blobInfo.base64())
                    },
                },
                value: "",
                name: ""
            }
        },
        mounted() {
            tinymce.init({});
        },
        methods: {
            upload(pro){
                let fd = new FormData();
                console.log(pro)
                fd.append("image",pro.file);
                request({
                    url:"/upload",
                    method:"post",
                    data: fd
                }).then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add {
        padding: 0px 30px;
        background-color: #EDF0F5;
        height: 1000px;

        .dq {
            color: #00BCBA;
            background-color: white;
            margin-bottom: 15px;
            line-height: 40px;
            padding: 0px 15px;
            position: relative;
            top: 20px;
        }


    }
</style>