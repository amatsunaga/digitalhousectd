function popUpContato(){
    varWindow = window.open ('./form-contato.html', "popup", "width=800,height=500,left=" + (document.documentElement.clientWidth - 800) / 2 + ",top=" + (document.documentElement.clientHeight - 500) / 2 )
    return false
}