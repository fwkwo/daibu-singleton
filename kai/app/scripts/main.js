$(document).ready(function() {
  //  更换皮肤
  var change_skin = {
    b: localStorage.getItem('a');
    a: '';
    init: function() {
      var me = this;
      me.render();
      me.bind();
      if (me.b == '') {
        b = "images/bg.png";
      }
      me.bg_img.attr('src', b);
      me.mk1.eq(0).show();
    },
    render: function() {
      var me = this;
      me.bg_img = $('.bj img');
      me.hf_btn = $('.hf_btn');
      me.hf = $('.hf');
      me.sq = $('.hf_header .sq');
      me.mk1 = $('.mk1');
      me.hf_header_nav = $('.hf_header ul li');
      me.zstp_li = $('.zstp ul li');
      me.yl = $('.xztp').children('img');
      me.reset_img = $('.hf_header i');
    },
    bind: function() {
      var me = this;
      me.hf_btn.on('click', function(e) {
        e.preventDefault();
        me.fn_hf_btn();
      });
      me.sq.on('click', function() {
        me.fn_sq();
      });
      me.hf_header_nav.on('click', function() {
        var index = $(this).index();
        me.fn_hf_header_nav(index)
      });
      me.zstp_li.on('mouseover', function() {
        var index = $(this).index();
        me.fn_zstp_mouseover(index);

      });
      me.zstp_li.on('mouseout', function() {
        me.fn_zstp_mouseout();
      });
      me.zstp_li.on('click', function() {
        var index = $(this).index();
        me.fn_zstp_click(index);
      });
      me.reset_img.on('click', function() {
        me.fn_reset_img();
      })
    },
    fn_hf_btn: function() {
      var me = this;
      me.hf.slideDown();
    },
    fn_sq: function() {
      var me = this;
      me.hf.slideUp();
    },
    fn_hf_header_nav: function(index) {
      var me = this;
      me.hf_header_nav.eq(index).addClass('sure').siblings().removeClass('sure');
      me.mk1.eq(index).show().siblings('.mk1').hide();
    },
    fn_zstp_mouseover: function(index) {
      var me = this;
      var sRc = me.zstp_li.eq(index).children('img').attr('src');
      me.yl.attr('src', sRc);
    },
    fn_zstp_mouseout: function() {
      var me = this;
      me.yl.attr('src', 'images/bd.png');
    },
    fn_zstp_click: function() {
      var me = this;
      var sRcl = me.zstp_li.eq(index).children('img').attr('src');
      me.bg_img.attr('src', sRcl)
      localStorage.setItem('a', sRcl)
    },
    fn_reset_img: function() {
      localStorage.setItem('a', 'images/bg.png');
      me.bg_img.attr('src', 'images/bg.png');
    }
  }
  change_skin.init();


  // 个人信息
  var user_info = {
    init: function() {
      var me = this;
      me.render();
      me.bind();
      me.user_model.hide();
    },
    render: function() {
      var me = this;
      me.user = $('.user');
      me.user_model = $('.user_model');
    },
    bind: function() {
      var me = this;
      me.user.on('mouseover', function() {
        me.fn_show();
      })
      me.user_model.on('mouseover', function() {
        me.fn_show();
      })
      me.user.on('mouseout', function() {
        me.fn_hide();
      })
      me.user_model.on('mouseout', function() {
        me.fn_hide();
      })
    },
    fn_show: function() {
      var me = this;
      me.user_model.show();
    },
    fn_hide: function() {
      var me = this;
      me.user_model.hide();
    }
  }
  user_info.init(); //个人信息启动


  // 设置
  var setting = {
    init: function() {
      var me = this;
      me.render();
      me.bind();
      me.set_model.hide();
    },
    render: function() {
      var me = this;
      me.set = $('.set');
      me.set_model = $('.set_model');
    },
    bind: function() {
      var me = this;
      me.set.on('mouseover', function() {
        me.fn_show();
      })
      me.set_model.on('mouseover', function() {
        me.fn_show();
      })
      me.set.on('mouseout', function() {
        me.fn_hide();
      })
      me.set_model.on('mouseout', function() {
        me.fn_hide();
      })
    },
    fn_show: function() {
      var me = this;
      me.set_model.show();
    },
    fn_hide: function() {
      var me = this;
      me.set_model.hide();
    }
  }
  setting.init(); //设置模块启动

  // 侧边栏
  var aside_nav = {

    init: function() {
      var me = this;
      me.render();
      me.bind();
      me.ce.hide();
      me.ce.height(me.wH);
    },
    render: function() {
      var me = this;
      me.more_cont = $('.more_cont');
      me.ce = $('.ce');
      me.more_cont_a = $('.more_cont a');
      me.wH = $(window).height();
    },
    bind: function() {
      var me = this;
      me.more_cont.on('mouseover', function() {
        me.fn_show()
      });
      me.ce.on('mouseover', function() {
        me.fn_show()
      });
      me.more_cont.on('mouseout', function() {
        me.fn_hide()
      });
      me.ce.on('mouseout', function() {
        me.fn_hide()
      });
    },
    fn_show: function() {
      var me = this;
      me.ce.show();
      me.more_cont.css({
        background: "#f9f9f9"
      })
      me.more_cont_a.css({
        color: "#666"
      })
    },
    fn_hide: function() {
      var me = this;
      me.ce.hide();
      me.more_cont.css({
        background: "#398bfb"
      })
      me.more_cont_a.css({
        color: "#fff"
      })
    }
  }
  aside_nav.init(); //侧边栏启动

  // 搜索框
  var search = {
    init: function() {
      var me = this;
      me.render();
      me.bind();
      me.Inp.css({
        "border-color": "#38F"
      });
    },
    render: function() {
      var me = this;
      me.Inp = $('input[type="text"]'); //搜索框
      me.camera = $('.camera'); //相机icon
      me.btn = $('input[type="submit"]'); //按钮
    },
    bind: function() {
      var me = this;
      me.Inp.on('focus', function() {
        me.fn_search_show();
      });
      me.Inp.on('blur', function() {
        me.fn_search_hide();
      });
      me.camera.on('mouseover', function() {
          me.fn_camera_show();
        }),
        me.camera.on('mouseout', function() {
          me.fn_camera_hide();
        }),
        me.btn.on('mouseover', function() {
          me.fn_btn_mouseover();
        }),
        me.btn.on('mouseout', function() {
          me.fn_btn_mouseout();
        })
    },
    fn_search_show: function() {
      var me = this;
      me.Inp.css({
        "border-color": "#38F"
      });
    },
    fn_search_hide: function() {
      var me = this;
      me.Inp.css({
        "border-color": "#ccc"
      });
    },
    fn_camera_show: function() {
      var me = this;
      me.camera.css({
        "background-position": "0px -20px"
      })
    },
    fn_camera_hide: function() {
      var me = this;
      me.camera.css({
        "background-position": "0px 0px"
      })
    },
    fn_btn_mouseover: function() {
      var me = this;
      me.btn.css({
        "background": "#2B7FF5"
      })
    },
    fn_btn_mouseout: function() {
      var me = this;
      me.btn.css({
        "background": "#38F"
      })
    }
  }
  search.init() //搜索模块启动


  //  follow
  var follow_model = {
    open: true,
    init: function() {
      var me = this;
      me.render();
      me.bind();
    },
    render: function() {
      var me = this;
      me.cont_nav = $('.content ul').children('li'); //fllow tab_nav
      me.cont = $('.content').children('div'); //fllow tab_cont
      me.slec_model = $('.slec_model'); //slec_model
      me.slec_model_b = $('.slec_model>b'); //返利框
      me.follow_box = $('.follow_box'); //follow_box
      me.add_box = $('.add_box'); //add_box
      me.follow_tit_box = $('.follow_tit_box'); //follow_tit_box
      me.follow_do = $('.follow_do'); //follow_do
    },
    bind: function() {
      var me = this;
      me.slec_model.on('click', function() {
        me.fn_slec_model();
      });
      me.follow_box.on('click', function() {
        me.fn_follow_box();
      });
      me.follow_tit_box.on('mouseover', function() {
        me.fn_follow_do_show();
      });
      me.follow_tit_box.on('mouseout', function() {
        me.fn_follow_do_hide();
      });
      me.cont_nav.on('click', function() {
        var index = $(this).index();
        me.fn_tab(index);
      })
    },
    fn_slec_model: function() {
      var me = this;
      if (me.open == true) {
        me.slec_model_b.addClass('slec');
        me.open = false;
      } else {
        me.slec_model_b.removeClass('slec');
        me.open = true;
      }
    },
    fn_follow_box: function() {
      var me = this;
      me.add_box.toggle();
    },
    fn_follow_do_show: function() {
      var me = this;
      me.follow_do.show();
    },
    fn_follow_do_hide: function() {
      var me = this;
      me.follow_do.hide();
    },
    fn_tab: function(index) {
      var me = this;
      me.cont_nav.eq(index).addClass('on').siblings().removeClass('on');
      me.cont.eq(index).show().siblings('div').hide();
    }
  };
  follow_model.init(); //fllow 启动；



  // 回到顶部
  var back_Top = {
    init: function() {
      var me = this;
      me.render();
      me.bind();
    },
    render: function() {
      var me = this;
      me.window = $(window);
      me.scroll_top = $('.scroll_top');
      me.icon = $('.scroll_top').children('span');
      me.font = $('.scroll_top').children('div');
      me.body = $('body,html');
    },
    bind: function() {
      var me = this;
      me.window.on('scroll', function() {
        me.fn_scroll();
      });
      me.scroll_top.on('mouseover', function() {
        me.fn_scroll_mouseover();
      });
      me.scroll_top.on('mouseout', function() {
        me.fn_scroll_mouseout;
      });
      me.scroll_top.on('click', function() {
        me.fn_body();
      })
    },
    fn_scroll: function() {
      var me = this;
      if (me.window.scrollTop() > 0) {
        me.scroll_top.show();
      } else {
        me.scroll_top.hide();
      }
    },
    fn_scroll_mouseover: function() {
      var me = this;
      me.icon.hide();
      me.font.show();
    },
    fn_scroll_mouseout: function() {
      var me = this;
      me.icon.show();
      me.font.hide();
    },
    fn_body: function() {
      var me = this;
      me.body.animate({
        scrollTop: 0
      });
    }
  };
  back_Top.init() //回到顶部  启动

  var weather_model = {
      init: function() {
        var me = this;
        me.render();
        me.bind();
      },
      render: function() {
        var me = this;
        me.weather = $('.weather');
        me.weather_info = $('.weather_info');
      },
      bind: function() {
        var me = this;
        me.weather.on('mouseover', function() {
          me.fn_weather_show();
        });
        me.weather_info.on('mouseover', function() {
          me.fn_weather_show();
        });
        me.weather.on('mouseout', function() {
          me.fn_weather_hide();
        });
        me.weather_info.on('mouseout', function() {
          me.fn_weather_hide();
        });
      },
      fn_weather_show: function() {
        var me = this;
        me.weather_info.show();
      },
      fn_weather_hide: function() {
        var me = this;
        me.weather_info.hide();
      }
    }
    // 天气预报
  weather_model.init() // 天气预报模块 启动；

})
