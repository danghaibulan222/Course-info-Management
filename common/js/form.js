/**
 * Created by danghaibulan on 17-6-7.
 * 表单验证jq validate
 */


$().ready(function() {
    /*登录验证*/
    $("#user_login").validate({
        submitHandler:function(form) {
            $('#user_login').ajaxSubmit();
        },
        errorElement : "span",
        errorClass : "help-block",
        focusInvalid : false,
        rules: {
            user_num:"required",
        user_password: "required"
        },
        messages: {
            user_num: {
                required: "账号不能为空"
            },
            user_password:{
                required: "密码不能为空"
            }
        },
        highlight:function (element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },
        success :  function (label) {
            var el = label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-success");
            label.remove();
        },

        errorPlacement : function (error, element) {
            element.next().remove();//删除显示图标
            element.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            element.parent('div').append(error);
        },
    });


    /*注册验证*/
    $('#new_user').validate({
        submitHandler:function(form) {
            $('#new_user').ajaxSubmit();
        },
        errorElement: "span",
        errorClass: "help-block",
        focusInvalid: false,
        rules: {
            user_num: {
                required: true
            },
            user_email: {
                required: true,
                email: true
            },
            user_password: {
                required: true,
                minlength: 6
            },
            user_password_confirmation: {
                required: true,
                equalTo: "#user_password"
            }
        },
        messages: {
            user_num: {
                required: "账号不能为空."
            },
            user_email: {
                required: "邮箱为空.",
                email:"请输入正确的邮箱"
            },
            user_password: {
                required: "密码为空.",
                minlength: "密码长度不能小于 5 个字母"
            },
            user_password_confirmation: {
                required: "再次确认密码.",
                equalTo: "两次密码输入不一致"
            },
        },
        errorPlacement: function (error, element) {
            element.next().remove();//删除显示图标
            element.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            element.parent('div').append(error);
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },

        success: function (label) {
            var el = label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-success");
            label.remove();
        }
    });


    /*学号绑定验证*/
    $("#user_bangding").validate({
        submitHandler:function(form) {
            $('#user_bangding').ajaxSubmit();
        },
        errorElement : "span",
        errorClass : "help-block",
        focusInvalid : false,
        rules: {
            user_xuehao:{
                required:true,
                minlength: 13
            },
            user_xpwd: "required"
        },
        messages: {
            user_xuehao: {
                required: "学号不能为空",
                minlength:"输入正确学号格式"
            },
            user_xpwd:{
                required: "学号密码不能为空"
            }
        },
        highlight:function (element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },
        success :  function (label) {
            var el = label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-success");
            label.remove();
        },

        errorPlacement : function (error, element) {
            element.next().remove();//删除显示图标
            element.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            element.parent('div').append(error);
        },
    });

    /*信息修改验证*/
    $('#user_info').validate({
        submitHandler:function(form) {
            $('#user_info').ajaxSubmit();
        },
        errorElement: "span",
        errorClass: "help-block",
        focusInvalid: false,
        rules: {

            user_email: {
                required: true,
                email: true
            },
            user_password: {
                required: true,
                minlength: 6
            },
            user_password2: {
                required: true,
                minlength: 6
            },
            user_password_confirmation: {
                required: true,
                equalTo: "#user_password"
            }
        },
        messages: {
            user_email: {
                required: "邮箱为空.",
                email:"请输入正确的邮箱"
            },
            user_password: {
                required: "密码为空.",
                minlength: "密码长度不能小于 5 个字母"
            },
            user_password2: {
                required: "密码为空.",
                minlength: "密码长度不能小于 5 个字母"
            },
            user_password_confirmation: {
                required: "再次确认密码.",
                equalTo: "两次密码输入不一致"
            },
        },
        errorPlacement: function (error, element) {
            element.next().remove();//删除显示图标
            element.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            element.parent('div').append(error);
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },

        success: function (label) {
            var el = label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-success");
            label.remove();
        }
    });



});






