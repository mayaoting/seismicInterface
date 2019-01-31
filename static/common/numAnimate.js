/**
 * Created by 哈士奇 on 2018/7/23.
 */
(function ($) {
    /*jQuery对象添加  runNum  方法*/
    $.fn.extend({
        /*
         *    滚动数字
         *    @ val 值，    params 参数对象
         *    params{addMin(随机最小值),addMax(随机最大值),interval(动画间隔),speed(动画滚动速度),width(列宽),height(行高)}
         */
        runNum: function (val, params) {
            /*初始化动画参数*/
            var valString = val || '70225800'
            var par = params || {};
            var runNumJson = {
                el: $(this),
                value: valString,
                valueStr: valString.toString(10),
                width: par.width || 20,
                height: par.height || 50,
                addMin: par.addMin || 10000,
                addMax: par.addMax || 99999,
                interval: par.interval || 3000,
                speed: par.speed || 1000,
                width: par.width || 20,
                length: valString.toString(10).length,
                direction: par.direction || "left"
            };
            $._runNum._list(runNumJson.el, runNumJson);
            // $._runNum._interval(runNumJson.el.children("li"),runNumJson);
        },
        changeNum: function (val, params) {
            var valString = val || '70225800'
            var par = params || {};
            var runNumJson = {
                el: $(this),
                value: valString,
                valueStr: valString.toString(10),
                width: par.width || 20,
                height: par.height || 50,
                addMin: par.addMin || 10000,
                addMax: par.addMax || 99999,
                interval: par.interval || 3000,
                speed: par.speed || 1000,
                width: par.width || 20,
                length: valString.toString(10).length,
                direction: par.direction || "left"
            };
            $._runNum._animate($(this).children("li"), val.toString(10), runNumJson);
        }
    });
    /*jQuery对象添加  _runNum  属性*/
    $._runNum = {
        /*初始化数字列表*/
        _list: function (el, json) {
            var str = '';
            if (json.direction == "left") {
                //靠左
                el.addClass("left")
                var numLength = 5;
                for (var i = 0; i < numLength; i++) {

                    //w应该是显示的数字的位移数量
                    var w = json.width * (i-(numLength-json.length));

                    var t;
                    if ((numLength - i) > json.length) {
                        t = 0;
                    } else {
                        t = json.height * parseInt(json.valueStr[json.length - (numLength - i)]);
                    }

                    var h = json.height * 10;
                    str += '<li style="width:' + json.width + 'px;left:' + w + 'px;top: ' + -t + 'px;height:' + h + 'px;" data="'+t+'">';
                    for (var j = 0; j < 10; j++) {
                        str += '<div style="height:' + json.height + 'px;line-height:' + json.height + 'px;">' + j + '</div>';
                    }
                    str += '</li>';
                }
            } else {
                //靠右
                el.addClass("right")
                //补空位

                var numLength = 5;
                for (var i = 0; i < numLength; i++) {

                    var w = json.width * (numLength - i - 1);
                    var t;
                    if ((numLength - i) > json.length) {
                        t = 0;
                    } else {
                        t = json.height * parseInt(json.valueStr[json.length - (numLength - i)]);
                    }

                    var h = json.height * 10;
                    str += '<li style="width:' + json.width + 'px;right:' + w + 'px;top: ' + -t + 'px;height:' + h + 'px;" data="'+t+'">';

                    // str+='<div style="height:'+json.height+'px;line-height:'+json.height+'px;"></div>';
                    for (var j = 0; j < 10; j++) {
                        str += '<div style="height:' + json.height + 'px;line-height:' + json.height + 'px;">' + j + '</div>';
                    }
                    str += '</li>';
                }
            }
            el.html(str);
            $._runNum._overHidden(el.children("li"),json);
        },
        /*生成随即数*/
        _random: function (json) {
            var Range = json.addMax - json.addMin;
            var Rand = Math.random();
            var num = json.addMin + Math.round(Rand * Range);
            return num;
        },
        /*执行动画效果*/
        _animate: function (el, value, json) {
            for (var x = el.length - value.length; x < el.length; x++) {
                var topPx = value[x - (el.length - value.length)] * json.height;
                //如果是数字在左侧，那么还需要增加一个位移的判断
                if(json.direction == "left"){
                    var w = json.width * (x-(5-value.length));
                    el.eq(x).animate({left: w + 'px'}, json.speed/2);
                }
                el.eq(x).animate({top: -topPx + 'px'}, json.speed);
                el.eq(x).attr("data", topPx)
            }
            $._runNum._overHidden(el,value);
        },
        /*多于部分隐藏*/
        _overHidden: function (el,json) {
            var still = true;
            for (var i = 0; i < el.length - 1; i++) {
                if (still) {

                    if (!el.eq(i).attr("data") || el.eq(i).attr("data") == 0) {
                        el.eq(i).hide();
                    }else{
                        el.eq(i).show();
                    }
                    var nextIndex = parseInt(i) + parseInt(1);
                    if (!(!el.eq(i).attr("data") || el.eq(i).attr("data") == 0)) {
                        el.eq(nextIndex).show()
                        still = false;
                    }
                } else {
                    return;
                }
            }
        },
        /*定期刷新动画列表*/
        _interval: function (el, json) {
            var val = json.value;
            setInterval(function () {
                val += $._runNum._random(json);
                $._runNum._animate(el, val.toString(10), json);
            }, json.interval);
        }
    }
})(jQuery);