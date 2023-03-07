function alpha(nom){
    i=0
    nom=nom.toUpperCase()
    while((i<nom.length)&&(nom[i]>="A"&&nom[i]<="Z")){
        i=i+1
    }
    return i==nom.length}
function numerique (ch){
    i=0
    while((i<ch.length)&&(ch.charAt(i)>="0"&& ch.charAt(i)<="9")){
        i++
    }
    if (ch.lengthi){
        return false
    }
}
function verif(){
    var nom=document.getElementById("n1").value 
    var ch=document.getElementById("t1").value 
    var nom2=document.getElementById("n2").value 
    var k=document.getElementById("kids").value
    var n=document.getElementById("num").value
    var s=document.getElementById("street").value
    var c=document.getElementById("code").value
    var cit=document.getElementById("city").value
    var mail=document.getElementById("mail").value
    if ((nom=="")|| (alpha (nom)==false)){
    alert("verifer le prenom est non valide")
    return false}
    if ((nom2=="")|| (alpha (nom2)==false)){
        alert("verifer le nom est non valide")
        return false}
    if ((k=="")|| (alpha (k)==false)){
     alert("verifer le Name of kids est non valide")
         return false}
    if ((document.getElementById("r1").checked==false)&&(document.getElementById("r2").checked==false)){
     alert ("vous devez selectionner votre genre")
     return false
    }
    if ((n=="")|| (numerique (n)==false)){
        alert("verifer le n de street est non valide")
        return false}
    if ((s=="")|| (alpha (s)==false)){
     alert("verifer le Street est non valide")
        return false}
    if ((c=="")|| (numerique (c)==false)){
            alert("verifer le Postal Code est non valide")
            return false}
    if((cit=="")||(alpha(cit)==false)){
        alert ("verifier le City est non correct")
                return false}
    if((ch=="")||(numerique(ch)==false)||(ch.length!=8)){
        alert ("verifier la telephone est non correct")
        return false}
    if(document.getElementById("mail").value==""){
        alert ("verifier le mail est vide")
        return false}}
    
    /////////ki tclicki button trefreshi lpage, preventDefault() tnahi refresh
    function verifier(event){
        console.log('hh')
        event.preventDefault()
        var name=document.getElementById("name").value
        var email=document.getElementById("email").value
        var number=document.getElementById("number").value
        if ((name=="")|| (alpha (name)==false)){
            alert("verifer le name est non valide")
            return false}
        if(document.getElementById("email").value==""){
            alert ("verifier le mail est vide")
            return false}
        if ((number=="")|| (numerique (number)==false)){
            alert("verifer le number est non valide")
                return false
            }else {
                window.location.assign("./index.html")
            }
        }

    function redirect() {
        window.location.assign("./planning.html")
    }
    function adding(){
        window.location.assign("./espace.html")
    }