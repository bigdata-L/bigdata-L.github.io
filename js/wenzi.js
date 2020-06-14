/ *榧犳爣镣瑰向鏂囧瓧鐗虄晥* /
var a_idx = 0;
jQuery（document）.ready（function（$）{
    $（“ body”）。click（function（e）{
        // var a = new Array（“鉂yu瘜dorm Hengtan”，“鉂yu皯涓烩轳”，“鉂yu枃鏄庘轳”，“鉂yu氰璋悫轳”，“鉂よ嚜鐢平潳”，“鉂钩绛夆轳”，“鉂yu叕姝b轳”，“鉂yu硶娌烩轳”，“鉂埍镀獩轳”，“鉂嚍涓气潳” YOYOSHOJI♀潳“，”鉂弸锽勨轳“）;
        var a = new Array（“瀵屽MY”，“姘戜财富”，“鏂囨槑”，“霜岃皭”，“镊敱”，“骞”，“鏏”，“娉“荒唐”，“鐖卞浗”，“鏁笟”，“璇氢俊”，“鍙嫔杽”）；
        var $ i = $（“ <span> </ span>”）。text（a [a_idx]）;
        a_idx =（a_idx +1）％a.length;
        var x = e.pageX，
        y = e.pageY;
        $ i.css（{
            “ z-index”：999999999999999999999999999999999999999999999999999999999999999999999，
            “顶部”：y-20，
            “左”：x，
            “ position”：“绝对”，
            “ font-weight”：“粗体”，
            “ color”：“ rgb（” + ~~（255 * Math.random（））+“，” + ~~（255 * Math.random（））+“，” + ~~（255 * Math.random（ ））+“）”
        }）;
        $（“ body”）。append（$ i）;
        $ i.animate（{
            “顶部”：y-180，
            “不透明度”：0
        }，
        1500，
        function（）{
            $ i.remove（）;
        }）;
    }）;
}）;