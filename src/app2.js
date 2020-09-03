import $ from 'jquery'
import './app2.css'
const $tabli = $("#app2 .bar li")
$tabli.on("click",(e)=>{
    const $li = $(e.currentTarget)
    const index = $li.index()
    const txt = $li.text()
    $tabli.eq(index).addClass("active").siblings().removeClass("active")
    $("#txtContent").text(txt)
})